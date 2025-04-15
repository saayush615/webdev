const express = require('express');
const app = express();
const port = 3000;

const blog = require('./routes/blog'); //for learining about routes
const shop = require('./routes/shop'); //for learining about routes

app.use(express.static("public"));

// app.use('/blog',blog); //for learining about routes
// app.use('/shop',shop); //for learining about routes

// Get Request
app.get('/',(req,res) => { 
  console.log('Hey it is get request');
  res.send('Hello world get req!')
 }).post('/',(req,res) => { 
  console.log('Hey it is post request');
  res.send('Hello world post req!')
 }).put('/',(req,res) => { 
  console.log('Hey it is put request');
  res.send('Hello world put req!')
 })
 
 app.delete('/',(req,res) => { 
  console.log('Hey it is delete request');
  res.send('Hello world delete req!')
 })

 // to serve an html file 
 app.get('/index',(req,res) => { 
  console.log('Hey it is get request');
  res.sendFile('templates/index.html', {root: __dirname});
 })

 // return json
 app.get('/api',(req,res) => { 
  res.json({a: 1, b:2, c:3});
 })

 // express router start from here

app.listen(port, () => { 
  console.log(`Server is running on port ${port}`);
  
 })