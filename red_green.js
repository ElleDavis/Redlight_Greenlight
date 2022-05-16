console.log ("can you hear me ?")

//Create colors Array
const colors=[ 
    "red",
    "green",
    "yellow",
]
 
// get random color
let colorArray=colors[Math.floor(Math.random()* colors.length)]
let circle=document.getElementById("c1")

//set player function to change
// function setPlayer(){
//     }


//Go Button open the scoreboard(point & tix) | start color in Intervals
function goPressed(){
    let colorArray=setInterval(function(){c1.textContent =`${(colors[Math.floor(Math.random()* colors.length)])}`}, 1000);
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


//add 1 to score and tix when clicked | add 1 to score when c1= green| add 1 to tix when not green |
//starts player 1 & changes to player 2|reset points and tix and add for player 2 but no stop  | show winner
function greenPressed(){
let currentPlayer=document.getElementById("currentPlayer")
currentPlayer.innerHTML=1

// //try switch case for color| shows background color but not on the right color
// switch (c1.innerHTML){
//             case c1.innerHTML="green":
//                 document.getElementById("c1").style.backgroundColor="green"
//                 console.log('show green');
//                 break;
//             case c1.innerHTML="red": 
//             document.getElementById("c1").style.backgroundColor="red"
//                 console.log('show Red');
//                 break;
//                 case c1.innerHTML="yellow": 
//                 document.getElementById("c1").style.backgroundColor="yellow"
//                     console.log('show yellow');
//                     break;
//             default:
//                 console.log('Not Found!');
//         }
// worst case submission: gets 3 tix or 3 pts turn to player2
// if (speedingTicket.innerHTML >= "3"){
//     add.textContent=""
//     speedingTicket.textContent=""
//     alert("LOSER, Try Again!")
//     (currentPlayer.innerHTML="Ready Player 2")
// }else if (add.innerHTML==="3" ){
//     alert("WINNER")
// } else if ( c1.textContent ===`${"green"}`){
//     let total=document.getElementById("add")
//     total.textContent = Number(total.textContent) +1  
//     console.log("hello")
// } else if (c1.textContent !==`${"green"}`){
//     let speedTix=document.getElementById("speedingTicket")
//     speedTix.textContent= Number(speedTix.textContent) +1
//     console.log("bye")
// } 

// //checks if 3 tixs| clears points tix|alert loser
// if (speedingTicket.innerHTML >= "3"){
//     add.textContent=""
//     speedingTicket.textContent=""
//     alert("LOSER, Try Again!")
//     (currentPlayer.innerHTML="Ready Player 2")
// //if 3 points alert winner
// }else if (add.innerHTML==="3" ){
//     add.textContent=""
//     speedingTicket.textContent=""
//     alert("WINNER")
// // if player2 and c1 is green add point
// }else if (currentPlayer.innerHTML==="Ready Player 2" && c1.textContent !==`${"green"}`){
//     alert("Play2 Tixx")
// // if player2 and c1 is not green add tixx 
// }else if (currentPlayer.innerHTML==="Ready Player 2" && c1.textContent ===`${"green"}`){
//     alert("Player2 score")
// // if player1 and c1 is green add point 
// } else if ( c1.textContent ===`${"green"}`){
//     let total=document.getElementById("add")
//     total.textContent = Number(total.textContent) +1  
//     console.log("hello")
// // if player1 and c1 is not green add tix
// } else if (c1.textContent !==`${"green"}`){
//     let speedTix=document.getElementById("speedingTicket")
//     speedTix.textContent= Number(speedTix.textContent) +1
//     console.log("bye")
// } 
//if player1 and c1 is green add tix
if (currentPlayer.innerHTML==2 ){
    alert("start player 2")
// if player2 and c1 is not green add tixx 
} else if (currentPlayer.innerHTML===2 && c1.textContent ===`${"green"}`){
    alert("Player2 score")
} else if (currentPlayer.innerHTML===2 &&  c1.textContent !==`${"green"}`){
    alert("Player2 Tix")
// if player1 and c1 is green add point 
} else if (speedingTicket.innerHTML==="3"){
    add.textContent=""
    speedingTicket.textContent=""
    alert("LOSER, Try Again!")
    currentPlayer.textContent= 2
} else if (add.innerHTML==="3" ){
    add.textContent=""
    speedingTicket.textContent=""
    alert("WINNER")
} else if (currentPlayer.innerHTML==1 && c1.textContent ===`${"green"}`){
    let total=document.getElementById("add")
    total.textContent = Number(total.textContent) +1 
    console.log("hello")
        // if player1 and c1 is not green add tix
} else if (currentPlayer.innerHTML==1 && c1.textContent !==`${"green"}`){
    let speedTix=document.getElementById("speedingTicket")
    speedTix.textContent= Number(speedTix.textContent) +1
    console.log("bye")
        // 
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

 