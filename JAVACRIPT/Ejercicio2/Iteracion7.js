//TODO Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array
//TODO- comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false.

const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];
function finderName(buscarNombre, nombre) {
  let buscadorNombre = buscarNombre.indexOf(nombre);
  let consecuencias =
    buscadorNombre === -1
      ? false
      : { existeNombre: true, posicion: buscadorNombre };
  return consecuencias;
}

let buscador = finderName(nameFinder, "Xabier");
console.log("🚀 ~ buscador:", buscador);

let buscador2 = finderName(nameFinder, "Rodrigo");
console.log("🚀 ~ buscador2:", buscador2);
