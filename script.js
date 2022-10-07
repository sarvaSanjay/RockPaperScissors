function GetComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const choice =  Math.floor(Math.random() * 3);
    console.log("Computer chose: " + choices[choice]);
    return choices[choice];
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Tie !";
    }
    else if ((playerChoice === 'rock' & computerChoice == 'scissors') | (playerChoice == 'scissors' & computerChoice == 'paper') | (playerChoice == 'paper' & computerChoice == 'rock')) {
        return 'You Win! ' + playerChoice + ' beats ' + computerChoice;
    }
    else {
        return 'You Lose! ' + computerChoice + ' beats ' + playerChoice;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i <5; i++) {
        let playerChoice = prompt("Choose your weapon: ").toLowerCase();
        console.log("You chose: " + playerChoice);
        let computerChoice = GetComputerChoice();
        let result = playRound(playerChoice, computerChoice);
        if (result[4] == "L") {
            computerScore++;
        }
        else if (result[4] == "W") {
            playerScore++;
        }
        console.log(result);
    }
    console.log("Results:");
    console.log("Computer Score: " + computerScore);
    console.log("Your score: " + playerScore);
    if (computerScore > playerScore) {
        console.log("You lost")
    }
    else if (playerScore > computerScore) {
        console.log("You won")
    }
    else {
        console.log("Tied")
    }
}
let quit = false;
while (!quit) {
    game();
    let exit = prompt("Do you want to quit: y/n");
    if (exit[0] == 'y' | exit[0] == 'Y') {
        quit = true;
    }
}