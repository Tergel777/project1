const words = [
  "apple", "river", "blue", "chair", "window", "dream", "cloud", "pencil", "mountain", "dance",
  "robot", "light", "forest", "banana", "tiger", "ocean", "book", "sunset", "whisper", "smile",
  "magic", "shadow", "flame", "snow", "stone", "music", "storm", "garden", "leaf", "mirror",
  "planet", "rainbow", "star", "torch", "castle", "rose", "moon", "tree", "eagle", "wolf",
  "riverbank", "candle", "bridge", "feather", "fire", "wave", "pearl", "frost", "shell", "path",
  "valley", "cave", "hill", "meadow", "ice", "breeze", "echo", "sky", "fog", "spark",
  "glow", "mist", "cliff", "rock", "sand", "flute", "drum", "bell", "lily", "pond",
  "island", "harbor", "sail", "anchor", "reef", "ship", "compass", "map", "trail", "hawk",
  "falcon", "nest", "branch", "bark", "acorn", "blossom", "berry", "corn", "field", "grain",
  "hay", "wheel", "barn", "fence", "rope", "hook", "fishing", "net", "canoe", "log",
  "tent", "camp", "firewood", "lantern", "match", "stream", "brook", "pool", "crystal", "gem",
  "crown", "ring", "coin", "gold", "silver", "metal", "bronze", "armor", "sword", "shield",
  "helmet", "arrow", "bow", "quiver", "giant", "elf", "dwarf", "troll", "fairy", "wizard",
  "potion", "spell", "rune", "portal", "key", "door", "lock", "wall", "floor", "ceiling",
  "expedition", "fantasizing", "colonize", "murder", "pneumonoultramicroscopicsilicovolcanoconiosis"
];

let selectedWord = "";
let guessedLetters = [];
let lives = 7;

const wordDisplay = document.querySelector(".wordDisplay");
const lifeDivs = [
  document.querySelector(".life1"),
  document.querySelector(".life2"),
  document.querySelector(".life3"),
  document.querySelector(".life4"),
  document.querySelector(".life5"),
  document.querySelector(".life6"),
  document.querySelector(".life7")
];
const manDiv = document.querySelector(".man");
const guillotineImg = document.querySelector(".guillotine");

function init() {
  selectedWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
  guessedLetters = [];
  lives = 7;

  updateWordDisplay();
  updateLivesDisplay();
  updateManImage();
  enableAllButtons();
}

function updateWordDisplay() {
  wordDisplay.textContent = selectedWord
    .split("")
    .map(char => guessedLetters.includes(char) ? char : "_")
    .join(" ");
}

function updateLivesDisplay() {
  lifeDivs.forEach((life, index) => {
    life.style.visibility = index < lives ? "visible" : "hidden";
  });
}

function updateManImage() {
  const imageIndex = 7 - lives;
  manDiv.style.backgroundImage = `url("./hangman${imageIndex}.png")`;
}

function enableAllButtons() {
  const buttons = document.querySelectorAll("[class^='button_']");
  buttons.forEach(button => {
    button.style.pointerEvents = "auto";
    button.style.backgroundColor = "#fff";
    button.style.color = "#000";
  });
}

function disableButton(button) {
  button.style.pointerEvents = "none";
  button.style.backgroundColor = "gray";
  button.style.color = "#ccc";
}

function handleGuess(event) {
  const button = event.target;
  const letter = button.textContent.toUpperCase();

  if (guessedLetters.includes(letter)) return;

  guessedLetters.push(letter);

  if (selectedWord.includes(letter)) {
    updateWordDisplay();
  } else {
    lives--;
    updateLivesDisplay();
    updateManImage();
  }

  disableButton(button);
  checkGameOver();
}

function checkGameOver() {
  const won = selectedWord.split("").every(char => guessedLetters.includes(char));

  if (won) {
    manDiv.style.backgroundImage = `url("./pixilart-drawing copy 2.png")`;
    if (guillotineImg) guillotineImg.style.display = "none";

    setTimeout(() => {
      alert("🎉 You won! The word was: " + selectedWord);
      init();
    }, 700);
  }

  if (lives <= 0) {
    manDiv.style.backgroundImage = `URL("./pixilart-drawing copy.png")`;

    setTimeout(() => {
      alert("💀 Game Over! The word was: " + selectedWord);
      init();
    }, 700);
  }
}



function addButtonListeners() {
  const buttons = document.querySelectorAll("[class^='button_']");
  buttons.forEach(button => {
    button.addEventListener("click", handleGuess);
  });
}

addButtonListeners();
init();
