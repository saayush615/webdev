/* settle means resolve or reject 

resolve means promise has settled successfully 
reject means promise has not setteled successfully

*/

// async/await from revison course

async function harry (){
    let delhiWeather = new Promise((resolve,reject) => { 
        setTimeout(() => { 
            resolve("27 deg")
        },2000)
    })
    let bangloreWeather = new Promise((resolve,reject) => { 
        setTimeout(() => { 
            resolve("21 deg")
        },5000)
    })

    // delhiWeather.then(alert)
    // bangloreWeather.then(alert)
    console.log("Fetching Delhi weather Please wait..");
    let delhiw = await delhiWeather
    console.log("Fetched delhi weather" + delhiw);

    console.log("Fetching banglore weather please wait...");
    let banglorew = await bangloreWeather
    console.log("Fetched Banglore weather" + banglorew);
    return[delhiw,banglorew]
   
}

// 0. first done this to get cherry when harry is waiting for delhi 

// const cherry = () => { 
//     console.log("Hey I am cherry and I am not waiting");
    
//  }
// console.log("welcome to weather control room");

// let a = harry()
// // jab tak harry wait kar rha delhi ke weather ka cherry execute ho jayega
// let b = cherry()
// console.log(a);
// a.then((value) => { 
//     console.log(value);
//  })

// 1. the cherry should wait so that harry execute first then after cherry should learn

const cherry = async () => { 
    console.log("Hey I am cherry and I am not waiting");
 }
const main1 = async () => {

    console.log("welcome to weather control room");
    let a = await harry()
    // jab tak harry run nii hota donot run cherry await for harry to run
    let b = await cherry()
    console.log(a);
}

main1()
