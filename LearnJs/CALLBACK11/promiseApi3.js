// ye thino parellely run hoga as we already know 
let p1 = new Promise((resolve, reject) => { 
    setTimeout(() => {
        resolve("value 1")
    }, 11000);
 })
let p2 = new Promise((resolve, reject) => { 
    setTimeout(() => {
        // resolve("value 2")
        reject(new Error("Error"))
    }, 2000);
 })
let p3 = new Promise((resolve, reject) => { 
    setTimeout(() => {
        resolve("value 3")
    }, 3000);
 })

//  p1.then((value) => { 
//     console.log(value);
//   })
//  p2.then((value) => { 
//     console.log(value);
//   })
//  p3.then((value) => { 
//     console.log(value);
//   })

// 1 .promise.all ->
// now i want to see a value when all three values are resolved . for that i use promise API 

// let promise_all = Promise.all([p1,p2,p3])

// now ab jab ye thino pomise resolve ho jayegi unki value ka array ban jayega. kitne second baad dekhne milega oviously 3 second me.
// promise_all.then((value) => { 
//     console.log(value);
//  })
 // promise.all chalaya aur ek v promise reject hue toh promise .all nii chalega

// 2. promise.allSettled -> gives array of values of promises even though 1 promise is rejected
//  let promise_all = Promise.allSettled([p1,p2,p3])
//  promise_all.then((value) => { 
//     console.log(value);
//  })

// 3. promise.race -> thino me se jo jaldi ho jaye wo select ho jaye
// let promise_all = Promise.race([p1,p2,p3])
// promise_all.then((value) => { 
//    console.log(value);
// })

// 4. promise.any -> thino me se jo jaldi ho jaye wo select ho jaye but wo agar error ho toh 2nd fastest select ho jaye (like 1 is 11 sec, 2 reject the value at 2 sec but it will show 3 which has 3sec time to show)
// let promise_all = Promise.any([p1,p2,p3])
// promise_all.then((value) => { 
//    console.log(value);
// })

// 5. promise.resolve & reject
// let promise_all = Promise.resolve(6)
let promise_all = Promise.reject(new Error("Hey"))
promise_all.then((value) => { 
   console.log(value);
})
