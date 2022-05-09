console.log ("can you hear me ?")

//Colors in array
const colors=[ 
    "red",
    "green",
    "yellow",
]

// create Scoreboard
function scores(){
    let scoreBoard=document.createElement("h2")
    scoreBoard.textContent="scores:"
    scoreBoard.appendChild("h1")
    const winnerDiv=document.getElementById("winner")
     winnerDiv.append(scoreBoard)
}


//create color function to flash in circle
// function taking each circle, displays an array of colors on a timer
// circles are events based on click 
function colorChange(){
    let circle1=document.getElementById("c1")
    circle1.addEventListener("click", colors)

    let circle2=document.getElementById("c2")
    circle2.addEventListener("click",colors)

    let circle3=document.getElementById("c3")
    circle3.addEventListener("click", colors)
}



//get random color from color array
    // const idx = Math.floor(Math.random() * colorChange.length)
    //  // get the random color by using the random color
    //     const randomColor = colorChange[idx]
    // // Create li
    //     const li = document.createElement('li')
    // // add text content to the il of the color's name from the array\
    //     li.textContent = randomColor
    //     console.log(li);


    



    


    //click go button and start color array
    const goButton= document.getElementById("go")
    goButton.addEventListener("click", )
    alert("button was clicked");

  
// if color green score increased by 1 else 0 
// use circles are buttons so they already hace the on click event
// have individual 