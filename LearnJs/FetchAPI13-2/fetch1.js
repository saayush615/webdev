//  https://goweather.herokuapp.com/weather/Ny

// #66

// p is a promise , two times .then to fetch the api

// let p = fetch("https://goweather.herokuapp.com/weather/Ny")
// p.then((response) => {
//     console.log(response.status); // show http status code
//     console.log(response.ok); // if status code >200 and <299 then it is true
//     console.log(response.headers);
//     // if we use json it will return json Object. if we use text it will retun string . we cannot use text and sath me
//     return response.json()
//  }).then((value2) => { 
//     console.log(value2);
//   })

// #67 : post request

// 1. normal fetch api syntax used:

// let options = {
//     method : "POST",
//   // request header
//     headers : {
//         "Content-type" : "application/json"
//     },
//     // json.stringify help to convert javascript object into a string 
//     // json . parse valid json string ko javascript obj. me convert kar deta hai
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//         // we will post this foo bar userid 1 or in simple word stringify in the below url
//     }),

// }

// fetch('https://jsonplaceholder.typicode.com/posts', options)
//     .then((response) => response.json())
//     .then((json) => console.log(json))


// 2.do the same with async/ await : coz it makes it easy

// const createTodo = async () => {  
// let options = {
//         method : "POST",
//         headers : {
//             "Content-type" : "application/json"
//         },
//         // json.stringify help to convert javascript object into a string 
//         // json . parse valid json string ko javascript obj. me convert kar deta hai
//         body: JSON.stringify({
//             title: 'foo',
//             body: 'bar',
//             userId: 1,
//             // we will post this foo bar userid 1 or in simple word stringify in the below url
//         }),
    
//     }
    
//     let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
//     let response = await p.json()
//     return response
// }

// const mainFunc = async () => {
//     let todo = await createTodo()
//     console.log(todo);
// }

// mainFunc()