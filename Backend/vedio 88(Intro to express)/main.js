// http package ki capabilities limited hai ex:- static file serve nii kar sakte , security starting se impliment karna hoga, etc.

// copied from express website hello world example

const express = require('express') // import express
const app = express()
const port = 3000

// static files :  public ke andar wala file serve karega. 
app.use(express.static('public'))

// app.get or app.post or app.put or app.delete(path,handler)
app.get('/', (req, res) => {
  res.send('Hello World32!')
})

app.get('/about', (req, res) => {
    res.send('Hello aboutus!')
  })

app.get('/contact', (req, res) => {
    res.end('Hello contactus!')
  })
app.get('/blog', (req, res) => {
    res.send('Hello blog!')
  })
  // the above way is very tering we canot write like this for every page

  // :slug here is a parameter  & req.param is an object
app.get('/blog/:slug',(req,res) => {
    // logic to fetch {slug} from db

    // for url = http://localhost:3000/blog/intro-to-js?mode=dark&region=in
    console.log(req.params) // will output { slug: 'intro-to-js' }
    console.log(req.query) // will output { mode: 'dark', region: 'in' }

    res.send(`hello ${req.params.slug}`)
})

app.get('/blog/:slug/:second',(req,res) => {
  // logic to fetch {slug} from db
  res.send(`hello ${req.params.slug} and ${req.params.second}`)
})

// app.get('/blog/intro-to-js', (req, res) => {
//     // logic to fetch intro to js from the db
//     res.send('Hello intro-to-js!')
//   })
// app.get('/blog/intro-to-python', (req, res) => {
//     // logic to fetch intro to python from the db
//     res.send('Hello intro-to-python!')
//   })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
