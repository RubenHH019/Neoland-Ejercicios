//TODO Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.
let objeto = {};
objeto.Clave = "Valor de la clave";
console.log(objeto);
const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];

function repeatCounter(contarRepetidas) {
  let palabrasRepetidas = {};
  contarRepetidas.forEach((palabra) => {
    if (palabra in palabrasRepetidas) {
      palabrasRepetidas[palabra] += 1;
    } else {
      palabrasRepetidas[palabra] = 1;
    }
    //  (palabra in palabrasRepetidas) ? palabrasRepetidas[palabra] += 1 : palabrasRepetidas[palabra] = 1;
  });
  return palabrasRepetidas;
}

let repetidas = repeatCounter(counterWords);
console.log("🚀 ~  repetidas:", repetidas);
