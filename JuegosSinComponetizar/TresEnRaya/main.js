const board = document.getElementById("game-board"); //gameContainer
const cells = document.querySelectorAll(".cell"); //cell
const resetBtn = document.getElementById("reset"); //
const end = document.getElementById("end");
const winningMessage = document.getElementById("results-message"); //message-container
let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;
const winPatterns = [
  [0, 1, 2], // Fila
  [3, 4, 5], // Fila
  [6, 7, 8], // Fila
  [0, 3, 6], // Columna
  [1, 4, 7], // Columna
  [2, 5, 8], // Columna
  [0, 4, 8], // Diagonal
  [2, 4, 6], // Diagonal
];
for (let i = 0; i < 9; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.addEventListener("click", () => handleCellClick(i));
  board.appendChild(cell);
}

function handleCellClick(index) {
  if (!gameActive || gameBoard[index] !== "") return; // Comprueba si el juego esta activo o si la posición ya esta ocupada, si es asi vuelve.
  // Nuestro turno
  currentPlayer = "X";
  makeMove(index, currentPlayer);
  if (checkWinner()) {
    displayWinner(`${currentPlayer === "X" ? "X" : "O"} ganan!`);
    gameActive = false;
  } else if (gameBoard.every((cell) => cell !== "")) {
    displayWinner("Empate");
    gameActive = false;
  } else {
    //Inicia turno de la maquina
    setTimeout(() => computerMove(), 500);
  }
}

function makeMove(index, player) {
  gameBoard[index] = player;
  const img = document.createElement("img");
  img.src = player === "X" ? "images/X.png" : "images/O.png";
  board.children[index].appendChild(img);
}

function computerMove() {
  currentPlayer = "O";
  let winningMove = findWinningMove(currentPlayer);
  if (winningMove !== -1) {
    makeMove(winningMove, currentPlayer);
  } else {
    let blockingMove = findWinningMove("X");
    if (blockingMove !== -1) {
      makeMove(blockingMove, currentPlayer);
    } else {
      let emptyPositions = gameBoard.reduce((acc, val, index) => {
        if (val === "") acc.push(index);
        return acc;
      }, []);
      let randomIndex = Math.floor(Math.random() * emptyPositions.length);
      let randomMove = emptyPositions[randomIndex];
      makeMove(randomMove, currentPlayer);
    }
  }
  if (checkWinner()) {
    displayWinner(`${currentPlayer === "X" ? "X" : "O"} ganan!`);
    gameActive = false;
  } else if (gameBoard.every((cell) => cell !== "")) {
    displayWinner("Empate");
    gameActive = false;
  } else {
    currentPlayer = "X";
  }
}

function findWinningMove(player) {
  for (const pattern of winPatterns) {
    const count = pattern.reduce(
      (acc, index) => (gameBoard[index] === player ? acc + 1 : acc),
      0
    ); // cuenta cuantos index coinciden
    if (count === 2) {
      const emptyIndex = pattern.find((index) => gameBoard[index] === "");
      if (emptyIndex !== undefined) {
        return emptyIndex; // si coinciden dos posiciones encuentra la tercera libre que permita la victoria
      }
    }
  }
  return -1;
}

function checkWinner() {
  return winPatterns.some((pattern) =>
    pattern.every((index) => gameBoard[index] === currentPlayer)
  ); // comprueba si en las winPatterns hay un patrón que incluya el valor de el jugador actual y lo devuelve
}

function displayWinner(message) {
  winningMessage.innerHTML = `<h2>${message}</h2><button id="newGameButton">New Game</button>`;
  document.getElementById("newGameButton").style.display = "flex";
  document.getElementById("newGameButton").addEventListener("click", newGame);
}

function newGame() {
  // Reset de variables
  currentPlayer = "X";
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;

  winningMessage.innerHTML = "";

  for (let i = 0; i < 9; i++) {
    const cell = board.children[i];

    cell.textContent = "";

    while (cell.firstChild) {
      cell.removeChild(cell.firstChild);
    }
  }
  if (currentPlayer === "O") {
    setTimeout(() => computerMove(), 500);
  }
}
