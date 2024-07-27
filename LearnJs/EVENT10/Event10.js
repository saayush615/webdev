let button = document.getElementById("btn")

// List of all mouse events 
// which include mouse events, KeyboardEvent,formevent etc 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

// 1. mouse events 
button.addEventListener("click",()=>{
    // alert("I was clicked yaay!!")

    document.querySelector(".box").innerHTML = "<b>Yaay i was clicked </b> Enjoy your click!"
})

// "dblclick" in place of click to use it when double clicked

button.addEventListener("contextmenu",()=>{
    alert("Dont hack us by right click please")
})


// 2.KeyboardEvents
// document.addEventListener("keydown",(e)=>{
//     console.log(e)
// })
// document.addEventListener("keydown",(e)=>{
//     console.log(e.key,e.keyCode)
// })

// event bubling 
// .........

