import {
  PrintTemplateSpinner,
  CardsPokemons,
  PrintButton,
  PrintSpinner,
} from "../../components";
import { getData } from "../../global/state/globalState";
import { Paginacion, filterPokemon } from "../../utils";
import "./Pokemon.css";

//! ------------------------------------------------------------------------------
//? ------------------------------TEMPLATE INICIAL--------------------------------
//! ------------------------------------------------------------------------------
const template = () => `
  <div id="pokemon">
    <div id="containerFilter">
      <div id="spinnerButtonFilter"></div>
      <div id="filterButton"></div>
      <input
        type="text"
        id="inputPokemon"
        placeholder="Busca tu pokemon favorito"
      />
    </div>
    <div id="paginacion"></div>
    <div id="spinner"></div>
    <div id="galleryPokemon"></div>
  </div>
`;

//! ------------------------------------------------------------------------------
//? ----------------- FUNCION QUE TRAE LOS DATOS DEL CONTEXTO---------------------
//! ------------------------------------------------------------------------------
const dataService = async () => {
  const getDataPokemon = getData("Pokemon");

  const { pokemonData, type } = getDataPokemon;
  document.getElementById("spinner").innerHTML = "";
  PrintButton(type);
  document.getElementById("spinnerButtonFilter").innerHTML = "";
  addListeners();
  Paginacion(pokemonData, 25);
};

//! ------------------------------------------------------------------------------
//? ---------------------------EVENTOS PARA EL INPUT------------------------------
//! ------------------------------------------------------------------------------
const addListeners = () => {
  const inputPokemon = document.getElementById("inputPokemon");
  inputPokemon.addEventListener("input", (e) => {
    /** este evento lo unico que hace es mandar el valor del input y el tipo de filtro que tiene que
     * hacer a la funcion que se encarga de filtrar.
     *
     * Recordar este funcion nos sirve gracias al switch
     * para el filtrado por name como para el filtrado por
     * button con los tipos de pokemons
     */
    filterPokemon(e.target.value, "name");
  });
};

//! ------------------------------------------------------------------------------
//? ---------------------FUNCION QUE SE EXPORTA QUE PINTA LA PAGINA---------------
//! ------------------------------------------------------------------------------
export const PrintPokemonPage = () => {
  document.querySelector("main").innerHTML = template();
  PrintTemplateSpinner();
  PrintSpinner();
  dataService();
};
