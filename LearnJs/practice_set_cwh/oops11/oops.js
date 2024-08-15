// Q1 :  with extra get and set just for practice and q5 is same do it

//  Class names in JavaScript are typically written in PascalCase. You might want to rename complex to Complex
// class Complex{
//     constructor(real,complex){
//         this.real = real
//         this.complex = complex
//     }
//     get complexno(){
//         return `${this.real} +i ${this.complex} `
//     }
//     //  In JavaScript, setters can only take one argument. To set both real and complex, you should pass an object or an array as the argument.
//     set complexno({ realnew, complexnew }) { // Using destructuring with an object
//         this.real = realnew;
//         this.complex = complexnew;
//     }
// }

// let num = new Complex(2,4)
// console.log(num.complexno);
// num.complexno = {realnew : 5, complexnew : 7}
// console.log(num.complexno)


// Q2:

// class Complex{
//     constructor(real,imaginary){
//         this.real = real
//         this.imaginary = imaginary
//     }
//     add(r,i){
//         let real1 = r + this.real
//         let imaginary1 = i + this.imaginary
//         return `${real1} + i ${imaginary1}` 
//     }
    
// }

// let num = new Complex(2,4)
// console.log(num.add(5,7));

// Q3 :

// class Human{
//     eat(){
//         console.log('eat food'); 
//     }
//     sleep(){
//         console.log('sleep 8 hour'); 
//     }
//     drink(){
//         console.log('drink 3 litrs'); 
//     }
// }

// class Student extends Human{
//     eat(){
//         console.log('eat good food');
//     }
//     sleep(){
//         console.log('sleep 6 hrs');
//     }
//     study(){
//         console.log('study 10 hours');
//     }
// }

// let dad = new Human()
// let son = new Student()
// dad.eat()
// son.eat()
// dad.sleep()
// son.sleep()

// console.log(son instanceof Student);
// console.log(son instanceof Human);



