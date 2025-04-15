
// Select the database to use.
use('sigmaDB');

// Insert a few documents into the courses collection.
db.getCollection('courses').insertMany([
    {
      "name": "java",
      "price": 2000,
      "instructor": "Harry"
    },
    {
      "name": "python",
      "price": 2500,
      "instructor": "Alice"
    },
    {
      "name": "javascript",
      "price": 1800,
      "instructor": "Bob"
    },
    {
      "name": "c++",
      "price": 2200,
      "instructor": "Charlie"
    },
    {
      "name": "ruby",
      "price": 2100,
      "instructor": "Dave"
    },
    {
      "name": "php",
      "price": 1900,
      "instructor": "Eve"
    },
    {
      "name": "swift",
      "price": 2600,
      "instructor": "Frank"
    },
    {
      "name": "kotlin",
      "price": 2300,
      "instructor": "Grace"
    },
    {
      "name": "go",
      "price": 2400,
      "instructor": "Hank"
    },
    {
      "name": "rust",
      "price": 2700,
      "instructor": "Ivy"
    }
  ]);

// Print a message to the output window.
console.log(`Done inserting data`);
