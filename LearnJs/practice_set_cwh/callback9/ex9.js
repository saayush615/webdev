// question 1
// const loadscript = (src) => { 
//     return new Promise((resolve,reject) => { 
//         let script = document.createElement("script")
//         script.src = src
//         script.onload = () => { 
//             resolve("the script is loaded")
//          }
//         document.head.append(script)
//      })
//     }
//  let p1 = loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js")

//  p1.then((value) => { 
//     alert(value)
//   })

//question2
// const loadscript = async (src) => {
//     return new Promise((resolve,reject) => { 
//         let script = document.createElement("script")
//         script.src = src 
//         script.onload = () => { 
//             resolve("The script is loaded")
//          }
//          script.onerror = () => { 
//             reject("The script not loaded")
//           }
//           document.head.append(script)
//      })
// }

// const main1 = async () => { 
//     /// the down didnot execute until the loadscript is loaded bcoz of wait
//     console.log(new Date())
//     let p3 = await loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js")
//     alert(p3)
//     console.log(p3)
//     console.log(new Date())
    
// }
// main1()


// question 3
// let p1 = () => {
//     return new Promise ((resolve,reject) => { 
//     setTimeout(() => {
//         reject("I have been rejected")
//     }, 3000);
//  })
// }

//  let a = async () => { 
//     // we cannot await for just promise that is why i have made p1 a function
//     // bcoz the value is rejected try will not work it will go in catch
//     try{
//         let p2 = await p1()
//         console.log(p2);
        
//     }catch(err){
//         console.log(err + " no value")
        
//     }
//   }
//  a()


// question 4
let prom1 = async () => { 
    return new Promise((resolve,reject) => { 
        setTimeout(() => {
            resolve("I am async prom1")
        }, 2000);
     })
 }
let prom2 = async () => { 
    return new Promise((resolve,reject) => { 
        setTimeout(() => {
            resolve("I am async prom2")
        }, 1000);
     })
 }
let prom3 = async () => { 
    return new Promise((resolve,reject) => { 
        setTimeout(() => {
            resolve("I am async prom3")
        }, 3000);
     })
 }

 const run = async() => { 
    // this calculate total time taken
    console.time("run")

    // with async and await -> it takes 6 sec
    // i said to wait until my prom1 doesnot get resolved
    // let a1 = await prom1()
    // let a2 = await prom2()
    // let a3 = await prom3()
    // console.log(a1,a2,a3)

    // with promsie.all -> it takes 3sec
    // i said that run all three prom1 prom2 and prom3 parellely 
    let a1 =  prom1()
    let a2 =  prom2()
    let a3 =  prom3()
    let promise_all = await Promise.all([a1,a2,a3])
    console.log(promise_all);
    
    console.timeEnd("run")
  }

  run()

