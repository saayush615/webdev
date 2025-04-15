const express = require('express');

const app = express();
const Port = 3000;

// app.use(express.json()); // app. use() is the syntax to use any middleware
// app.post('/',(req,res) => { 
//     const {name} = req.body;
//     //const {name}, which is the syntax in ES6 to extract the given property/es from the object

//     res.send(`welcome ${name}`)
//  })

// app.get('/hello',(req,res) => { 
//     res.set('Content-Type', 'text/html');
//     res.status(200).send("<h1>The html also has been loaded</h1>")
//  })

// app.get('/',(req,res)=>{
//     res.status(200);
//     res.send("welcome to root")

// })

// Serving entire directory using middleware   
const path = require('path');

app.use('/',express.static(path.join(__dirname,'public')));

app.listen(Port,(error) => { 
    if(!error){
        console.log("the page has been loaded succesfully");
    }
    else{
        console.log("there is an error")
    }
 })