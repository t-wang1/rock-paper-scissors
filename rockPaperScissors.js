// Game

let playerScore = 0;
let computerScore = 0;
const computerSelection = getComputerChoice();

function getComputerChoice() {
    let items = ["rock", "paper", "scissors"];
    let choice = items[Math.floor(Math.random() * items.length)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
        computerScore++;
        return " You Lose. " + computerSelection + " beats " + playerSelection + ". Your opponent's current record is " + computerScore;
    }
    else {
        playerScore++;
        return " You Win! " + playerSelection + " beats " + computerSelection + ". Your current record is " + playerScore;
    }
}

function countScore() {
    if (playerScore > computerScore) {
        return "You won the game! ";
    }
    else if (playerScore === computerScore) {
        return "You tied ";
    }
    else {
        return "You lost the game ";
    }
}

// UI

function displayResults() {
    
}

window.onload = function() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click',() => {
            const output = button.querySelector("output");
            playerSelection = output;


            alert("you chose " + button.id);
        
            playRound(playerSelection, computerSelection);

            if (playerScore === 5 || computerScore === 5) {
                displayResults();
            }
        
        });
    });

    

};

countScore();