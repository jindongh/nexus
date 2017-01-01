var net = require('net');
var cp = require('child_process');

var child1 = cp.fork('child.js');
var child2 = cp.fork('child.js');

var server = net.createServer();
server.listen(8081, function() {
child1.send('server', server);
child2.send('server', server);
server.close();
console.log('Listen on 8081');
});
