const http = require('http');
const fs = require('fs');
const path = require('path');

// Function to serve Html files
const serveFile = (filepath,res) => { 
    fs.readFile(filepath, (err, data) => { 
        if(err){
            res.writeHead(500, {'content-type': 'text/plain'});
            res.end('Internal Server Error');
        } else {
            res.writeHead(200, {'content-type': 'text/html'});
            res.end(data);
        }
     });
 };


// // Create HTTP server
const server = http.createServer((req,res) => { 
    let filepath;
    if(req.url === '/'){
        filepath = path.join(__dirname, 'index.html');
    }
    else if(req.url === '/about'){
        filepath = path.join(__dirname, 'about.html');
    } else {
        filepath = path.join(__dirname, '404.html');
    }

    serveFile(filepath,res);
 })

 const port = 3000;
 server.listen(port, () => { 
   console.log(`Server running on port ${port}`); 
  });