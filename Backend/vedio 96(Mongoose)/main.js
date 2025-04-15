// https://www.npmjs.com/package/mongodb   //explore this pacakage its a easy way to connect mongodb with nodejs

// https://mongoosejs.com/docs/index.html

import mongoose from "mongoose";
// mongoose ek package hai jiske help se hum aapne express app me tadka lagate hai mongodb database ka, hum monogb se connect kar sakte hai bohot easily
import express from "express";
import { todo } from "./models/todo.js";

let conn = await mongoose.connect("mongodb://localhost:27017/Todo") //connection string  // notice here the Todo db we created is Todo otherwise it will show error

const app = express()
const port = 3000

app.get('/', (req, res) => {
    const Todo = new todo({ name: "Hey first todo", desc: "Description of this todo", isDone: false, days: Math.floor(Math.random() * 45 * 5 * Math.random())})
    Todo.save()
    res.send('Hello World!')
})

app.get('/a', async (req, res) => {
    let Todo = await todo.findOne({})
    console.log(Todo)
    res.json({desc: Todo.desc, isDone: Todo.isDone})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})