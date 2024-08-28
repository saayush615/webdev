const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')

const app = express()
const port = 3000

app.use(express.static("public")) // app.use hum jab v likh rahe h tab hum ek middleware ka istamal kar rahe hai

app.use('/blog',blog)
app.use('/shop',shop)

// GET REQUEST
app.get('/', (req, res) => {
    console.log("Hey it is a get request")
    res.send('Hello World of get req!')
})

// POST REQUEST
app.post('/', (req, res) => {
    console.log("Hey it is a post request")
    res.send('Hello World of post req!')
})

// PUT REQUEST
app.put('/', (req, res) => {
    console.log("Hey it is a put request")
    res.send('Hello World put!')
})

// app.get("/index", (req, res) => {
//     console.log("Hey it is a index")
//     res.send('Hello World of index')
// })

app.get("/index", (req, res) => {
    console.log("Hey it is a index")
    res.sendFile('templates/index.html', {root: __dirname})
})


app.get("/api", (req, res) => {
    res.json({a: 1, b: 2, c:3 , d:4 , name: ["harry", "jerry"]})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})