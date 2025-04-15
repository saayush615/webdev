use("CrudDB2")
// CRUD = create,read,update,delete

// console.log(db) // CrudDB as a output means we are switched to cruddb

// 1. CREATE

db.createCollection("courses2") // it will create a collection named courses2

// insertone me ek object jata hai
// db.courses2.insertOne({
//     name: "Harry web dev free courses",
//     price: 0,
//     assignments: 12,
//     projects: 45
// })

// // insertmany me array wala object jata hai
// db.courses2.insertMany([
//     {
//       "name": "Harry web dev free courses",
//       "price": 0,
//       "assignments": 12,
//       "projects": 45
//     },
//     {
//       "name": "Alice data science bootcamp",
//       "price": 0,
//       "assignments": 15,
//       "projects": 50
//     },
//     {
//       "name": "Bob machine learning masterclass",
//       "price": 0,
//       "assignments": 10,
//       "projects": 40
//     },
//     {
//       "name": "Charlie full stack development",
//       "price": 0,
//       "assignments": 18,
//       "projects": 60
//     },
//     {
//       "name": "Dave cloud computing basics",
//       "price": 0,
//       "assignments": 8,
//       "projects": 30
//     },
//     {
//       "name": "Eve cybersecurity essentials",
//       "price": 0,
//       "assignments": 14,
//       "projects": 35
//     },
//     {
//       "name": "Frank AI and deep learning",
//       "price": 0,
//       "assignments": 20,
//       "projects": 55
//     },
//     {
//       "name": "Grace mobile app development",
//       "price": 0,
//       "assignments": 13,
//       "projects": 42
//     },
//     {
//       "name": "Hank game development journey",
//       "price": 0,
//       "assignments": 16,
//       "projects": 47
//     },
//     {
//       "name": "Ivy blockchain fundamentals",
//       "price": 0,
//       "assignments": 11,
//       "projects": 38
//     }
//   ])

// 2. READ

  // find all document whose price is 0
// let a = db.courses2.find({price: 0})
// console.log(a)

// console.log(a.count())

// to get all reasult in one array set use:
// console.log(a.toArray())

// to only one get doc which has price 0:
// let b = db.courses2.findOne({price: 0})
// console.log(b)

// 3. UPDATE

// to update one(first one) doc
// db.courses2.updateOne({price: 0}, {$set:{price: 100}})

// to update many
// db.courses2.updateMany({price: 0}, {$set:{price: 1000}})

// 4. DELETE

// db.courses2.deleteOne({price: 100})
db.courses2.deleteMany({price: 1000})

// https://www.mongodb.com/docs/manual/reference/operator/query/