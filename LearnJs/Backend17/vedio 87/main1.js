// 1. handling fs module in commonjs

const fs = require("fs")  // it is fs module
// const fs = require("fs/promises")

console.log(fs)

console.log("starting")
// fs.writeFileSync("harry.txt", "Harry is a good boy") // this write an blocking code, jabtak ye execute nii hoga tabtak niche wala nii chalega

// fs.writeFile("harry2.txt", "Harry is a good boy2", () => { 
//     console.log("done")
//  })  // this help to maintain asyncrounous behaviour of javascript

fs.writeFile("harry2.txt", "Harry is a good boy2", () => { 
    console.log("done")
    fs.readFile("harry2.txt", (error,data) => { 
        console.log(error,data.toString())
     }) // to read the file
 })

 fs.appendFile("harry.txt", "harryrobo" , (e,d) => { 
    console.log(d)
  })

console.log("ending")