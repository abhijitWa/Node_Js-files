const http = require('http')

const host= 'localhost'
const port =5001

const requestListener = function(req, res){
    res.writeHead(200);
    res.end("hello from server")
}


const server=http.createServer(requestListener);
server.listen(port,host, () =>{
    console.log('server is running on http://${host}:${port}');

})