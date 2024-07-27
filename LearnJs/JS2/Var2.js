console.log("Hey it is tutorial 55")

let a = 5;
a = a + 1;
// above is allowed

// const a1 = 6;
// a1 = a1 + 1;
// abovve one is not allowed coz it is constant 

let b = 6;
let c = "Harry";

console.log(a+b+8)
console.log(typeof a, typeof b, typeof c )

{
    let a = 66;
    console.log(a);  //the answer will be 66
}
console.log(a);  //the answer will be 6

let x = "harry bhai";
let y = 22;
let z = 3.55;
let p = true;
let q = undefined;
let w = null;
console.log(x,y,z,p,q,w)
console.log( typeof x, typeof y, typeof z, typeof p, typeof q, typeof w)
// type of null is object . why ? . see the stackoverflow answer. interveiw question

let o = {
    "name" : "Harry" ,
    "job id" : 23828,
    "is_handsome" : "true"
}
console.log(o);

o.salary = "100crores";
console.log(o);
o.salary = "500croroes";
console.log(o);