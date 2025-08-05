const moles = document.querySelectorAll(".mole");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const resultDisplay = document.getElementById("result");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");

let score = 0;
let timeLeft = 20;
let timerId = null;
let moleTimer = null;
let gameActive = false;

const originalImage = "./ab7ba87f34c5d1d5d8505ed4b88c5e96b7741da1.png";
const clickedImage = "./e9b7f57dac09e6e209bbff520026664691cce52c.png";

// Show a random mole
function randomMole() {
  moles.forEach((mole) => {
    mole.classList.remove("active");
    mole.style.backgroundImage = `none`;
  });

  const index = Math.floor(Math.random() * moles.length);
  const mole = moles[index];
  mole.classList.add("active");
  mole.style.backgroundImage = `url(${originalImage})`;
}

// Start the game
function startGame() {
  if (gameActive) return;

  resetGame();
  gameActive = true;
  resultDisplay.textContent = "";

  timerId = setInterval(() => {
    timeLeft--;
    timeDisplay.textContent = timeLeft;
    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);

  moleTimer = setInterval(randomMole, 700);
}

// Reset everything
function resetGame() {
  clearInterval(timerId);
  clearInterval(moleTimer);
  gameActive = false;

  score = 0;
  timeLeft = 20;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = timeLeft;
  resultDisplay.textContent = "";

  moles.forEach((mole) => {
    mole.classList.remove("active");
    mole.style.backgroundImage = `none`;
  });
}

// End game logic
function endGame() {
  clearInterval(timerId);
  clearInterval(moleTimer);
  gameActive = false;

  moles.forEach((mole) => {
    mole.classList.remove("active");
    mole.style.backgroundImage = `none`;
  });

  resultDisplay.textContent = `Game Over! Your score is ${score}`;
}

// Mole click handler
moles.forEach((mole) => {
  mole.addEventListener("click", () => {
    if (mole.classList.contains("active") && gameActive) {
      score++;
      scoreDisplay.textContent = score;

      mole.style.backgroundImage = `url(${clickedImage})`;
      mole.classList.remove("active");

      setTimeout(() => {
        mole.style.backgroundImage = `none`;
      }, 300);
    }
  });
});

// Buttons
startBtn.addEventListener("click", startGame);
resetBtn.addEventListener("click", resetGame);