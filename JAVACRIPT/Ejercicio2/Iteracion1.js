// la función que tomando dos números como argumento devuelva el más alto.
function sum(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne;
  } else {
    return numberTwo;
  }
}

prueba = sum(300, 60);

comprobacion = sum(15, 19);

console.log(prueba, comprobacion);
