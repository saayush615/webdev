/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/
let num1 = parseFloat(prompt("Your first number"));
let num2 = parseFloat(prompt("Your Second number"));
let OP = prompt("Your Operator");
let a = Math.random();
console.log(a)
if (a<0.1) {
    if(OP == "+"){
        console.log(num1 - num2);
    }
    else if(OP == "-"){
        console.log(num1 / num2);
    }
    else if(OP == "*"){
        console.log(num1 + num2);
    }
    else if(OP == "/"){
        console.log(num1 % num2);
    }
} else {
    if(OP == "+"){
        console.log(num1 + num2);
    }
    else if(OP == "-"){
        console.log(num1 - num2);
    }
    else if(OP == "*"){
        console.log(num1 * num2);
    }
    else if(OP == "/"){
        console.log(num1 / num2);
    }
}