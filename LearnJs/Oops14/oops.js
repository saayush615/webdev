// let obj = {
//     a: 1,
//     b: "Harry"
// }

// console.log(obj);

// let animal = {
//     eats : true
// };
// let rabbit = {
//     jumps : true
// };

// rabbit.__proto__ = animal;  // set rabbit.[[prototype]] = animal;


// class Animal{
//     constructor(name){
//         this.name = name
//         console.log("Object is create")
        
//     }
//     eats(){
//         console.log("Kha rha hoon")
//     }
//     jumps(){
//         console.log("khood raha hoon")
//     } 
// }

// class Lion extends Animal {
//     constructor(name){
//         super(name)
//         // this.name = name
//         console.log("object is created ...");
//     }

//     eats(){
//         super.eats()
//         console.log("Kha rha hoon with roar")
//     }
// }

// let a = new Animal("Bunny");
// console.log(a);

// let l = new Lion("shera")
// console.log(l)


// geeter and setters 
// class User {

//     constructor(name) {
//       // invokes the setter
//       this.name = name;
//     }
  
//     get name() {
//       return this._name;
//     }
  
//     set name(value) {
//       if (value.length < 4) {
//         console.log("Name is too short.");
//         return;
//       }
//       this._name = value;
//     }
  
//   }
  
//   let user = new User("John");
//   console.log(user.name); // John
  
//   user.name = "Harry" // Name is too short.
//   console.log(user.name)
