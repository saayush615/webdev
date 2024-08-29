const express = require('express')
const app = express()
const port = 3000

// app.use(express.static("public")) // app.use (middleware) attract the request and ask the hari.txt kya app public folder me ho . toh answer yes aata hai

// middleware 1
app.use((req, res, next) => {
    console.log('m1')
    next()
  })

// middleware 2
app.use((req, res, next) => {
    console.log('m2')
    next()
  })


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('Hello about!')
})

app.get('/contact', (req, res) => {
  res.send('Hello contact!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})