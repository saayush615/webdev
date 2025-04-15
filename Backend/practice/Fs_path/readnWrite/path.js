// Topics You Should Cover in the path Module
// 📌 The path module helps you work with file and directory paths. It is useful when dealing with file operations, especially in different operating systems.

// Here’s what you should learn:

// 1️⃣ Importing the path Module
// How to use require('path')
// 2️⃣ Important Functions You Must Know
// Function	Description
// path.join()	Joins multiple path segments into a single path
// path.resolve()	Returns an absolute path
// path.basename()	Gets the filename from a path
// path.dirname()	Gets the directory name from a path
// path.extname()	Gets the file extension from a path
// path.parse()	Converts a path into an object (root, dir, base, ext, name)
// path.format()	Converts a parsed path object back into a string

const path = require('path');
// 1. path.join()
// path.join(__dirname, 'test.txt');
// console.log(path.join(__dirname, 'test.txt'));

// 2. path.resolve()
// console.log(path.resolve('test.txt'));

// 3. path.basename()
// console.log(path.basename(__filename));

// 4. path.dirname()
// console.log(path.dirname(__filename));

// 5. path.extname()
// console.log(path.extname(__filename));
// console.log(path.extname(path.join(__dirname, 'test.txt')));

// 6. path.parse()
// console.log(path.parse(__filename).root);

// Task 2: Given a file path, extract and display its directory, filename, and extension.

// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.parse(__filename).ext);