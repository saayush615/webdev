// Abstraction : hide internal detail 
// Encapsulation: 5 chije ko mila kar ek chij banna skte h
// inheritance: use phone and add camera , flash light, calculator etc
// polymorphism : ek chij aalag aalg form , aapka phone ek camera v hai note taking app v hai ,calci v hai light v hai

// # 75 : prototype(thora sa kam aata hai)

// let a = {
//     "name2" : "Harry",
//     "language" : "hindi",
//     run: () => { 
//         alert("self run")
//      }
// }
// console.log(a)

// let p = {
//     run: () => { 
//         alert("run")
//      }
// }

// a.__proto__ = p

// a.run()
// if run method is there in a then it will run other wise if run is not there boz of a.__proto__ the p's run will run

// p.__proto__ = {
//     name: "jackie"
// }
// console.log(a.name)
// ye upar wala => a me gya name dhundne usme nii tha . phir wo uske protype p me gya waha v name ni mila then fir wo p ke proto me gya aur usse print kar diya 

// #76: classes and objects
// class Railwayform{
//     submit(){
//         alert(this.name +" form submitted for train number " + this.trainnumber)
//     }
//     cancel(){
//         alert( this.name +" form is cancelled for train number " + this.trainnumber)
//     }
//     fill(givenname, trainnumber){
//         this.name = givenname 
//         this.trainnumber = trainnumber
//     }
// }
// // create a form for harry
// let harryform= new Railwayform()
// // fill the form with harry details
// harryform.fill("Harry",145316)

// // create a form for rohan
// let rohanform = new Railwayform()
// // fill the form with rohan details
// rohanform.fill("Rohan",122420)

// harryform.submit()
// rohanform.submit()
// rohanform.cancel()

// // creating rohan second forms 
// let rohanform2 = new Railwayform()
// rohanform2.fill("Rohan",129211)
// rohanform2.submit()
// rohanform2.cancel()

// #77 : constructor

// class Railwayform{
//     constructor(givenname, trainnumber){
//         console.log(givenname + "Constructor called..." + " " + trainnumber);
//         this.name = givenname 
//         this.trainnumber = trainnumber
//     }
//     submit(){
//         alert(this.name +" form submitted for train number " + this.trainnumber)
//     }
//     cancel(){
//         alert( this.name +" form is cancelled for train number " + this.trainnumber)
//     }
// }
// // // create a form for harry & fill the form with harry details
// let harryform= new Railwayform("Harry",145316)
// // as soon as we create an object the constructor is called 

// // create a form for rohan & fill the form with rohan details
// let rohanform = new Railwayform("Rohan",122420)

// harryform.submit()
// rohanform.submit()
// rohanform.cancel()

// // creating rohan second forms 
// let rohanform2 = new Railwayform("Rohan",129211)
// rohanform2.submit()
// rohanform2.cancel()

// #78 : inheritance

// class Animal{
//     constructor(name,color){
//         this.name = name 
//         this.color = color
//     }
//     run(){
//         console.log(this.name + " is running");
//     }
//     sout(){
//         console.log(this.name + " is souting");
//     }
// }

// class monkey extends Animal {
//     eatbanana(){
//         console.log(this.name + " eating banana")
//     }
// }

// let ani = new Animal("bruno","white")
// let m = new monkey("chimpu","orange")

// ani.sout()
// m.eatbanana()

// #79

// class Employee{
//     login(){
//         console.log(`Employee has logged in `);
//     }
//     logout(){
//         console.log(`Employee has logged out `);
//     }
//     requestleaves(leaves){
//         console.log(`Employee has requested ${leaves} leaves - Auto approved`);
//     }
// }

// class Programmer extends Employee{
//     requestcoffee(x){
//         console.log(`Employee has requested ${x} coffees`);
//     }
//     requestleaves(leaves){
//         // console.log(`Employee has requested ${leaves + 1} leaves (one extra) `);

//         super.requestleaves(4)
//         console.log("one extra is granted");
//     }
// }

// let e = new Programmer()
// e.login()
// e.requestleaves(5)

// #80 :

// class Employee{
//     constructor(name){
//         console.log(`${name} - Employee's coonstructor is here`);
//         this.name = name
//     }
//     login(){
//         console.log(`Employee has logged in `);
//     }
//     logout(){
//         console.log(`Employee has logged out `);
//     }
//     requestleaves(leaves){
//         console.log(`Employee has requested ${leaves} leaves - Auto approved`);
//     }
// }

// class Programmer extends Employee{
//     // if we donnot put any thing in constructor  then coonstructor will be automatically be created, which calls parents class constructor.
//     // if we donnot want parent cosntructor then we can create its cosntructor here only.
//     constructor(name){
//         // calling super is compulsory if we are overriding the constructor
//         super(name)
//         console.log(`${name} - programmer's constructor is here. This is a newly written cosntructor`);
//         this.name = name 
//     }
//     requestcoffee(x){
//         console.log(`Employee has requested ${x} coffees`);
//     }
//     requestleaves(leaves){
//         // console.log(`Employee has requested ${leaves + 1} leaves (one extra) `);

//         super.requestleaves(4)
//         console.log("one extra is granted");
//     }
// }

// let e = new Programmer()
// e.login()

// #81 : static methods 

// class Animal{
//     constructor(name){
//         this.name = name
//     }
//     walk(){
//         console.log("Animal " + Animal.capitalize(this.name) + " is walking");
//     }
//     // static keyword belong to class as a whole and not to a perticular keyword
//     static capitalize(name){
//         return name.charAt(0).toUpperCase() + name.substr(1, name.length)
//     }
// }

// j = new Animal("jack")
// j.walk()

// // console.log(j.capitalize("this is"));  --> not work

// #82 : getter and setter

// class Animal{
//     constructor(name){
//         this._name = name
//     }
//     fly(){
//         console.log("mai udd rha hu")
//     }
//     get name(){
//         return this._name
//     }
//     set name(newName){
//         this._name = newName
//     }
// }

// let a = new Animal("bruno")
// a.fly()
// console.log(a.name); // -> bruno
// a.name = "jack"
// console.log(a.name); // -> jack

// console.log(a instanceof Animal);

// let c = 56
// console.log(c instanceof Animal);




