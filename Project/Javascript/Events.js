// Events.
// The Change in state of an object is Known as an Events.
// Ex:node.addEventListener(event,callback)
//  Ex:node.removeEventListener(event,callback)

// Mouse Events(click,double click etc).
let button1=document.querySelector("#button1");
    button1.addEventListener("click",()=>{
        console.log("You clicked Button!-Handler1")
    })
    button1.addEventListener("click",()=>{
        console.log("You clicked Button!-Handler2")
    })

    let remove=()=>{                     // Event Should be stored in a Variable.it will remove 
                                        // event stored in particular Variable ,Otherwise it is treated as new one.

        console.log("You clicked Button!-Handler3")
    }
    button1.addEventListener("click", remove ) // Event Added
    button1.removeEventListener("click", remove ) //Event removed

// Keyboard Events(Keypress,keyup,keydown).
// Form Events(submit,Reset).

// Practice Question.
// Create a Button that turn to white and another click for black.

let mode=document.querySelector("#btn")
let body=document.querySelector("body")
let curr_mode="light"
let result=()=>{
    if(curr_mode==="light"){
        curr_mode="dark"
     body.style.backgroundColor="black";
    }else{
        curr_mode="light"
        body.style.backgroundColor="white";
    }
    console.log(curr_mode)
}
mode.addEventListener("click",result)


