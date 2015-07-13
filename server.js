var http = require("http");
var url = require("url");
function start(route,handle) {
http.createServer(function(request,response) {
  var pn = url.parse(request.url).pathname;
  console.log( " request for "+pn+ " recieved");
  route(handle,pn,response,request);
}).listen(8888);
console.log("sever started");
}
exports.start = start;
