let arr = [1,100,2,3,57,4,5,7]

// console.log(arr);
// console.log(arr.length)
// console.log(arr[0])
// console.log(typeof arr)

// Arrays are mutable
// arr[0] = 5666;
// console.log(arr)

// arr[1] = "k"
// console.log(arr)

// console.log(arr.toString())
// converted into string 

// console.log(arr.join(" and "))

// console.log(arr.pop())
// console.log(arr)

// console.log(arr.push(100))
// console.log(arr)
// console.log(arr.push('k'))
// console.log(arr)

// console.log(arr.shift())
// console.log(arr)

// arr.unshift("aa")
// console.log(arr)

// delete arr[1]
// console.log(arr)

// let a2 = [2,3,5]
// let a3 = ["Aayush",5 , "ee"]
// console.log(arr.concat(a2,a3))
// console.log(arr) // the arr doesnot change due to concat opration

// console.log(arr.sort((a, b) => a - b))
// console.log(arr)

// arr.splice(1,3) // position 1 ke baad 3 element remove karo 
// console.log(arr)

// arr.splice(1,3,222,333) // position 1 ke bad 3 element remove karo aur uss position pe 222,333 add karo 
// console.log(arr)

// arr.slice(2); // it doesnot slice from arr
// console.log(arr);
// console.log(arr.slice(2)); // slice out all the element from 0,2 excluding 2
// console.log(arr.slice(1,3)); // slice and give the arr of 1,3 exluding 3;


// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element)
// }

// arr.forEach((value,index,array)=>{
//     console.log(value,index,array)
// })

// let obj = {
//     a : 1,
//     b : 2,
//     c : 3
// }
// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key,element)
//     }
// }

// for (const iterator of arr) {
//     console.log(iterator)
// }

// let newArr = []
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     newArr.push(element**2)
// }
// console.log(newArr)

// let newArr = arr.map((e)=>{
//     return e**2
// })
// console.log(newArr)

// const greaterthanseven = (e)=>{
//     if(e>7){
//         return true
//     }
//     return false
// }
// console.log(newArr.filter(greaterthanseven))

// let arr2 = [1,2,3,4,5,6]
// const red = (a,b)=>{
//     return a+b
// }
// console.log(arr2.reduce(red))

// console.log(Array.from("Aayush"))

