var fs = require('fs')
var url = require('url')
function start(response) {
  console.log("Request handler 'start' was called.");
    var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" '+
    'content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<H1><center> FolderShare </center></H1><br>' +
    '<H2><a href="/folder"> View folder </a></H2>' +
    '</body>'+
    '</html>';
    response.writeHead(200, {"Content-Type": "text/html"});
  response.write(body);
  response.end();
}
function folder(res) {
  fs.readdir('data',function (err,data){
    if(err)
    {
      console.log(err);
      res.write("Something went wrong");
      res.end();
      return;
    }
   var body = '<html>'+
    '<head>'+
    '<title> Folder </title>'+
    '</head>'+
    '<body>'+
   '<H3>Folder has following files :-<br></H3>';
    for(x in data){
      console.log(data[x]);
      body+='<b><a href ="/download?'+data[x]+'">'+data[x]+'</a></b><br>';
    }
    body+='</body></html>'
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(body);
    res.end();
  });
}
function download(res,req){
  console.log(url.parse(req.url));
  fs.readdir('data',function (err,data){
    if(err)
    {
      console.log(err);
      res.write("Something went wrong");
      res.end();
      return;
    }
    var file = url.parse(req.url).query;
    console.log(data);
    if (data.indexOf(file)>-1)
    {
      stream = fs.createWriteStream(file);
      fs.createReadStream('data/'+file).pipe(res);
    }
    else
    {
      res.write('File not found');
      res.end();
    }
  });
}
exports.start = start;
exports.folder = folder;
exports.download = download;
