const computerPlay = () => {
  const arr = ["rock", "paper", "scissor"];
  min = Math.ceil(0);
  max = Math.floor(2);
  return arr[Math.floor(Math.random() * (max - min + 1) + min)];
};

let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundWinner = "tie";
    console.log(roundWinner);
  }
  if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK")
  ) {
    playerScore++;
    roundWinner = "player";
    console.log(roundWinner);
  }
  if (
    (computerSelection === "ROCK" && playerSelection === "SCISSORS") ||
    (computerSelection === "SCISSORS" && playerSelection === "PAPER") ||
    (computerSelection === "PAPER" && playerSelection === "ROCK")
  ) {
    computerScore++;
    roundWinner = "computer";
    console.log(roundWinner);
  }
}

const playerSelection = prompt("choose between rock paper scissor");
const computerSelection = computerPlay();
playRound();

function isGameOver() {
  return playerScore === 5 || computerScore === 5;
}
