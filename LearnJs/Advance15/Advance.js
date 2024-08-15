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

//  console.log(d); // -> d is not defined , it will not work
 

//  #87 : Destructuring and spread oprator

// here a=3 and b=5 ....
// let arr = [3,5,8,9,12,14]
// let [a,b,c,d] = arr
// console.log(a,b,c,d);

// let arr = [3,5,8,9,12,14]
// let [a,b,c,d, ...rest] = arr
// console.log(a,b,c,d,rest);
// console.log(a,b,c,d, ...rest);


// let arr = [3,5,8,9,12,14]
// let [a, , ,...rest] = arr  // 5,8 kisi v value ko assosiate nii hoga
// console.log(a,rest);

// let {a,b} = {a : 1, b: 5};
// console.log(a,b);

// spread oprator -> key:value pairs 
// let arr1 = [3,5,8]
// let obj1 = {...arr1}
// console.log(obj1);

// function sum(v1,v2,v3){
//     return v1+v2+v3
// }
// console.log(sum(...arr1)) // --> 3+5+8



// let obj2 = {
//     name: "Harry",
//     company: "company xyz",
//     address: "XYZ"
// }

// console.log({...obj2, name: "John"}); //-> ye sare value le kar phir name me jhon override kar deta hai

// console.log({name: "John" , ...obj2}); // -> no point of using this

// // read the mdn docs it is very important 

// #88 : local and global scope

// var is globally scoped while let & const are blocked scoped/function scope

// #89 : Hoisting

// greet() // -> i will work bcoz jitni v funcitons declaration h wo upar aa jati hai in javascript
// function greet(){
//     console.log('Goood morning');
// }

// console.log(a); //--> it will not produce error with var but the value of a will be undefined
// var a = 5; // declaration is hoisted to the top but initialization is not 
// console.log(a);

// console.log(a); // error boz of let is hoisted but it is not inilized and initilization of let or const is important
// let a = 5; // let or const 

// *imp note : function expression and class expression are not hoisted
// greet()
// var greet = function(){
//     console.log("good morning");
// }

// #90: closures 

// Example :1
// message = "Good global"
// function hello(){
//     let message = "Good morning"
//     // console.log("Hello " + message); 
//     {
//         let message = "Good afternoon"
//         console.log("Hello " + message); 
//     } 
//     console.log(message);
//     let c = function hello2() {
//         console.log("I am C " + message);
//     }
//     return c
    
// }
// c = hello()
// c()

// ex -2:
// function init() {
//   var name = 'Mozilla'; // name is a local variable created by init
//   function displayName() {
//     // displayName() is the inner function, a closure
//     console.log(name); // use variable declared in the parent function
//   }
//   name = "Harry"
//   return displayName;
// }
// let c = init();
// c()


// ex: 3
// function returnFunc() {
//     const x = () => {
//       let a = 1
//       console.log(a)
//       const y = () => {
//         // let a = 2
//         console.log(a)
//         const z = () => {
//           // let a = 3
//           console.log(a)
//         }
//         z()
//       }
//       a = 999
//       y()
//     }
//     return x
//   }
  
//   let a = returnFunc()
//   a()

// #  91: revisit arrow function

// const sayHello = name => console.log("Hello" + name);  console.log("hi")
// sayHello()

// more than one input -> use parrenthesis
// const sayHello = (name,greeting) => console.log(greeting + " " + name); 
// sayHello("Aayush","Namaste")
  
// const x = {
//     name: "Harry",
//     role: "Js developer",
//     exp: 30
// }
// console.log(x.name,x.exp)


// const x = {
//     name: "Harry",
//     role: "Js developer",
//     exp: 30,
//     show: function() {
//         console.log(`This name is ${this.name} \n The role is ${this.role}`)
//     }
// }

// x.show()


// const x = {
//     name: "Harry",
//     role: "Js developer",
//     exp: 30,
//     show: function() {
//         // console.log(this)
//         // let that = this
//         setTimeout(() => {
//             // arrow function ke andar ka this window object ka this nii hoga wo bahar wala this hai(lexical this) wahi hoga . but when we are just using function we have to use that
//             console.log(this)
//             console.log(`This name is ${this.name} \n The role is ${this.role}`)
//         }, 2000)
//     }
// }

// x.show()