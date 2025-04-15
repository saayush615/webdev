const express = require('express');
const app = express();
const port = 3000;

// Middleware1 : syntax
app.use((req,res,next) => { 
    console.log('m1')
    next()
 })
 // Middleware2 : syntax
app.use((req,res,next) => { 
    console.log('m2')
    next()
 })

app.get('/', (req,res) => { 
    res.send("Hello world")
 })
 app.get('/about', (req,res) => { 
    res.send("Hello about")
 })
 app.get('/contact', (req,res) => { 
    res.send("Hello contact")
 })

 app.listen(port, () => { 
    console.log(`Example app is running on ${port}`);
    
  })