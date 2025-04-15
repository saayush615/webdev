// task 1: Use Promise.all to handle multiple promises. Create three promises that resolve after different delays and log their results once all are resolved.

const promise1 = new Promise((resolve,reject) => { 
    setTimeout(() => { 
        resolve('Promise 1 is resolved!')
     },1000)
 })
 const promise2 = new Promise((resolve,reject) => { 
    setTimeout(() => { 
        resolve('Promise 2 is resolved!')
     },2000)
 })
 const promise3 = new Promise((resolve,reject) => { 
    setTimeout(() => { 
        resolve('Promise 3 is resolved!')
     },3000)
 })

 Promise.all([promise1,promise2,promise3]).then((result) => { 
     console.log(result)
 }).catch((error) => {  
     console.log(error)
 })

// task 2: 