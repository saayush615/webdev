// "get request using fetch API"(async and await)

// task 1: Use the fetch API to make a GET request to https://jsonplaceholder.typicode.com/posts and log the response. Handle errors if the request fails.

// async function fetchJson(){
//     let url = "https://jsonplaceholder.typicode.com/posts";
//     try{
//         let response = await fetch(url);
//         if(!response.ok){
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         let json = await response.json();
//         console.log(json);
//     }catch(e){
//         console.log(e);
//     }
// }

// fetchJson();

// "post request using fetch API"(async and await)

// task 2 : Use the fetch API to make a POST request to https://jsonplaceholder.typicode.com/posts with a JSON payload (e.g., { title: 'foo', body: 'bar', userId: 1 }). Log the response and handle errors.

// async function fetchPost() {
//     const url = "https://jsonplaceholder.typicode.com/posts";
//     const data = {
//         title: 'foo',
//         body: 'bar',
//         userId: 1
//     };
    
//     try {
//         const response = await fetch(url, {
//             method: 'POST',
//             headers: { // Headers provide additional information about the request being sent to the server.
//                 'Content-Type': 'application/json'  // Tells the server that we are sending JSON data.
//             },
//             body: JSON.stringify(data)
//         });

//         if (!response.ok) { // Ensures that we handle HTTP errors correctly. response.ok is true if the HTTP status code is between 200-299 (success). If the status code is outside this range (e.g., 400 or 500 errors), response.ok is false.
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const json = await response.json();
//         console.log("Response Data:", json);
//     } 
//     catch (e) { // Only handles network-related errors (not 404, 500, etc.). For those, we need to check response.ok.
//         console.error("Fetch error:", e);
//     }
// }

// // Call the function
// fetchPost();


