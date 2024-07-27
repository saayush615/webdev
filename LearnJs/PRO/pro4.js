console.log("script.js is intitialized")
// let boxes = document.getElementsByClassName("box")
let boxes = document.querySelector(".continer").children
console.log(boxes)

function getRandomColor() {
    /*
    1. the rgb(x,y,z) xyz lies bteween 0 to 255
    2. math.random genrate a value between 0 to 1
    3. a + r (b-a) = with this formula we get a random number between a and b including a and b where r is a random number 
    eg => 0 + Math.random() * (255 - 0) == Math.random()*255
    4. math.ceil ek bara number if it is decimal
    */
    let val1 = Math.ceil(Math.random()*255);
    let val2 = Math.ceil(Math.random()*255);
    let val3 = Math.ceil(Math.random()*255);
    return `rgb(${val1}, ${val2}, ${val3})`
}

// by default is an html collection . to convert it in array we use Array.from()
Array.from(boxes).forEach(e => {
    e.style.backgroundColor = getRandomColor();
    e.style.color = getRandomColor();
});