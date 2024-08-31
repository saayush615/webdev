// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

// for example, these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf 
// 4. harry.zip
// 5. Rohan.zip
// 6. cat.jpg 
// 7. harry.pdf

// this: 
// jpg/name.jpg, jpg/cat.jpg 
// png/name.png 
// pdf/this.pdf pdf/harry.pdf
// zip/harry.zip zip/Rohan.zip

import fs from "fs/promises"
import fsn from "fs"
import path from "path"

const basepath = "C:\\Users\\saayu\\Desktop\\Webdev\\LearnJs\\Backend17\\vedio 93"

let files = await fs.readdir(basepath)


for (const item of files) {
    let ext = item.split(".")[item.split(".").length - 1]
    console.log(ext)
    if(fsn.existsSync(path.join)){
        // move the file to this directory
        fs.rename(item, path.join(ext, path))
    }
    else{
        fs.mkdir(ext)
    }
    console.log(item)
}