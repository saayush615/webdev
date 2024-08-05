// question 1

// let button = document.getElementsByTagName("button");
// button[0].addEventListener("click",() => { 
//     alert("You have clicked the button1")
//  })
// button[1].addEventListener("click",() => { 
//     alert("You have clicked the button2")
//  })
// button[2].addEventListener("click",() => { 
//     alert("You have clicked the button3")
//  })

// question3

document.getElementById("google").addEventListener("click",() => { 
    window.location = "https://www.google.com";
    window.focus();
 })
document.getElementById("linkedin").addEventListener("click",() => { 
    window.location = "https://www.linkedin.com";
    window.focus();
 })
document.getElementById("twitter").addEventListener("click",() => { 
    window.location = "https://www.twitter.com";
    window.focus();
 })

//  question5
// setInterval((async) => { 
//     document.querySelector("#bulb").classList.toggle("bulb")
//  },300)