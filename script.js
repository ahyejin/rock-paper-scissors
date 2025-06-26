let count = 0;
const yourButtons = document.querySelectorAll(".yourButtons button");
const computerButtons = document.querySelectorAll(".computerButtons button");
const array = Array.from(computerButtons);
const yourScore = document.querySelector("#yourScore");
const computerScore = document.querySelector("#computerScore");
const mainSection = document.querySelector(".main-section");
const gameCount = document.querySelector(".gameCount")


const yourDiv = document.querySelector(".yourButtons");
const computerDiv = document.querySelector(".computerButtons");

const result = document.querySelector(".result");
const finalResult = document.querySelector(".finalResult");

const body = document.querySelector("body");



yourDiv.addEventListener("click", function (event) {
    yourButtons.forEach((item) => item.classList.remove("active"));
    event.target.classList.add("active");
    let randomIndex = Math.floor(Math.random() * 3);
    array[randomIndex].click();
    playground(event.target.textContent, array[randomIndex].textContent);
    count++;
    gameCount.textContent = `GAME COUNT ${count}/10`;
    checkCount(count);


})

computerDiv.addEventListener("click", function (event) {
    computerButtons.forEach((item) => item.classList.remove("active"));
    event.target.classList.add("active");
})
function playground(you, computer) {
    if (you == computer) {
        result.textContent = "";
        result.textContent = "IT'S A TIE"
    }
    else if (you == "Rock" && computer == "Scissor"
        || you == "Paper" && computer == "Rock"
        || you == "Scissor" && computer == "Paper") {
        +(yourScore.textContent)++;
        result.textContent = `${you} Beats ${computer}, You Win`;

    }
    else {
        +(computerScore.textContent)++;
        result.textContent = `${computer} beats ${you}, Computer Wins`;
    }
}
function checkCount(localCount) {
    //result.textContent += "  Game no " + count;
    if (count == 10) {

        mainSection.remove();
        result.textContent = "Final score " + yourScore.textContent + " : " + computerScore.textContent;
        if (+(yourScore.textContent) == +(computerScore.textContent)) {
            finalResult.textContent = "THE TOURNAMENT IS DRAW";
        }
        else if (+(yourScore.textContent) > +(computerScore.textContent)) {
            finalResult.textContent = "YOU WON THE TOURNAMENT";
        }
        else {
            finalResult.textContent = "COMPUTER WON THE TOURNAMENT";
        }

        const button = document.createElement("button");
        button.textContent = "PLAY AGAIN";
        const body = document.querySelector("body");
        body.appendChild(button);
        button.classList.add("playAgain");
        button.addEventListener("click", function () {
            yourScore.textContent = 0;
            computerScore.textContent = 0;
            gameCount.textContent = "GAME COUNT 0/10";
            yourButtons.forEach((item) => item.classList.remove("active"));
            computerButtons.forEach((item) => item.classList.remove("active"));
            result.textContent = "";
            finalResult.textContent = "";
            button.remove();
            body.insertBefore(mainSection, result);
            count = 0;
        })


    }
}




