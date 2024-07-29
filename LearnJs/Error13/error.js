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
