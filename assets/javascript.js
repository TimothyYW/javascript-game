let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("human-score");
const computerScore_span = document.getElementById("bot-score");

const scoreBoard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result p");

const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");

function getComputerChoice() {
    const options = ['rock', 'paper', 'scissor'];
    const randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.textContent = userScore;
    result_div.textContent = `${userChoice} beats ${computerChoice}. You win! 🏆`;
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.textContent = computerScore;
    result_div.textContent = `${computerChoice} beats ${userChoice}. You lose! 😢`;
}

function draw(userChoice, computerChoice) {
    result_div.textContent = `${userChoice} equals ${computerChoice}. It's a draw! 🤝`;
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
    rock_div.addEventListener('click', function() {
        game("rock");
    })

    paper_div.addEventListener('click', function() {
        game("paper");
    })

    scissors_div.addEventListener('click', function() {
        game("scissor");
    })
}

main();