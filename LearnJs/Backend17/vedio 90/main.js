const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")
// routes
const blog = require('./routes/blog')

// middleware is used to modify the request 

app.use(express.static("public")) //1.  app.use (middleware) attract the request and ask the hari.txt kya app public folder me ho . toh answer yes aata hai // 2. to run this move to the cd 'vedio 90'

// routes
app.use('/blog', blog)

// // middleware 1 (ek funciton likho aur fir usse app.use me dalo . shoutcut: follow niche wala syntax)

app.use((req, res, next) => {
    console.log(req.headers) // very imp it gives the info of user
    req.harry = "I am harry bhai";

  // Example =  why it is used -> Logger for an application
    console.log(`${Date.now()} is a ${req.method}`)
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method} \n`)
    next()
  })

// // middleware 2
app.use((req, res, next) => {
    console.log('m2')
    // res.send("Sorry no hello world you are hacked") // 1. is middle ware response then it will not move downware it return with middleware response only
    // 2. but in the ideal case we will not respond in the middleware it is a bad practice
    //3.  you will be getting error bcoz you are responding and then also you are using next()
    next()
  })

// route handlers
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('Hello about!' + req.harry)
})

app.get('/contact', (req, res) => {
  res.send('Hello contact!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})