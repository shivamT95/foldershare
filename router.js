function route(handle,pathname,response,request){
  console.log("About to route a request for " + pathname);
  if(typeof handle[pathname] === 'function'){
    handle[pathname](response,request);
  } else {
    console.log("No request handler found for " + pathname);
    response.writeHead(404,{"Content-Type":"text/html"});
    response.write(
        '<html>'+
        '<body>'+
        '<H1>404 Not found</H1><br>'+
        'The requested url was not found on server'+
        '</body>'+
        '</html>'
        );
    response.end();
  }
}
exports.route = route;
