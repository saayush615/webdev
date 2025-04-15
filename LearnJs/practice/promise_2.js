// task1: Create a function checkEven that takes a number and returns a promise. The promise should resolve if the number is even and reject if it's odd.

// function checkEven(num){
//     return new Promise((resolve,reject) => { 
//         if(num%2==0){
//             resolve("Even");
//         }else{
//             reject("Odd");
//         }
//      })
// }

// checkEven(5).then((message) => {
//     console.log(message);
// }).catch((err) => {
//     console.log(err);
// });


// task 2: Write a function wait that takes a time (in milliseconds) and returns a promise that resolves after the given time.
// function wait(time){
//     return new Promise((resolve,reject) => { 
//         setTimeout(() => {
//             resolve("Hello after "+time+" seconds");
//         },time*1000)
//      })
// }

// wait(4).then((message) => { 
//     console.log(message);
//  }).catch((err) => { 
//     console.log(err);
//   })

// task3: Simulate a login system. Create a function login that takes a username and password. Return a promise that resolves if the credentials are valid and rejects if they are invalid.

// const database = {
//     admin1:'pass1',
//     admin2:'pass12',
//     admin3:'pass123'
// }

// function login(username,password){
//     return new Promise((resolve,reject) => { 
//         if (database[username] == password){
//             resolve("Login Success");
//         }else{
//             reject("Login Failed");
//         }
//      })
// }

// login("admin1","pass1").then((message) => {
//     console.log(message);
// }).catch((err) => {
//     console.log(err);
// });

