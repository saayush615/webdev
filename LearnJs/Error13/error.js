let a = prompt("Enter first number")
let b = prompt("Enter second number")
// prompt helps to put the string 

// NaN = not a number 
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("sorry this is not allowed")
}

let sum = parseInt(a) + parseInt(b);
// parseInt help to convert the string into interger

function main() {
    let x = 1;
    try {
        console.log("The sum is ", sum * x)
        return true;

    } catch (error) {
        console.log('error aa gya bhai');
        return false
    }
    // finally are used in a function when jab upar return ho or phir v niche wala code chalana ho
    finally {
        console.log("files are being closed and db connnection is being closed");

    }

}

main()


// revison of try _catch vedio #60
// setTimeout(()=>{
//     console.log("Hacking wifi.... Please wait..." ) 
//     }, 1000)
    
//     try{
//             setTimeout(()=>{ 
//                     console.log(rahul)  
//             }, 100)
//     }
//     catch(err){
//             console.log("Balle balle")
//     }
    
    
//     setTimeout(()=>{ 
//             console.log("Fetching username and password.... Please wait..." )
//     }, 2000) 
    
//     setTimeout(()=>{ 
//     console.log("Hacking Rahul's facebook id.... Please wait..." )
//     }, 3000) 
    
//     setTimeout(()=>{ 
//     console.log("Username and password of Rahul (+919356700001) fetched.... Please wait..." )
//     }, 4000) 

// revison of vedio #61

// try {
//     let age = prompt("Enter your age")
//     age = Number.parseInt(age) 
//     if(age>150){
//     throw new ReferenceError("This is probably not true")
//     }
// } catch (error) {
//     console.log(error.name)
//     console.log(error.message)
//     console.log(error.stack)
// }

// console.log("The script is still running")
