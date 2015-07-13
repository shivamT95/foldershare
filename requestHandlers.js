function start(response) {
  console.log("Request handler 'start' was called.");
    var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" '+
    'content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    'Hello World'
    '</body>'+
    '</html>';
    response.writeHead(200, {"Content-Type": "text/html"});
  response.write(body);
  response.end();
}
exports.start = start;
