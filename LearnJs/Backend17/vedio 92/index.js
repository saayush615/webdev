const express = require('express')
const app = express()
const port = 3000

// Ejs template engine : it is used just this you write 5 blog post title = slug for every blog does we are going to write html code? =no. we the value of blog title and content from database that (we are going to talk late). but we use ejs template to enter those titile and content variable in blogpost(it is very useful)

// https://github.com/mde/ejs/wiki/Using-EJS-with-Express
// ejs ka docs padho and practice sab aa jayega

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  let sitename = "Adidas"
  let searchText = "search now"
  let arr = [1,54,65]
  res.render("index",{sitename: sitename, searchText: searchText, arr})
})

app.get('/blog/:slug', (req, res) => {
  let blogTitle = "Adidas why and when"
  let blogContent = "it is very good brand now"
  res.render("blogpost",{blogTitle: blogTitle, blogContent: blogContent})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})