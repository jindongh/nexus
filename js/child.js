#!/bin/env node

var server = require('http').createServer(function(req, res) {
res.writeHead(200);
res.end('processd by chid'+process.pid);
});

process.on('message', function(m, tcp) {
if (m=='server') {
var cache = [];
console.log(JSON.stringify(tcp,function(key, value) {
    if (typeof value === 'object' && value !== null) {
        if (cache.indexOf(value) !== -1) {
            // Circular reference found, discard key
            return;
        }
        // Store value in our collection
        cache.push(value);
    }
    return value;
}));
tcp.on('connection', function(socket){
server.emit('connection', socket);
});
} else {
console.log('What '+m);
}
});

console.log('child startd ' + process.pid);
