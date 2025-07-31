function   getComputerChoice() {
    let choice = Math.random() * 3 +1;
    if(choice===1) {
        return "rock";
    }
    else if(choice===2) {
        return "paper";
    }
    else {        return "scissors";
    }
}
console.log(getComputerChoice());
function getHumanChoice() {
    let choice = window.prompt("Enter your choice: rock, paper, or scissors");
    return choice;
}
console.log(getHumanChoice());