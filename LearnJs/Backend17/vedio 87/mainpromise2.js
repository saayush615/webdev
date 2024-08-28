// handling fs module in ES6

import fs from "fs/promises"

// here we can directly use await bcoz we are inside the module
let a = await fs.readFile("harry.txt")

let b = await fs.appendFile("harry.txt","\n\n\n\nthis is amazing promise")

console.log(a.toString(), b)