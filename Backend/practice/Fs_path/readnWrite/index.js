// Important fs Functions You Must Know
// 📌 The fs module provides both synchronous and asynchronous functions.

// Synchronous (fs.readFileSync()): Blocks execution until the operation is complete.
// Asynchronous (fs.readFile()): Non-blocking, allows execution of other code while waiting for the operation to finish.
// Here are the key functions you need to know:

// Function	Description
// fs.readFile()	Reads a file asynchronously
// fs.readFileSync()	Reads a file synchronously
// fs.writeFile()	Creates/Writes to a file (overwrites existing content)
// fs.appendFile()	Appends content to an existing file
// fs.unlink()	Deletes a file
// fs.mkdir()	Creates a directory
// fs.rmdir()	Deletes a directory

//https://www.geeksforgeeks.org/node-js-file-system

const fs = require('fs');

//1. readfile(Asynchronous)*

// fs.readFile('test.txt', (err,data) => { 
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
//  });

//2. readfile(synchronous)
// const data = fs.readFileSync('test.txt');
// console.log(data.toString());

//3. Open file
// fs.open('test.txt', 'r+',(err, fd) => { 
//     if(err){
//         console.log(err);
//     }
//     console.log(fd);
//  })

// 4. writeFile()
// fs.writeFile('test.txt', 'Hello world2', (err) => { 
//     if(err){
//         console.log("There is an error writing the file");
//     }
//     console.log("File created");
//     fs.readFile('test.txt', (err,data) => { 
//         if(err){
//             console.log('There was some error reading the file');
//         }
//         console.log(data.toString());
//      })
//  });

// 5. appendFile()
// fs.appendFile('test.txt',"\nHello world3", (error) => { 
//     if(error){
//         console.log("There was an error in appending the file");
//     }
//     console.log("File appended");
//  } )

// 6. appendFileSync()
// fs.appendFileSync('test.txt',"\nHello world4");

// 7. unlink()
// fs.unlink('test.txt', (err) => { 
//     if(err){
//         console.log("There was an error in deleting the file");
//     }
//     console.log("File deleted");
//  })

// 8. mkdir()
// fs.mkdir('test', (err) => {
//     if(err){
//         console.log("There was an error in creating the directory");
//     }
//     console.log("Directory created");
// })

// 9. rmdir()
// fs.rmdir('test', (err) => {
//     if(err){
//         console.log("There was an error in deleting the directory");
//     }
//     console.log("Directory deleted");
// })

//  Task 2: Write a script that lists all files in a directory.
// fs.mkdir('test1', (err) => { 
//     if(err){
//         console.log("There was an error in creating the directory");
//     }
//     console.log("test1 was created");
//  })
//  fs.mkdir('test2', (err) => { 
//     if(err){
//         console.log("There was an error in creating the directory");
//     }
//     console.log("test1 was created");
//  })
//  fs.mkdir('test3', (err) => { 
//     if(err){
//         console.log("There was an error in creating the directory");
//     }
//     console.log("test3 was created");
//  })
//  const directoryPath = __dirname;
//  fs.readdir(directoryPath, (err,files) => { 
//     if(err){
//         console.log("There was an error in reading the directory");
//     }
//     files.forEach(file => { 
//         console.log(file);
//      })
//   })
