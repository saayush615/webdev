const http = require('http');

// Create a server
const server = http.createServer((req,res) => { 
    res.writeHead(200, {'content-type': 'text/plain'}); // Set response headers
    // Send response
    if(req.url == '/'){
      res.end('Welcome to homepage');
    }
    else if(req.url == '/about'){
      res.end('welcome to about page');
    }
    else{
      res.end('page not found');
    }
 });

 // Define a port
 const port = 3000;

 //start a server
 server.listen(port,() => { 
    console.log(`Server is running on port ${port}`);
  })