//! -----------------------------------------------------------------------------------
//?-----------------> INICIALIZACION EN LAZY DEL ESTADO ------------------------------
//! -----------------------------------------------------------------------------------

/** Siempre lo primero que se hace es crear los estados y le damos su valor
 *  inicial antes de modificarlos */

/* este estado de currrentUser es el usuario que se encuenta actualmente logado en la aplicacion
tiene una inicializacion en lazy. Esto quiere decir que mira si tenemos algun valor en le local storage 
si tenemos un valor lo vamos asignar al valor de currentUser sino será un string vacio


ESTO SE HACE PORQUE SI RECARGO LA PAGINA LOS ESTADOS VUELVEN A SU VALOR INCIAL, si no tubieramos esto
si recargo sería "" STRING vacio por lo cual cuando recargo en este caso lo que hace es valorar si en
el sessionStorage existe currentUser y se existir lo setea en este objeto
 */

const currentUser = {
  name: sessionStorage.getItem("currentUser")
    ? sessionStorage.getItem("currentUser")
    : "",
};

/*------------------> este estado se encarga de incluir los datos de user con sus favoritos y es
practicamente igual que lo que se settea en el local storage para guardar sus favoritos
 */

let userData = localStorage.getItem(currentUser.name)
  ? JSON.parse(localStorage.getItem(currentUser.name))
  : {
      name: "",
      token: false,
      fav: [],
    };
//! ------------------> DATA GLOBAL DE LA APLICACION------------
// En este caso es donde se van a guardar los datos que vengan de las API y que vamos a utilizarlos en
// los diferentes apartados de la app.
const dataGlobal = {
  pokemon: [],
  ricky: [],
};
//! -------------------- SET Y GET  currentUser ----------------
//- Las funciones GET: nos darian el valor actual que tiene el estado.
//- Las funciones SET: setean el valor que recibe como parametro en el estado que modifica.

export const setUser = (username) => {
  currentUser.name = username;
};

export const getUser = () => {
  return currentUser;
};

//! -------------------- SET y GET dataGlobal----------------

export const setData = (data, page) => {
  switch (page) {
    case "Pokemon":
      dataGlobal.pokemon = data;

      break;

    default:
      break;
  }
};

export const getData = (page) => {
  switch (page) {
    case "Pokemon":
      return dataGlobal.pokemon;
    default:
      break;
  }
  return dataGlobal;
};

//! -------------------SET y GET  de userData  --------------------------

export const setUserData = (data) => {
  console.log(".....metiendo datos en el contexto");
  userData.fav = data?.fav;
  userData.name = data?.name;
  userData.token = data?.token;
  const stringUser = JSON.stringify(userData);
  localStorage.removeItem(`${currentUser.name}`);
  console.log(userData.name);
  localStorage.setItem(`${currentUser.name}`, stringUser);
};

export const getUserData = () => {
  return userData;
};
