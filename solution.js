
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    function playRound(humanChoice, computerChoice) {
        let hc = humanChoice.toLowerCase();
        let cc = computerChoice.toLowerCase();
        console.log("Your choice is " + hc);
        console.log("Computer's choice is " + cc);
        if (hc == cc) {
            console.log("NO ONE WINS");
        }
        else if (hc == "scissor" && cc == "rock" ||
            hc == "paper" && cc == "rock" ||
            hc == "rock" && cc == "scissor") {
            humanScore++;
            console.log("Therefore You win, Your score is " + humanScore)
        }
        else {
            computerScore++;
            console.log("Therefore Computer wins Computer's score is " + computerScore);
        }
        console.log("=========================");
    }

    console.log("At the end of round Your score: " + humanScore + " Computer Score: " + computerScore);
    if (humanScore > computerScore) {
        console.log("You are winner");
    }
    else if (computerScore > humanScore) {
        console.log("Computer is winner");
    }
    else {
        console.log("DRAW");
    }

}
function getComputerChoice() {
    let x = Math.floor(Math.random() * 3 + 1);
    if (x == 1) {
        return "rock";

    }
    else if (x == 2) {
        return "paper";
    }
    else {
        return "scissor";
    }
}

function getHumanChoice() {
    let yourChoice = prompt("Rock Paper or Scissor ?", "");
    return yourChoice;

}
playGame();




