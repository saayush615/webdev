// go to the express js website this code is copy &paste with some twist like contact map

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('about')
})
app.get('/contact', (req, res) => {
  res.send('contact')
})
app.get('/map', (req, res) => {
  res.send('map')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})