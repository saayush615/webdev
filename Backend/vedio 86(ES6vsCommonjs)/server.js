// const { createServer } = require('node:http');  //->common js (reqire())

import { createServer } from 'node:http'; // ->ES6 (to use this main ke niche(in package.json) "type": "module" karna)
const hostname = '127.0.0.1';
const port = 3000;
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1> Hello World </h1> ');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// not able to run nodemon moodule due to security reason so restart the server again and again

// In package.json under main 
// type : commonjs is default (syncronously load hote hai)
// type : module for ES6 (asyncronously load hote hai)

// read more about it and understand both commonjs and es6 : https://www.freecodecamp.org/news/modules-in-javascript/