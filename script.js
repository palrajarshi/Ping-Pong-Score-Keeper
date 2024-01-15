const resetBtn = document.getElementById("reset");
const select = document.getElementById("playTo");

let isGameOver = false;
let winningScore = 3;

const player1 = {
  score: 0,
  button: document.getElementById("p1btn"),
  display: document.getElementById("playerOne"),
};
const player2 = {
  score: 0,
  button: document.getElementById("p2btn"),
  display: document.getElementById("playerTwo"),
};

function updateScore(player1, player2) {
  if (!isGameOver) {
    player1.score++;
    if (player1.score === winningScore) {
      player1.display.classList.add("winner");
      player2.display.classList.add("loser");
      isGameOver = true;
      player1.button.disabled = true;
      player2.button.disabled = true;
    }
    player1.display.innerText = player1.score;
  }
}
player1.button.addEventListener("click", () => {
  updateScore(player1, player2);
});
player2.button.addEventListener("click", () => {
  updateScore(player2, player1);
});

function resetDisplay() {
  for (const player of [player1, player2]) {
    player.display.classList.remove("winner", "loser");
    player.score = 0;
    player.display.innerText = 0;
    player.button.disabled = false;
  }
  isGameOver = false;
}
resetBtn.addEventListener("click", resetDisplay);
select.addEventListener("change", () => {
  console.log(select.value);
  winningScore = Number.parseInt(select.value);
  resetDisplay();
});
