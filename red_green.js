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
function setPlayer(){

    let currentPlayer=document.getElementById("currentPlayer")
currentPlayer.innerHTML=1
console.log(currentPlayer)

    if ( currentPlayer.innerHTML=1 && speedTix.textContent <= 3){
        // console.log(currentPlayer.innerHTML=1)
        console.log("monday")
    } else if (currentPlayer=1 && speedTix >= 3){
    //    console.log(currentPlayer.innerHTML= 2)
        console.log("tuesday")
     } else { alert("somethings off")}
    }


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
function greenPressed(){
        if ( c1.textContent ===`${"green"}`){
            let total=document.getElementById("add")
            total.textContent = Number(total.textContent) +1  
            console.log("hello")
        } else {
            let speedTix=document.getElementById("speedingTicket")
             speedTix.textContent= Number(speedTix.textContent) +1
             console.log("bye");
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

   
//  works in scoreboard before the go but NaN after go
//peedTix.textContent= Number(speedTix.textContent) + 1

//only putting 1 in h2
            // total.textContent = `${(total.textContent) + 1}`

    // //1. Create a new variable called 'total' and assign it the div with the id of 'total'
    // const total = document.getElementById('total')
    // console.log(total);
    // console.log(total.textContent);

    //2. Create add Function

    // function add() {
    // //update the value of the total variable textContent
    // //total.textContent++
    // total.textContent = Number(total.textContent) + 1
    //      }

  
//add points to scorboard when circle clicked on green Scores ++, when clicked on anything else speading ticket++
 //shows score by connecting counter to buttonclick
    // function counter(){
    // // if (`${(colors[Math.floor(Math.random()* colors.length)])}` === colors['green']){
    //     if(c1.innerHTML === colors['green']){  
    //  value +=1
    // pointContainer.textContent= Number(value) +1
    // } else {speedingTicket += "X"}
    //  console.log(colors[Math.floor(Math.random()* colors.length)])
    // }

//start Player2 starts when player 1 gets 3 speeding tickets
    // if(speedingTicket ==="XXX"){alert(Player 2 start) }


    // if (goPressed ){
    //     setInterval(function(){c1.innerHTML +=`${(colors[Math.floor(Math.random()* colors.length)])}`}, 2000);
    // } else {alert ("game started")}