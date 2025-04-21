const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll(".choice");
const resultText = document.getElementById("resultText");
const playerScoreEl = document.getElementById("playerScore");
const computerScoreEl = document.getElementById("computerScore");

let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const playerChoice = button.dataset.choice;
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const result = getResult(playerChoice, computerChoice);

    if (result === "win") playerScore++;
    else if (result === "lose") computerScore++;

    updateUI(playerChoice, computerChoice, result);
  });
});

function getResult(player, computer) {
  if (player === computer) return "draw";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) return "win";
  return "lose";
}

function updateUI(player, computer, result) {
  const messages = {
    win: `🎉 You WIN! ${player} beats ${computer}`,
    lose: `😢 You LOSE! ${computer} beats ${player}`,
    draw: `😐 It's a DRAW! You both chose ${player}`
  };
  resultText.textContent = messages[result];
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
}
