function getData() {
    return new Promise((resolve,reject) => { 
        setTimeout(() => {
            resolve(455)
        }, 3500);
     })
}

console.log("Loading modules")

console.log('Do something else');

console.log('Load data');
let data = getData()
console.log(data);


console.log('Process data');


