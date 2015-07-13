var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var handle = {}
handle["/"]=requestHandlers.start;
server.start(router.route,handle);
