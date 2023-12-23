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
        return "Tie!"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win";
    } else {
        return "You lose";
    }
}

// funcion de juego de 5 rondas
function game() {
    let playerWins = 0
    let computerWins = 0
    for (let x = 1; x < 6; x++) {
        const playerSelection = prompt("Choose between rock, paper or scissors.")
        const computerSelection = getComputerChoice() //llamada a funcion getcomputerchoice
        const result = round(playerSelection, computerSelection); // llamada a funcion ronda
        
        console.log(`Player Selection is: ${playerSelection}`)
        console.log(`Computer Selection is: ${computerSelection}`)
        console.log(`Round ${x}: ${result}`)

        if (result === "You win") {
            playerWins++
        } else if (result === "You lose") {
            computerWins++
        } 
        console.log(`Player score: ${playerWins} - Computer score: ${computerWins}`);
    }
    if (playerWins > computerWins) {
        console.log("You win the game!"); 
    } else if (playerWins < computerWins) {
        console.log("You lose the game!"); 
    } else {
        console.log("Its a tie!");
    }
}
//llamada a funcion game para ejecutar el programa
game();


/* falta entender ampliamente el funcionanmiento de la consola y la llamada de funciones y funcionamiento de parametros, estudiar
mas los metodos de strings, analizar el problema no aplicaste el metodo que aprendiste*/
