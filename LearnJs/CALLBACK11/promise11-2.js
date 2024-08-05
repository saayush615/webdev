// promise chaining : this help to solve the problelm of callback hell

// let p1 = new Promise((resolve, reject) => { 
//     setTimeout(() => { 
//         console.log("Resolved after 2 seconds ")
//         resolve(56)
//      },2000)
//  })

//  p1.then((value) => { 
//     console.log(value);
    
//     let p2 = new Promise((resolve, reject) => { 
//         resolve("Promise 2")
//      })
//      return p2;
//   }).then((value) => { 
//     console.log("we are done " + value);
//     return 2;
//    }).then((value) => { 
//     console.log("Now we are pakka done");
    
//     })


// quick quiz: rewrite the load script function
// const loadscript = (src) => { 
//     return new Promise((resolve, reject) => {
//         let script = document.createElement("script")
//         script.type = "text/javascript"
//         script.src = src 
//         document.body.appendChild(src)
//         script.onload = () => { 
//             resolve(1)
//         }
//         script.onerror = () => { 
//             reject(0)
//          }

//     })
//  }

//  let p1 = loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
//  p1.then((value) => { 
//     console.log(value);
    
//   }).catch((error) => { 
//     console.log("we are sorry but we are having problem loading the script");
    
//    })


// attaching multiple handlers (this diffrent from promise chaning in promise chaning we have return some value )
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // alert("Hey I am resolved ")
        resolve(1)
    }, 2000);
 })

 // jo .then upar hoga wo pahle chalega
 p1.then(() => { 
    console.log("congratulation this promise is now reoslved ");
    
  })
p1.then(() => { 
    alert("Hurray!!")
 })
 p1.then(() => { 
    console.log("I am after hurray");
    
  })