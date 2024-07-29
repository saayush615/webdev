/* settle means resolve or reject 

resolve means promise has settled successfully 
reject means promise has not setteled successfully

*/

// async function getData() {
//     // symulate get data from a server 
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }

async function getData() {
    // actually getting data from a server2 
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = x.json()
    return data;
    
}

// await use karene ke lia wo async function ke andar hona hi chaiye
async function main(){
    console.log("Loading modules")

    console.log('Do something else');

    console.log('Load data');

    let data = await getData()
    console.log('data');
        
    console.log('Process data');

    console.log('task2');

}

main()

// this one approach withour async and await
// data.then((v) => {
//     console.log('data');
    
//     console.log('Process data');

//     console.log('task2');


// })
