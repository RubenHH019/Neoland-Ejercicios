import { getStateMemory, setStateMemory } from "../../global/state/memoryState";
import { generador, generateRandom, timeGenerator } from "../../utils";
import Swal from "sweetalert2";
import "./MemoryGame.css";
const template = () => `
<div id="containerMemory"> 
    <div class="wrapper">
      <div class="stats-c">
        <div id="moves"></div>
        <div id="time"></div>
      </div>
      <div class="game-c"></div>
      <button id="stop" class="hide">Stop Game</button>
    </div>
    <div class="controls-c">
      <div class="portada"><img src="./sourceMemory/portada.jpg"></div>
      <p id="result"></p>
      <button id="start"><img src="./sourceMemory/first.gif"></button>
</div></div>`;

const starGame = () => {
  const startButton = document.getElementById("start");
  const stopButton = document.getElementById("stop");

  startButton.addEventListener("click", () => {
    setStateMemory("interval", setInterval(timeGenerator, 1000));
    Swal.fire({
      position: "center",
      title: "MUCHA MIERDA!!!",
      imageUrl:
        "https://www.cinepremiere.com.mx/wp-content/uploads/2020/10/cine.gif",
      imageHeight: 300,
      imageAlt: "A tall image",
      showConfirmButton: false,
      timer: 1000,
    });
    setTimeout(() => {
      setStateMemory("movesCount", 0);
      setStateMemory("seconds", 0);
      setStateMemory("minutes", 0);
      const controls = document.querySelector(".controls-c");
      controls.classList.add("hide");
      stopButton.classList.remove("hide");
      startButton.classList.add("hide");

      const moves = document.getElementById("moves");
      moves.innerHTML = `<span>Moves:</span> ${getStateMemory("movesCount")}`;
      init();
    }, 900);
  });

  // --------- BOTON DE STOP  ---------------
  const handleStop = () => {
    const time = document.getElementById("time");
    time.innerHTML = "";
    clearInterval(getStateMemory("interval"));
    const controls = document.querySelector(".controls-c");
    controls.classList.remove("hide");
    stopButton.classList.add("hide");
    startButton.classList.remove("hide");
  };

  setStateMemory("stopGame", handleStop);
  stopButton.addEventListener("click", handleStop);
};

const init = () => {
  const result = document.getElementById("result");
  result.innerText = "";
  setStateMemory("winCount", 0);
  let cardValues = generateRandom();
  generador(cardValues);
};
export const PrintMemoryPage = () => {
  document.querySelector("main").innerHTML = template();
  starGame();
};
