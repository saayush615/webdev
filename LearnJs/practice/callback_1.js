// task1 : Write a function calculate that takes two numbers and a callback function. The callback should perform an operation (add, subtract, multiply, or divide) on the numbers and return the result.

// function add(num1,num2){
//     return num1+num2;
// }
// function subtract(num1,num2){
//     return num1-num2;
// }
// function multiply(num1,num2){
//     return num1*num2;
// }
// function divide(num1,num2){ 
//     return num1/num2;
// }


// function calculate(num1,num2,callback){
//     return callback(num1,num2);
// }

// console.log(calculate(2,3,multiply));

// task2:Create a function delayLog that takes a message and a delay time (in milliseconds). Use a callback to log the message after the delay.

// function delayLog(message, delay, callback) {
//     setTimeout(() => {
//       // Simulate logging the message after the delay
//       callback(message);
//     }, delay);
//   }
  
//   // Example usage:
//   delayLog("Hello after 2 seconds!", 2000, (msg) => {
//     console.log(msg); // This will log "Hello after 2 seconds!" after 2 seconds
//   });


// task3:  Implement a function fetchData that simulates fetching data from a server (use setTimeout). Pass the fetched data to a callback function and handle errors if the data is not available.

// function shouldFail2(){
//     return Math.random() > 0.5;
// }
// function callback2(shouldFail){
//     if(shouldFail){
//         console.log("Error");
//     }else{
//         console.log({name:"Sahil",age:23});
//     }
// }

// function fetchData(callback,shouldFail){
//     setTimeout(() => { 
//         callback(shouldFail)
//      },3000)
// }

// console.log(fetchData(callback2,shouldFail2()));