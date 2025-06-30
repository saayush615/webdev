const express = require('express')

// As your application grows, managing all your routes in a single file (like app.js) becomes difficult. Routers allow you to organize routes into separate files, making the code more modular and easier to manage.
// Example:
// Routes related to users can be in a userRoutes.js file.
// Routes related to products can be in a productRoutes.js file.

const blog = require('./routes/blog')  // importing /blog express router
const shop = require('./routes/shop')  // express router

const app = express()
const port = 3000

//isse public wala file serve hoga which we are using for testing
app.use(express.static("public")) // app.use hum jab v likh rahe h tab hum ek middleware ka istamal kar rahe hai

// - If you visit http://localhost:3000/mypage.html, your mypage.html will be served.
// -  If you visit http://localhost:3000/, Express looks for public/index.html (not mypage.html). If it doesn't exist, your route handler for / is used.

app.use('/blog',blog)  // handle express router to make diffrent js file for diffrent routes
app.use('/shop',shop)  // express router

// GET REQUEST : Used to fetch data from the server.
app.get('/', (req, res) => {
    console.log("Hey it is a get request")
    res.send('Hello World of get req!')
})

// POST REQUEST : Used to create new data on the server.
app.post('/', (req, res) => {
    console.log("Hey it is a post request")
    res.send('Hello World of post req!')
})

// PUT REQUEST : Used to update existing data on the server.
app.put('/', (req, res) => {
    console.log("Hey it is a put request")
    res.send('Hello World put!')
})

// DELETE REQUEST : Used to delete data from the server.

// app.get("/index", (req, res) => {
//     console.log("Hey it is a index")
//     res.send('Hello World of index')
// })

 // to serve an html file  : function like this given in image check it out
app.get("/index", (req, res) => {
    console.log("Hey it is a index")
    res.sendFile('templates/index.html', {root: __dirname}) // to render proper html page
})

// to send json file
app.get("/api", (req, res) => {
    res.json({a: 1, b: 2, c:3 , d:4 , name: ["harry", "jerry"]})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})