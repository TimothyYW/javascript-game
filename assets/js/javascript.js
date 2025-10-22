let userScore = 0;
let computerScore = 0;

const userScoreSpan = document.getElementById("human-score");
const computerScoreSpan = document.getElementById("bot-score");

const resultDiv = document.querySelector(".result p");

const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const scissorDiv = document.getElementById("scissor");

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
}

function main() {
    rockDiv.addEventListener("click", () => game("rock"));
    paperDiv.addEventListener("click", () => game("paper"));
    scissorDiv.addEventListener("click", () => game("scissor"));
}

main();