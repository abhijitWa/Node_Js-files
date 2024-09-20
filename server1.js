const http = require('http');

const host = 'localhost';
const port = 5001;
;
const requestListener = function(req,res)
    res.writeHead(200);
    res.end("My name is savitri");
};
const server = http.createServer(requestListener);
server.listen(port,host, ()=>{
    console.log('Server is running on http://$(host):$(port)');
    })