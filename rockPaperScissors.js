let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let items = ["rock", "paper", "scissors"];
    let choice = items[Math.floor(Math.random() * items.length)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        return "It's a tie!";
    }
    else if ((playerSelection.toLowerCase() === "rock" && computerSelection === "paper") || (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") || (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock")) {
        computerScore++;
        return " You Lose. " + computerSelection + " beats " + playerSelection.toLowerCase() + ". Your opponent's current record is " + computerScore;
    }
    else {
        playerScore++;
        return " You Win! " + playerSelection.toLowerCase() + " beats " + computerSelection + ". Your current record is " + playerScore;
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

const rock = document.querySelector('#rock');
rock.addEventListener('click', () =>  {
    alert("you chose rock");
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () =>  {
    alert("you chose paper");
});

const scissors = document.querySelector('#scissors');
rock.addEventListener('click', () =>  {
    alert("you chose scissors");
});

countScore();
game();