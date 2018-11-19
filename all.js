var http = require("http");
http.createServer(function(requers,response){
 response.writeHead(200,{"Content-Type":"text/plain"})
 response.write("Hello")
 response.end()
}).listen(8080);


function require(module){
  return {
    createServer:function(){}
  }
}