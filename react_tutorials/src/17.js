const http = require('http');  
const server = http.createServer((req,res) =>{  
    if(req.url ==='/'){  
        res.writeHead(200,{'Content-Type':'text/plain'});  
        res.end('Hello World\n');  
    } else{  
    }  
    res.writeHead(404,{'Content-Type':'text/plain'});  
    res.end('404 Not Found\n');  
});  

server.listen(9000,()=>{  
console.log('Server is listening on port 8000');  
}); 