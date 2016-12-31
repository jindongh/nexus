var events = require("events");

var emitter = new events.EventEmitter();

var l1= function(){
console.log("event l1");
};

var l2 = function(){
console.log("event l2");
};

emitter.addListener("conn", l1);
emitter.on("conn", l2);

var ec = events.EventEmitter.listenerCount(emitter,
    "conn");

console.log(ec);
emitter.emit("conn");
emitter.removeListener("conn", l1);
emitter.emit("conn");
console.log(ec);

