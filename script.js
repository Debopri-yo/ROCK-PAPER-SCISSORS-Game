let humanScore = 0;
let computerScore = 0;
function   getComputerChoice() {
    let choice = Math.floor(Math.random() * 3 +1);
    if(choice===1) {
        return "rock";
    }
    else if(choice===2) {
        return "paper";
    }
    else {        return "scissors";
    }
}
 function getHumanChoice() {
    let choice = window.prompt("Enter your choice: rock, paper, or scissors");
    choice = choice.toLowerCase();
    return choice;
}
function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
        return 'It is tie!; humanScore: ' + humanScore + ', computerscore: ' + computerScore;
    }
    else if((humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
            return 'Human wins this round; humanScore: ' + humanScore + ', computerScore: ' + computerScore;
    }
    else {
        computerScore++;
return 'Computer wins this round; humanScore: ' + humanScore + ', computerScore: ' + computerScore;
    }
}
function playGame() {
    for(let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log("computer chose: " + computerSelection);
        console.log(playRound(humanSelection, computerSelection));
    }
    if(humanScore > computerScore) {
        console.log("Human wins the game!");
    } else if(computerScore > humanScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("The game tied!");
    }
    console.log('Final Score - Human: ' + humanScore + ', Computer: ' + computerScore);
}
playGame();