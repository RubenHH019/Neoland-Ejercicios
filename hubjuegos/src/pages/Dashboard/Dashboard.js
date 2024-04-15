import { initControler, getInfo } from "../../utils";
import "./Dashboard.css";
const template = () => `
  <div id="containerDashboard">
    <ul>
      <li>
        <figure id="navegatePokemon">
          <img
            src="https://res-console.cloudinary.com/dw8ofhou9/thumbnails/v1/image/upload/v1713141345/RGFjb180OTk5OTIyX3RxdHAwMQ==/grid_landscape"
            alt="go to page pokemon"
          />
          <h2>POKEDEX</h2>
        </figure>
      </li>
      <li>
        <figure id="navegateMemory">
          <img
            src="https://cdn-icons-png.freepik.com/512/6168/6168842.png"
            alt=" go to tic tac toe"
          />
          <h2>MEMORY GAME</h2>
        </figure>
      </li>
      
    </ul>
  </div>
`;
const addEventListeners = () => {
  const navigatePokemon = document.getElementById("navegatePokemon");
  navigatePokemon.addEventListener("click", () => {
    initControler("Pokemon");
  });
  const navigateMemory = document.getElementById("navegateMemory");
  navigateMemory.addEventListener("click", () => {
    initControler("Memory");
  });
};

export const printTemplateDashboard = () => {
  /** Como siempre las paginas se renderizan en el main por lo cual inyectamos el template en el contenedor del main */
  document.querySelector("main").innerHTML = template();

  /** Para la nav, que la habiamos ocultado en el login, la volvemos a renderizar cambiandole el display de none a flex */
  document.querySelector("nav").style.display = "flex";

  /** metemos los escuchadores de la pagina */
  addEventListeners();
  getInfo();
};
