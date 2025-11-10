// Rock paper scissor game //

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

document.addEventListener('DOMContentLoaded', function () {

  //Open Instructions for the game
  btnOpenModal.addEventListener('click', openModal);

  //Close instructions for the game
  btnCloseModal.addEventListener('click', closeModal);

  overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
});

// Bot function

function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// Win, lose, and draw condition

/**
 * Win condition for player and computer 
 */

function winCondition(userChoice, computerChoice) {
    userScore++;
    userScoreSpan.textContent = userScore;
    resultDiv.textContent = `${userChoice} beats ${computerChoice}. You win! 🏆`;
}

/**
 * Lose condition for player and computer 
 */

function loseCondition(userChoice, computerChoice) {
    computerScore++;
    computerScoreSpan.textContent = computerScore;
    resultDiv.textContent = `${computerChoice} beats ${userChoice}. You lose! 😢`;
}

/**
 * Draw condition for player and computer 
 */

function drawCondition(userChoice, computerChoice) {
    resultDiv.textContent = `${userChoice} equals ${computerChoice}. It's a draw! 🤝`;
}

// Game functional 

function gameFunction(userChoice) {
    if (!gameActive) return;
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
            winCondition(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissor":
        case "scissorrock":
            loseCondition(userChoice, computerChoice);
            break;
        default:
            drawCondition(userChoice, computerChoice);
    }

    const totalMoves = userScore + computerScore + (userChoice === computerChoice ? 1 : 0);
    if (totalMoves === 1) {
        createRestartButton();
    }

    checkEndGame();
}

// End game condition

/**
 * End game if the player or the computer reach 10 points
 */

function checkEndGame() {
    if (userScore >= 10) {
        endGameCondition("You");
    } else if (computerScore >= 10) {
        endGameCondition("Computer");
    }
}

/**
 * End game once endgame condition met 
 */

function endGameCondition(winner) {
    gameActive = false;
    resultDiv.textContent = `${winner} reached 10 points. ${winner} wins the game!`;
    createRestartButton();
}

// Restard button appear function

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

// Reset game after restart button click

function resetGame() {
    userScore = 0;
    computerScore = 0;
    userScoreSpan.textContent = userScore;
    computerScoreSpan.textContent = computerScore;
    // Restore initial result prompt
    resultDiv.textContent = "Choose";
    actionMessage.innerHTML = "Make your move!";
    gameActive = true;
}

// Add eventlistener

function main() {
    
showRulesButton.addEventListener("click", () => {
  rulesDialog.showModal();
});


closeRulesButton.addEventListener("click", () => {
  rulesDialog.close();
});
        rockDiv.addEventListener("click", () => gameFunction("rock"));
        paperDiv.addEventListener("click", () => gameFunction("paper"));
        scissorDiv.addEventListener("click", () => gameFunction("scissor"));
}

main();