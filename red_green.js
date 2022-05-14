console.log ("can you hear me ?")

//Create colors Array
const colors=[ 
    "red",
    "green",
    "yellow",
]

// get random color
let colorArray=colors[Math.floor(Math.random()* colors.length)]
// console.log(colorArray)

//set player 1
const displayCurrentPlayer=document.querySelector("#currentPlayer")
let currentPlayer=1 
if (currentPlayer ==1){   
}

//Go Button open the scoreboard(point & tix) | start Interval 
function goPressed(){
   let colorArray=setInterval(function(){c1.innerHTML =`${(colors[Math.floor(Math.random()* colors.length)])}`}, 2000);
   c1.textContent=`${colorArray}`
   //Scoreboard opens when go is clicked
    let totalScore =document.querySelector("#add")
    // totalScore.textContent=`${addButton}`;
    totalScore.textContent="score"
     //Speeding tix opens when go is clicked
    let speedingTicket=document.querySelector("#speedingTicket")
    speedingTicket.textContent="speeding Tickets:"
    // speedingTicket.textContent=`${speedingTicket}`
    console.log("starting game")
}

//add 1 when clicked | add to score when c1= green| add x to tix is not green |
function greenPressed(){
    const total = document.getElementById('total')
    total.textContent = Number(total.textContent) + 1

    const speedTix=document.getElementById("speedingTicket")
    speedTix.textContent= Number(speedTix.textContent) + 1

    if (c1.textContent==="green"){
    total++} else {tix++}
    console.log(total);
//     // console.log(total.textContent);
//     total.textContent = Number(total.textContent) + 1
 }

//Reset Button
function resetPressed(){
   // gets reset button from html
    const reset = document.getElementById('reset')
    // if statement to add player 2 score |or| clear both player 1 & player 2 when is done
    c1.textContent=""
    total.textContent=""
    speedingTicket.textContent=""
    console.log("resetting game")
}


// EVENTS

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