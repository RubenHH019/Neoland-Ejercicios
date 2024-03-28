// Función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings
// tenga la misma longitud deberá devolver el primero.

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(vengadores) {
  let resultadoPalabra = "";
  vengadores.forEach((vengador) => {
    resultadoPalabra =
      resultadoPalabra.length < vengador.length ? vengador : resultadoPalabra;
  });
  return resultadoPalabra;
}

const datoLargo = findLongestWord(avengers);
console.log(datoLargo);

//? Imprime en pantalla el tamaño de la string en una posicion del array:

//TODO console.log(avengers[0].length);
//TODO console.log(avengers[1].length);
//TODO console.log(avengers[2].length);
//TODO console.log(avengers[3].length);
//TODO console.log(avengers[4].length);
//TODO console.log(avengers[5].length);
