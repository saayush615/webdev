// q1: Creating a Simple Promise

// Write a function that returns a promise which resolves to a string "Hello, World!" after 2 seconds.

// function Hellowordpromise(){
//     return new Promise((resolve,reject) => { 
//         setTimeout(() => { 
//             resolve("Hello world");
//          },2000);
//      });
// }

// Hellowordpromise().then((msg) => { 
//     console.log(msg);
    
//  });

// q2:Handling Promise Resolution

// Write a function that returns a promise which resolves to a number (e.g., 42). Then, use .then() to log the resolved value to the console.

// function pro() {
//     return new Promise((resolve,reject) => { 
//         resolve(42)
//      })
// }

// pro().then((msg) => { 
//     console.log(msg);
    
//  })

// ####difference between callback functions and promise functions

// Question 1: Asynchronous Operation with Callback

// Write a function fetchDataWithCallback that takes a callback function as an argument. The function should simulate fetching data by using setTimeout to delay for 1 second and then call the callback function with the data "Data fetched with callback".

// function fetchDataWithCallback(callback) {
//     // Simulate an asynchronous operation using setTimeout
//     setTimeout(() => {
//       // Call the callback function with the fetched data
//       callback("Data fetched with callback");
//     }, 2000);
//   }
  
//   // Define the callback function to handle the fetched data
//   function handleCallbackData(data) {
//     console.log(data);
//   }
  
//   // Call the function and pass the callback
//   fetchDataWithCallback(handleCallbackData);
//   // Output after 1 second: Data fetched with callback

  
  //Question 2: Asynchronous Operation with Promise

// Write a function fetchDataWithPromise that returns a promise. The function should simulate fetching data by using setTimeout to delay for 1 second and then resolve the promise with the data "Data fetched with promise".

// function fetchDataWithPromise() {
//     return new Promise((resolve, reject) => {
//       // Simulate an asynchronous operation using setTimeout
//       setTimeout(() => {
//         // Resolve the promise with the fetched data
//         resolve("Data fetched with promise");
//       }, 1000);
//     });
//   }
  
//   // Call the function and handle the resolved value
//   fetchDataWithPromise().then((data) => {
//     console.log(data);
//   });
//   // Output after 1 second: Data fetched with promise
  