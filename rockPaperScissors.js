// GAME

let playerScore = 0;
let computerScore = 0;
let computerSelection;

function getComputerChoice() {
    let items = ["rock", "paper", "scissors"];
    return items[Math.floor(Math.random() * items.length)];
}

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        alert("It's a tie!");
    }
    else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
        computerScore++;
        alert("You Lose. " + computerSelection + " beats " + playerSelection + ". Your opponent's current record is " + computerScore);
    }
    else {
        playerScore++;
        alert("You Win! " + playerSelection + " beats " + computerSelection + ". Your current record is " + playerScore);
    }
}

// UI

function displayResults() {
    if (playerScore > computerScore) {
        alert("You won the game!");
    }
    else if (playerScore === computerScore) {
        alert("You tied ");
    }
    else {
        alert("You lost the game ");
    }
}

window.onload = function() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener('click',() => {
            playerSelection = button.id;

            playRound(playerSelection, computerSelection); 

            if (playerScore === 5 || computerScore === 5) {
                displayResults();
            }
        
        });

    });
};