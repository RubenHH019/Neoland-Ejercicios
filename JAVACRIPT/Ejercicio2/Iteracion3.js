const numbers = [1, 2, 3, 5, 45, 37, 58];
const prueba2 = [35, 65, 78, 90, 12];

function sumAll(numeros) {
  let operacion = 0;

  for (i = 0; i < numeros.length; i++) {
    operacion += numeros[i];
  }
  return operacion;
}

const resultadoSum = sumAll(numbers);
console.log(resultadoSum);

const resultadoSum2 = sumAll(prueba2);
console.log(resultadoSum2);
