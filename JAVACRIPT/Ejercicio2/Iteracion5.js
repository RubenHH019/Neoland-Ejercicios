//TODO Crea una función que reciba por parámetro un array y cuando es un valor number
//TODO lo sume y de lo contrario cuente la longitud del string y lo sume.

const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];

function averageWord(arrayParaComprobar) {
  let sumaArray = 0;

  for (let elementosMixtos of arrayParaComprobar) {
    if (typeof elementosMixtos == "string") {
      // El typeof () devuelve el valor siempre en minuscula por eso : typeof elementosMixtos == "string" y no "String".
      sumaArray += elementosMixtos.length;
    } else {
      sumaArray += elementosMixtos;
    }
  }
  return sumaArray;
}
let sumaTotal = averageWord(mixedElements);
console.log(sumaTotal);
