const wordsGame = [
  "código",
  "programar",
  "javascript",
  "variables",
  "bucles",
  "condicional",
  "framework",
  "desarrollador",
  "tester",
  "maquetar",
  "junior",
  "servidor",
];
let wordGuess = [];
let wordShow = [];
let wrongLtr = [];
let numTries = 5;
let letter = document.querySelector("#letter");
let button = document.querySelector("btn");
let result = document.querySelector("#result");
let tries = document.querySelector("#tries");
let wrongLetter = document.querySelector("#wrongltr");

function createGame() {
  let randomIndex = Math.random(wordsGame.length - 1);
  let randomWord = wordsGame[randomIndex];
  console.log("🚀 ~ createGame ~ randomWord:", randomWord);
  for (letra of wordShow) {
    wordShow.split("_");
  }

  gameLogic();
}

function gameLogic() {}

function searchLetter() {
  let userLetter = letter.value;
  letter.value = "";
  letter.focus();
}

function endGame() {}
