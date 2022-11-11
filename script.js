function GetPlayerChoice(e) {
    return e.target.getAttribute('id')
}

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

function declareWinner(winner) {
    winnerBox.setAttribute('style', 'display: flex')
    declareBox = document.querySelector('.declare-winner');
    declareBox.textContent = winner + ' won!';
    buttons.forEach(button => {
        button.setAttribute('style', 'display: none')
    })

}

// function game() {
//     let playerScore = 0;
//     let computerScore = 0;
//     while (playerScore < 5 & computerScore < 5) {
//         let buttons = document.querySelectorAll('button')
//         buttons.forEach(button => (button.addEventListener('click', function(){let result = GetPlayerChoice()})))
//         if (result){
//         playerChoice = result
//         }
//         console.log("You chose: " + playerChoice);
//         let computerChoice = GetComputerChoice();
//         let result = playRound(playerChoice, computerChoice);
//         if (result[4] == "L") {
//             computerScore++;
//         }
//         else if (result[4] == "W") {
//             playerScore++;
//         }
//         console.log(result);
//     }
//     console.log("Results:");
//     console.log("Computer Score: " + computerScore);
//     console.log("Your score: " + playerScore);
//     if (computerScore > playerScore) {
//         console.log("You lost")
//     }
//     else if (playerScore > computerScore) {
//         console.log("You won")
//     }
//     else {
//         console.log("Tied")
//     }
// }


let playerScore = 0;
let computerScore = 0;
let buttons = document.querySelectorAll('.choice');
let winner = document.querySelector('.round');
let playerBox = document.querySelector('.human-score');
let computerBox = document.querySelector('.computer-score');
let winnerBox = document.querySelector('.winner');

buttons.forEach(element => {
    element.addEventListener('click', (e) => {
        let playerChoice = e.target.getAttribute('id');
        console.log(playerChoice);
        let computerChoice = GetComputerChoice();
        let result = playRound(playerChoice, computerChoice);
        if (result[4] == "L") {
            computerScore++;
        }
        else if (result[4] == "W") {
            playerScore++;
        }
        winner.textContent = result;
        playerBox.textContent = playerScore;
        computerBox.textContent = computerScore;
        if (playerScore == 5) {
            declareWinner('You');
        }
        else if (computerScore == 5) {
            declareWinner('Computer');
        }
    })
});

restart = document.querySelector('#restart');
restart.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    playerBox.textContent = playerScore;
    computerBox.textContent = computerScore;
    buttons.forEach(button => {
        button.setAttribute('style', 'display: flex')
    });
    winnerBox.setAttribute('style', 'display: none')
})