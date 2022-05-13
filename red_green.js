console.log ("can you hear me ?")

//Create colors Array
const colors=[ 
    "red",
    "green",
    "yellow",
]
console.log(colors)


//Go Button starts the scoreboard
function goPressed(){
    c1.textContent="Go!"
       // c1.textContent=`${(colors[Math.floor(Math.random()* colors.length)])}`
        //c1.textContent=`${pointContainer}`
     // if (c1.value=" "){
        // c1.textContent=`${(colors[Math.floor(Math.random()* colors.length)])}`
        // return;
    // } else console.log("game already Started")
    //Scoreboard opens when go is clicked
    let showScoreBoard=document.querySelector("#scoreBoard")
    scoreBoard.textContent="scores:";
     //Speeding tix opens when go is clicked
    let speedingTicket=document.querySelector("#speedingTicket")
    speedingTicket.textContent="speeding Tickets:"
}

//Reset Button
function resetPressed(){
   // gets button from html
    const reset = document.getElementById('reset')
    c1.textContent=""
    console.log("resetting game")
}

//colors loop when circle is clicked
    function circleClicked(){
    ColorArray= c1.textContent=`${(colors[Math.floor(Math.random()* colors.length)])}`
    let circleColored =setInterval(function(){c1.innerHTML +=`${(colors[Math.floor(Math.random()* colors.length)])}`}, 3000);
    }
//add points to scorboard when circle clicked on green Scores ++, when clicked on anything else speading ticket++
    // let pointContainer = document.querySelector(".points");
    // pointContainer.textContent="points showing up "
    // let value = 0;

//     let pointContainer = document.getElementsByClassName("points"),
//     value = 0;
//     pointContainer = function() {
//         value += 1;
//         c1.innerHTML =  `${value}`;
//   };

//add points to the score counter or speeding tickets
    let value = 0;
    let pointContainer = document.querySelector("#scoreBoard");
    function counter(){
    // if (`${(colors[Math.floor(Math.random()* colors.length)])}` === colors['green']){
        if(c1.innerHTML === "green"){  
     value +=1
    pointContainer.textContent= Number(value) +1
    } else {speedingTicket += "X"}
     console.log(colors[Math.floor(Math.random()* colors.length)])
    }


//start Player2 starts when player 1 gets 3 speeding tickets
    // if(speedingTicket ==="XXX"){alert(Player 2 start) }


//click reset button and remove colors from c1
    const resetButton=document.getElementById("reset")
    resetButton.addEventListener("click",resetPressed)
    console.log("game resetting");

//click go button and start color array
    const goButton= document.getElementById("go")
    goButton.addEventListener("click", goPressed)
    console.log("go was clicked");

   