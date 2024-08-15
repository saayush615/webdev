// #86 :IIFE

// let a = () => {
//     return new Promise((resolve , reject) => { 
//         setTimeout(() => { 
//             resolve(456)
//         },4000)
//     })
// }

// // IIFE : not creating a seprate function and call it
// (async() => { 
//     let b = await a()
//     console.log(b);
//     let c = await a()
//     console.log(c);
//     let d = await a()
//     console.log(d);
//  })()

//  #87 : Destructuring

// here a=3 and b=5 ....
// let arr = [3,5,8,9,12,14]
// let [a,b,c,d] = arr
// console.log(a,b,c,d);

// let arr = [3,5,8,9,12,14]
// let [a,b,c,d, ...rest] = arr
// console.log(a,b,c,d,rest);
// console.log(a,b,c,d, ...rest);


let arr = [3,5,8,9,12,14]
let [a, , ,...rest] = arr
console.log(a,rest);




