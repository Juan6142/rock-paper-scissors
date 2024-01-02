//proyect: rock, paper scissors
console.log("Let's start the game!!");
// funcion para que la computadora elija aleatoriamente
function getComputerChoice() {
    let myArr = ["rock", "paper", "scissors"]
    indexChoice = Math.floor(Math.random() * myArr.length)
    randomChoice = myArr[indexChoice] // guardar el contenido del indice en un variable
    return randomChoice
}

//funcion para ejecutar una ronda entre el jugador y la computadora
function round(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection === computerSelection) {
        roundWinner.textContent = "Tie!"
        return "Tie!"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        roundWinner.textContent = "You win!"
        return "You win";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        roundWinner.textContent = "You win!"
        return "You win";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        roundWinner.textContent = "You win!"
        return "You win";
    } else {
        roundWinner.textContent = "You lose!"
        return "You lose";
    }
}

// game
let pointsToWin = 5
let playerWins = 0
let computerWins = 0

function game() {
    //const playerSelection = prompt("Choose between rock, paper or scissors.")
    let computerSelection = getComputerChoice() //llamada a funcion getcomputerchoice
    spanSecond.textContent = computerSelection
    let result = round(playerSelection, computerSelection); // llamada a funcion ronda

    console.log(`Player Selection is: ${playerSelection}`)
    console.log(`Computer Selection is: ${computerSelection}`)
    console.log(`${result}`)
   
    if (result === "You win") {
        playerWins++
    } else if (result === "You lose") {
        computerWins++
    } 
        console.log(`Player score: ${playerWins} - Computer score: ${computerWins}`);

    if (playerWins == 5) {
        console.log("You win the game!");
        resultSpan.style.color = 'green' 
        restart.appendChild(btnRestart)
        btnRestart.setAttribute("class", "restart-btn")
        btnRestart.setAttribute("type", "button")
        btnRestart.textContent = "PLAY AGAIN?"
        return resultSpan.textContent = "YOU WIN THE GAME"

    } else if (computerWins == 5) { 
        console.log("You lose the game!");
        resultSpan.style.color = 'red'
        restart.appendChild(btnRestart)
        btnRestart.setAttribute("class", "restart-btn")
        btnRestart.setAttribute("type", "button")
        btnRestart.textContent = "PLAY AGAIN?" 
        return resultSpan.textContent = "YOU LOSE THE GAME"
    
    } 
    resultSpan.textContent = `Player: ${playerWins}` + ` - ` + `Computer: ${computerWins}`
} 


const btnRock = document.querySelector(".btn-rock")
const btnPaper = document.querySelector(".btn-paper")
const btnScissors = document.querySelector(".btn-scissors")
let playerSelection;

btnRock.addEventListener("click", () => {
    playerSelection = "rock"
    game()
    spanFirst.textContent = playerSelection
});

btnPaper.addEventListener("click", () => {
    playerSelection = "paper"
    game()
    spanFirst.textContent = playerSelection
});

btnScissors.addEventListener("click", () => {
    playerSelection = "scissors"
    game()
    spanFirst.textContent = playerSelection
});


// seleccion

const h3First = document.querySelector(".h3-user-selection");
const spanFirst = document.createElement("span");
spanFirst.style.color = "green"
h3First.appendChild(spanFirst)

const h3Second =document.querySelector(".h3-computer-selection")
const spanSecond = document.createElement("span")
spanSecond.style.color = "red"
h3Second.appendChild(spanSecond)

//resultados
const roundWinner = document.querySelector(".round-winner")

const currentScore = document.querySelector(".current-score")
const resultSpan = document.createElement("span")

currentScore.appendChild(resultSpan)

//restart
const btnRestart = document.createElement("button")
const restart = document.querySelector(".score")



btnRestart.addEventListener("click", () => {
    playerWins = 0
    computerWins = 0
    roundWinner.textContent = ""
    resultSpan.textContent = ""
    spanFirst.textContent = ""
    spanSecond.textContent = ""
    resultSpan.style.color = 'black'
    restart.removeChild(btnRestart) 
});

// no se puede remover el evento ya que estoy usando funciones sin nombre y el metodo para elimnar
//requiere que se use, fuera de esa esta todo completo creo yo,