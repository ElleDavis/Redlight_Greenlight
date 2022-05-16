console.log ("can you hear me ?")

//Create colors Array
const colors=[ 
    "red",
    "green",
    "yellow",
    c1.textContent=document.getElementById("c1").style.backgroundColor="green",
    c1.textContent=document.getElementById("c1").style.backgroundColor="red",
    c1.textContent=document.getElementById("c1").style.backgroundColor="yellow"
]
// c1.textContent=document.getElementById("c1").style.backgroundColor="green"
// c1.textContent=document.getElementById("c1").style.backgroundColor="red"
// c1.textContent=document.getElementById("c1").style.backgroundColor="yellow"
// get random color
let colorArray=colors[Math.floor(Math.random()* colors.length)]
let circle=document.getElementById("c1")

//set player function to change
// function setPlayer(){
//     }


//Go Button open the scoreboard(point & tix) | start color in Intervals
function goPressed(){
    let colorArray=setInterval(function(){c1.textContent =`${(colors[Math.floor(Math.random()* colors.length)])}`}, 2000);
//let colorArray=setInterval(function(){ c1= `${(colors[Math.floor(Math.random()* colors.length)])}`}, 2000);
    c1.textContent=`${colorArray}`

//Scoreboard opens when go is clicked
    let totalScore=document.querySelector("#add")
    // totalScore.textContent="score:"
    totalScore="score:"

//Speeding tix opens when go is clicked
    let speedingTicket=document.querySelector("#speedingTicket")
    // speedingTicket.textContent="speeding Tickets:"
    speedingTicket="speeding Tickets:"

}



//starts player one and changes player 2| keep both player 1 and 2 scores | show winner
 

//try switch case for color
// switch (c1.innerHTML==="green"){
//     case c1="green":
//         document.getElementById("c1").style.backgroundColor="green"
//         console.log('show green');
//         break;
//     case c1="red": 
//     document.getElementById("c1").style.backgroundColor="red"
//         console.log('show Red');
//         break;
//         case c1="yellow": 
//         document.getElementById("c1").style.backgroundColor="yellow"
//             console.log('show yellow');
//             break;
//     default:
//         console.log('Not Found!');
// }

// let currentPlayer=document.getElementById("currentPlayer")
// currentPlayer.innerHTML=1

// function goPressed(){
//     switch (c1.innerHTML){
//         case c1.innerHTML="green":
//             document.getElementById("c1").style.color="green"
//             console.log('show green');
//             break;
//         case c1.textContent="red": 
//         document.getElementById("c1").style.color="red"
//             console.log('show Red');
//             break;
//             case c1.textContent="yellow": 
//             document.getElementById("c1").style.color="yellow"
//                 console.log('show yellow');
//                 break;
//         default:
//             console.log('Not Found!');
//     }

// }


//add 1 to score and tix when clicked | add 1 to score when c1= green| add 1 to tix when not green |
//starts player 1 & changes to player 2|reset points and tix and add for player two but no stop
function greenPressed(){
let currentPlayer=document.getElementById("currentPlayer")
currentPlayer.innerHTML=1

if(speedingTicket.innerHTML=== "3"){
    add.textContent=""
    speedingTicket.textContent=""
    alert(currentPlayer.innerHTML="Ready Player 2 ")
} else if ( c1.textContent ===`${"green"}`){
    let total=document.getElementById("add")
    total.textContent = Number(total.textContent) +1  
    console.log("hello")
} else if (c1.textContent !==`${"green"}`){
    let speedTix=document.getElementById("speedingTicket")
    speedTix.textContent= Number(speedTix.textContent) +1
    console.log("bye")
} 
    }


//Reset Button
function resetPressed(){
   // gets reset button from html
    const reset = document.getElementById('reset')
    // if statement to add player 2 score |or| clear both player 1 & player 2 when is done
    c1.textContent=""
    add.textContent=""
    speedingTicket.textContent=""
    console.log("resetting game")
}


// EVENTS
//Set player
    // const displayCurrentPlayer=document.querySelector("#currentPlayer")
    // displayCurrentPlayer.addEventListener("check", setPlayer)

// click green button and add piont if circle is green
    const greenButton=document.querySelector("#add")
    greenButton.addEventListener('click', greenPressed)
    console.log(greenButton);

//click reset button and remove colors from c1
    const resetButton=document.getElementById("reset")
    resetButton.addEventListener("click",resetPressed)
    console.log("game resetting");

//click go button and start color array
    const goButton=document.getElementById("go")
    goButton.addEventListener("click",goPressed)
    console.log("go was clicked");

 