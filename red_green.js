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

//set player 
// let currentPlayer=document.getElementById("currentPlayer")
// currentPlayer.innerHTML=1
// console.log(currentPlayer)

//set player function to change
// function setPlayer(){

// let currentPlayer=document.getElementById("currentPlayer")
// currentPlayer.innerHTML=1
// console.log(currentPlayer)

//     if ( currentPlayer.innerHTML=1 && speedTix.textContent <= 3){
//         // console.log(currentPlayer.innerHTML=1)
//         console.log("monday")
//     } else if (currentPlayer=1 && speedTix >= 3){
//     //    console.log(currentPlayer.innerHTML= 2)
//         console.log("tuesday")
//      } else { alert("somethings off")}
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


//add 1 to score and tix when clicked | add 1 to score when c1= green| add 1 to tix when not green |
//stats player one and changes player 2| keep both player 1 and 2 scores | show winner
// works perf
//function greenPressed(){
//     let currentPlayer=document.getElementById("currentPlayer")
//     currentPlayer.innerHTML=1
//     console.log(currentPlayer)

//       if(speedingTicket.innerHTML=== "3"){
//         alert(currentPlayer.innerHTML="Player 2")
//         console.log(currentPlayer)

//       } else if ( c1.textContent ===`${"green"}`){
//             let total=document.getElementById("add")
//             total.textContent = Number(total.textContent) +1  
//             console.log("hello")
//         } else {
//             let speedTix=document.getElementById("speedingTicket")
//              speedTix.textContent= Number(speedTix.textContent) +1
//              console.log("bye");
//         }
//     }          


function greenPressed(){
    let currentPlayer=document.getElementById("currentPlayer")
    currentPlayer.innerHTML=1
    console.log(currentPlayer)

    if(speedingTicket.innerHTML=== "3"){
        add.textContent=""
        speedingTicket.textContent=""
        alert(currentPlayer.innerHTML="Ready Player 2 ")
        console.log(currentPlayer)
    } else if( currentPlayer.innerHTML="Player 2" && c1.textContent ===`${"green"}`){
        let total=document.getElementById("add")
        total.textContent = Number(total.textContent) +1  
        console.log("hello2")
    } else if(currentPlayer.innerHTML="Player 2" && c1.textContent !==`${"green"}` ){
        let speedTix=document.getElementById("speedingTicket")
         speedTix.textContent= Number(speedTix.textContent) +1
         console.log("bye2");
    } else if ( c1.textContent ===`${"green"}`){
            let total=document.getElementById("add")
            total.textContent = Number(total.textContent) +1  
            console.log("hello")
    } else if (c1.textContent !==`${"green"}`){
            let speedTix=document.getElementById("speedingTicket")
             speedTix.textContent= Number(speedTix.textContent) +1
             console.log("bye")}
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
    const displayCurrentPlayer=document.querySelector("#currentPlayer")
    displayCurrentPlayer.addEventListener("check", setPlayer)

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

 