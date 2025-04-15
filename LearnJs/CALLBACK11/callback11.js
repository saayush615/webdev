// console.log("Harry is a hacker")
// console.log("rohan is a hecker")

// // asyncronous function
// setTimeout(() => {
//     console.log("I am inside settimeout")
// }, 10);
// setTimeout(() => {
//     console.log("I am inside settimeout 2")
// }, 0);

// console.log("The End")

// // call back function 1
// // we use callback function to avoid callback hell or pyramid of doom and code becomes hard to handle 
// const fn = () => { 
//     console.log("Nothing")
//  }
// const callback = (arg , fn) => { 
//     console.log(arg)
//     fn()
//  }

// const loadScript = (src, callback) => { 
//     let sc = document.createElement("script")
//     sc.src = src;
//     // sc.onload diya kyoki jab script append ho jaye toh pata chal jaye 
//     sc.onload = callback("Harry",fn) 
//     document.head.append(sc)
//  }

//  loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)

// callback example 2 (good example)
// function add(a, b){
//     return a+b;
// }

// function divide(a, b) {
//     return a/b;
// }


// function calculate(x, y, operation) {
//     return operation(x, y);
// }


// console.log(calculate(10, 5, add));

// console.log(calculate(10, 5, divide));



// promise.js 
// we use promise for parellel execution . example (if we have given a cloth to stich and caake to make and samosa to make for tommrows birthday event it does not make sense that first we complete one task and move to other we can complete all the task parellely)

console.log('This is promise ');

// the promise will be either resolved  or rejected . like we ordered paratha from zomato either we can recive it (resolved) or we cannot get but we are informed (rejected). or if no answer the promise is still pending. 

// normally we donot do console.log on promise we do that on .then or .catch
// normally the string we wite in resolve goes to then that will printed there, and the string value of rejected goes to error to show the error
// let prom1 = new Promise((resolve, reject)=>{
//     let a = Math.random();
//     if(a<0.5){
//         reject("No random no. was not supporting you")
//     }
//     else{
//         setTimeout(() => {
//             console.log('Yes I am done ');
//             resolve("Harry")
//         }, 5000);
//     }
// }) 

// console.log(prom1);


// // only written for prom1: .then -> what to do after a promise execution and .catch -> is used to show error if the promise is rejected ( both helps to notify the subscriber if resolved then see .then if rejected see .catch)
// prom1.then((a) => { 
//     console.log(a);
//  }).catch((err) => { 
//     console.log(err);
//   })


// let prom2 = new Promise((resolve, reject)=>{
//     let a = Math.random();
//     if(a<0.5){
//         reject("No random no. was not supporting you 2")
//     }
//     else{
//         setTimeout(() => {
//             console.log('Yes I am done 2 ');
//             resolve("Harry 2")
//         }, 5000);
//     }
// }) 
        

// let p3 = Promise.allSettled([prom1,prom2])
// p3.then((a) => { 
//     console.log(a);
//  }).catch((err) => { 
//     console.log(err);
//   })

console.log("The program ends here");

  // homework : try with at least 5 promises