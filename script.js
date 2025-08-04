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
function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
        return 'It is tie!';
    }
    else if((humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
            return 'Human wins this round';  
    }
    else {
        computerScore++;
return 'Computer wins this round';
    }
}
document.getElementById("rock").addEventListener("click",() => {playRoundWithUi("rock");});
document.getElementById("paper").addEventListener("click",() => {playRoundWithUi("paper");});
document.getElementById("scissors").addEventListener("click",() => {playRoundWithUi("scissors");});
function playRoundWithUi(humanChoice){
   if(humanScore == 5 || computerScore == 5) return;
  const computerChoice= getComputerChoice();
  const result = playRound(humanChoice , computerChoice);
  document.getElementById("result").textContent= "Computer chose: " + computerChoice + ". " + result;
      document.getElementById("score").textContent = "Human: " + humanScore + ", Computer: " + computerScore;
  if (humanScore === 5 || computerScore === 5) {
        const finalMessage = humanScore === 5 ? "Human wins the game!" : "Computer wins the game!";
        document.getElementById("result").textContent += " " + finalMessage;
  }
}
