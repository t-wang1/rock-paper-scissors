function getComputerChoice() {
    let items = ["rock", "paper", "scissors"];
    let choice = items[Math.floor(Math.random() * items.length)];
    console.log(choice);
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        return "It's a tie!";
    }
    else if ((playerSelection.toLowerCase() === "rock" && computerSelection === "paper") || (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") || (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock")) {
        return "You Lose. " + computerSelection + " beats " + playerSelection.toLowerCase();
    }
    else {
        return "You Win! " + playerSelection.toLowerCase() + " beats " + computerSelection;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter rock, paper, or scissors: ");
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();


