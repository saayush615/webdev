//task1: Convert the checkEven function (from the Promise topic) to use async/await syntax.

// function checkEven(num){
//     return new Promise((resolve,reject) => { 
//         if(num%2==0){
//             resolve("Even");
//         }else{
//             reject("Odd");
//         }
//      })
// }

// async function checkEvenAsync(num){
//     try{
//         let result = await checkEven(num);
//         console.log(result);
//     }
//     catch(err){
//         console.log(err);
//     }
// }

//task 2: Write an async function fetchUserData that simulates fetching user data (use setTimeout). Use await to handle the result and log it.

// function fetchdata(num){
//     return new Promise((resolve,reject) => { 
//         setTimeout(() => {
//             resolve(num);
//         }, 2000);
//      })
// }
// async function fetchUserData () {
//     try {
//         const userData = await fetchdata(10); // Wait for the data
//         console.log("User data:", userData); // Log the fetched data
//       } catch (error) {
//         console.error("Error fetching user data:", error); // Handle errors
//       }
// }

// fetchUserData();

//task 3: Create an async function runTasks that calls two other async functions sequentially and logs their results.

// async function task1(){
//     return new Promise((resolve,reject) => { 
//         setTimeout(() => {
//             resolve("Task 1");
//         }, 1000);
//      })
// }

// async function task2(){
//     return new Promise((resolve,reject) => { 
//         setTimeout(() => {
//             resolve("Task 2");
//         }, 2000);
//      })
// }

// async function runTasks(){
//     try{
//         let result1 = await task1();
//         console.log(result1);
//         let result2 = await task2();
//         console.log(result2);
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// runTasks();
