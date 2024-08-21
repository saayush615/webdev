// 1. common js

// const hello = () => { 
//     console.log('Hello Harry');
//  }

//  const ahello = (name) => { 
//     console.log("Hello" + name);
//   }

// //  module.exports = hello; 
// module.exports = {hello,ahello}; //same as below line
// // module.exports = {hello:hello, ahello:ahello};

// 2. ES6 MODULE
export const hello = () => { 
    console.log('Hello Harry');
}


export const ahello = (name) => { 
    console.log("Hello" + name);
}

const harry = () => { 
    console.log("Hello" + "Harry")
 }

 export default harry;