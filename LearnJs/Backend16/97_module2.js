// const {hello, ahello} = require("./module1") // 1. commonjs

import harry, {hello, ahello} from "./97_module1.js"; // 2. ES6
hello()
ahello("shivani")
ahello("garima")
ahello("nitika")
harry()

// in package.json paste this below main to run
  // "type": "module",
