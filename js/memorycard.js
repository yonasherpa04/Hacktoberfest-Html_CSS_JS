const ICONS = [
  "🍎",
  "🍌",
  "🍇",
  "🍒",
  "🍓",
  "🍍",
  "�",
  "🍑",
  "🍉",
  "🍋",
  "🍊",
  "🥥",
];

const gameBoard = document.getElementById("gameBoard");
const movesCount = document.getElementById("movesCount");
const timeElapsed = document.getElementById("timeElapsed");
const pairsFoundEl = document.getElementById("pairsFound");
const restartBtn = document.getElementById("restartBtn");
const difficultySelect = document.getElementById("difficultySelect");
const winModal = document.getElementById("winModal");
const finalMoves = document.getElementById("finalMoves");
const finalTime = document.getElementById("finalTime");

let totalPairs = 8;
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let hasFlippedCard = false;
let moves = 0;
let pairsFound = 0;
let timer = null;
let seconds = 0;
let started = false;

function setDifficulty(value) {
  if (value === "easy") totalPairs = 4;
  else if (value === "medium") totalPairs = 8;
  else if (value === "hard") totalPairs = 12;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function createBoard() {
  // reset state
  clearInterval(timer);
  timer = null;
  seconds = 0;
  started = false;
  moves = 0;
  pairsFound = 0;
  hasFlippedCard = false;
  lockBoard = false;
  firstCard = null;
  secondCard = null;

  movesCount.textContent = `Moves: ${moves}`;
  timeElapsed.textContent = `Time: ${seconds}s`;
  pairsFoundEl.textContent = `Pairs Found: ${pairsFound}`;

  const icons = ICONS.slice(0, totalPairs);
  const cardFaces = shuffle([...icons, ...icons]);

  gameBoard.innerHTML = "";

  const cols = Math.ceil(Math.sqrt(totalPairs * 2));
  gameBoard.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

  cardFaces.forEach((icon, idx) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("tabindex", "0");
    card.dataset.icon = icon;

    const inner = document.createElement("div");
    inner.classList.add("card-inner");

    const front = document.createElement("div");
    front.classList.add("card-face", "card-front");
    front.textContent = "?";

    const back = document.createElement("div");
    back.classList.add("card-face", "card-back");
    back.textContent = icon;

    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);

    // click handler
    card.addEventListener("click", onCardClick);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        card.click();
      }
    });

    gameBoard.appendChild(card);
  });
}

function startTimer() {
  if (started) return;
  started = true;
  timer = setInterval(() => {
    seconds++;
    timeElapsed.textContent = `Time: ${seconds}s`;
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
  timer = null;
  started = false;
}

function onCardClick(e) {
  const card = e.currentTarget;
  if (lockBoard) return;
  if (card === firstCard) return; // clicking same card
  if (card.classList.contains("matched")) return;

  card.classList.add("flipped");

  if (!started) startTimer();

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = card;
    return;
  }

  secondCard = card;
  moves++;
  movesCount.textContent = `Moves: ${moves}`;

  checkForMatch();
}

function checkForMatch() {
  const isMatch = firstCard.dataset.icon === secondCard.dataset.icon;
  if (isMatch) {
    disableMatched();
    pairsFound++;
    pairsFoundEl.textContent = `Pairs Found: ${pairsFound}`;
    if (pairsFound === totalPairs) {
      // win
      stopTimer();
      finalMoves.textContent = moves;
      finalTime.textContent = `${seconds}s`;
      winModal.classList.add("active");
    }
    resetTurn();
  } else {
    unflipCards();
  }
}

function disableMatched() {
  firstCard.classList.add("matched");
  secondCard.classList.add("matched");
  // prevent future clicks
  firstCard.removeEventListener("click", onCardClick);
  secondCard.removeEventListener("click", onCardClick);
}

function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");
    resetTurn();
  }, 700);
}

function resetTurn() {
  [hasFlippedCard, lockBoard] = [false, false];
  firstCard = null;
  secondCard = null;
}

function restartGame() {
  winModal.classList.remove("active");
  createBoard();
}

function closeModal() {
  winModal.classList.remove("active");
  restartGame();
}

window.closeModal = closeModal;

restartBtn.addEventListener("click", restartGame);
difficultySelect.addEventListener("change", (e) => {
  setDifficulty(e.target.value);
  restartGame();
});

setDifficulty(difficultySelect.value);
createBoard();
