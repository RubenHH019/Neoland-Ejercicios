import "./Header.css";
import { getUser } from "../../global/state/globalState";
import { changeColorRGB } from "../../utils";
import { initControler } from "../../utils/route";

//!-------------------------------------------------------------------
//? ------------------1) TEMPLATE ------------------------------------
//!-------------------------------------------------------------------

const template = () => `
  <img
    src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/gamers-logo-design-template-be3afbd9f04d8138acb6ef795c8976c7_screen.jpg?ts=1619011391"
    alt="title hub game website (app)"
    class="logo"
  />
  <nav>
    <img
      src="https://res.cloudinary.com/dq186ej4c/image/upload/v1682684561/changeColor_tat29q.png"
      alt=" change to style mode page"
      id="changeColor"
    />
    <img
      src="https://cdn-icons-png.flaticon.com/512/5260/5260498.png"
      alt=" navigate to home app"
      id="buttonDashboard"
    />
    <img
      src="https://i.pinimg.com/564x/b8/c9/9e/b8c99e1eb63169d5a862bbf90b171d28.jpg"
      alt="logout"
      id="buttonLogout"
    />
  </nav>
`;
//!-----------------------------------------------------------------------------------
//? ----------------------- 2 ) Añadir los eventos con sus escuchadores---------------
//!-----------------------------------------------------------------------------------
const addListeners = () => {
  //! ---------------->COLOR CHANGE RANDOM------ evento click del boton de cambio de color
  const changeColor = document.getElementById("changeColor");
  changeColor.addEventListener("click", (e) => {
    /** en este caso lo que hacemos el generar un color y cambiar el stylo del background del body */
    const color = changeColorRGB();
    document.body.style.background = color;
  });

  //! ----------------> DASHBOARD ------------- evento click del boton que nos lleva a los juegos
  const buttonDashboard = document.getElementById("buttonDashboard");
  buttonDashboard.addEventListener("click", (e) => {
    // llamamos al initController con el dashboard para que pinte la pagina del dashboard
    initControler("Dashboard");
  });

  //! ----------------> LOGOUT ----------------
  const buttonLogout = document.getElementById("buttonLogout");
  buttonLogout.addEventListener("click", (e) => {
    const userState = getUser().name;
    const currentUser = localStorage.getItem(userState);
    const parseCurrentUser = JSON.parse(currentUser);
    const updateUser = { ...parseCurrentUser, token: false };
    const stringUpdateUser = JSON.stringify(updateUser);
    localStorage.removeItem(userState);
    sessionStorage.removeItem("currentUser");
    localStorage.setItem(userState, stringUpdateUser);
    initControler("Login");
  });
};
//!-----------------------------------------------------------------------------------
//? ------------------------------ 3) La funcion que se exporta y que pinta-----------
//!-----------------------------------------------------------------------------------
export const PrintTemplateHeader = () => {
  document.querySelector("header").innerHTML = template();
  addListeners();
};
