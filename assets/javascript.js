const userScore = 0;
const computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

const scoreBoard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result");

const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissor");

rock_div.addEventListener('click', function() {
    console.log("You picked rock");
})

paper_div.addEventListener('click', function() {
    console.log("You picked paper");
})

scissors_div.addEventListener('click', function() {
    console.log("You picked scissors");
})  