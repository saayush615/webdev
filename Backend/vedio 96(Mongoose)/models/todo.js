//  models folder is made to declare the schema 
import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({   //schema is a blueprint of the data we are going to store in the database // we are creating a condition that the data we are going to store in the database should have these four properties
    name: String,
    desc: String,
    isDone: Boolean,
    days: Number
  });

export const todo = mongoose.model('todo',todoSchema); //model is a class that is used to create instances of data that will be stored in the database