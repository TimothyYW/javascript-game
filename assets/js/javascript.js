let userScore = 0;
let computerScore = 0;

let gameActive = true;

const userScoreSpan = document.getElementById("human-score");
const computerScoreSpan = document.getElementById("bot-score");

const resultDiv = document.querySelector(".result p");

const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const scissorDiv = document.getElementById("scissor");

const rulesDialog = document.getElementById("rules-dialog");
const showRulesButton = document.getElementById("show-rules");
const closeRulesButton = document.getElementById("close-rules");
const actionMessage = document.getElementById("action-message");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    userScore++;
    userScoreSpan.textContent = userScore;
    resultDiv.textContent = `${userChoice} beats ${computerChoice}. You win! 🏆`;
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScoreSpan.textContent = computerScore;
    resultDiv.textContent = `${computerChoice} beats ${userChoice}. You lose! 😢`;
}

function draw(userChoice, computerChoice) {
    resultDiv.textContent = `${userChoice} equals ${computerChoice}. It's a draw! 🤝`;
}

function game(userChoice) {
    if (!gameActive) return;
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissor":
        case "scissorrock":
            lose(userChoice, computerChoice);
            break;
        default:
            draw(userChoice, computerChoice);
    }

    const totalMoves = userScore + computerScore + (userChoice === computerChoice ? 1 : 0);
    if (totalMoves === 1) {
        createRestartButton();
    }

    checkEndGame();
}

function checkEndGame() {
    if (userScore >= 10) {
        endGame("You");
    } else if (computerScore >= 10) {
        endGame("Computer");
    }
}

function endGame(winner) {
    gameActive = false;
    resultDiv.textContent = `${winner} reached 10 points. ${winner} wins the game!`;
    createRestartButton();
}

function createRestartButton() {
    if (document.getElementById("restart-button")) return;

    actionMessage.innerHTML = "";
    const restartButton = document.createElement("button");
    restartButton.id = "restart-button";
    restartButton.textContent = "Restart?";
    restartButton.classList.add("restart-button");
    actionMessage.appendChild(restartButton);

    restartButton.addEventListener("click", resetGame);
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    userScoreSpan.textContent = userScore;
    computerScoreSpan.textContent = computerScore;
    resultDiv.textContent = "";
    actionMessage.innerHTML = "Make your move!";
    gameActive = true;
}

function main() {
    
showRulesButton.addEventListener("click", () => {
  rulesDialog.showModal();
});


closeRulesButton.addEventListener("click", () => {
  rulesDialog.close();
});
    rockDiv.addEventListener("click", () => game("rock"));
    paperDiv.addEventListener("click", () => game("paper"));
    scissorDiv.addEventListener("click", () => game("scissor"));
}

main();