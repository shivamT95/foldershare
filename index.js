var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var handle = {}
handle["/"]=requestHandlers.start;
handle["/folder"]=requestHandlers.folder;
handle["/download"]=requestHandlers.download;
server.start(router.route,handle);
