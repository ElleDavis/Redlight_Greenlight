console.log ("can you hear me ?")

//Create colors Array
const colors=[ 
    "red",
    "green",
    "yellow",
]
console.log(colors)

//Go Button
function goPressed(){
    console.log("go clicked")
}


//Reset Button
function resetPressed(){
    console.log("resetting game")
}

//cirle clicks
function circleClicked(){
     //loop through colors on click
     for (let i=0; i<colors.length; i++)
     //get random color from color array
     console.log(colors[Math.floor(Math.random()* colors.length)])
}
 //display value of color in the circles (event.target) 
    // let circleColored=document.querySelectorAll(".circle")
    // c1.innerHTML= `${circleClicked}`
 
//The setInterval() method repeats a given function at every given time-interval.

// create Scoreboard
    // function scores(){
    //     let scoreBoard=document.getElementById("scoreboard")
    //     scoreBoard.innerHTML="scores:"
    // }
    // console.log(scores)

//create counter
    // function counter(){
    // for (let i=0;i === "green";i++ )
    // }

// create color function to flash colors in circle
// function taking each circle, displays an array of colors on a timer
// circles are events based on click 
    // let circle1=document.querySelector("#c1")
    
    // let circle2=document.querySelector("#c2")

    // let circle3=document.querySelector("#c3")
    // circle3.addEventListener("click", colors)

    // let lightsDiv=document.querySelector("#lights")
    // circle1Div.addEventListener("click", function(){
    //     lightsDiv.innerHTML="show me colors"
    // })


//     //click go button and start color array
//     const goButton= document.getElementById("go")
//     goButton.addEventListener("click", )
//     alert("button was clicked");

  
// if color green score increased by 1 else 0 
