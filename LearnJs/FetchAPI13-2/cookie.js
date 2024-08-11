// console.log(document.cookie)
// document.cookie = "name5=harry1122334400"
// document.cookie = "name2=aayush221133"
// let key = prompt("enter your key")
// let value = prompt("enter your value")
// document.cookie = `${key} = ${value}`
// // if the or value pair is given as synbols
// document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`
// console.log(document.cookie)


// to decode in the console use decodeURIComponent("given code") 

// #69 : local storage : the value will be stored even when the tab is closed or refreshed or close the browser
// localStorage.setItem("name","aayush") 

// let key = prompt("Enter your key")
// let value = prompt("Enter your value")
// localStorage.setItem(key, value)

// console.log(`The value at ${key} is ${localStorage.getItem(key)}`);

// if(key == "red" || key =="blue") {
//     localStorage.removeItem(key)
// }

// if(key == 0){
//     localStorage.clear()
// }

// localStorage.length
// localStorage.key(index)

// key value pair are stored in string

// #70 : session storage : used very less
// if closed tab gya storage aapka 

// window.onstorage = (e) => { 
//     alert("changed")
//     console.log(e);
//  }