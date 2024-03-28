//TODO Crear una función que calcule un promedio.

const numbers = [12, 21, 38, 5, 45, 37, 6];
const otraPrueba = [24, 56, 19, 1, 85, 25];
function average(promedio) {
  let calculo = 0;
  let result = 0;
  for (i = 0; i < promedio.length; i++) {
    calculo += promedio[i];
  }
  result = calculo / promedio.length;
  return result;
}

const resultadoPromedio = average(numbers);
console.log(resultadoPromedio);
const resultadoPromedio2 = average(otraPrueba);
console.log(resultadoPromedio2);

//!-------------------APUNTES EXPLICATIVOS-------------------
// let numero1 = 4;
// let numero2 = 5;
// let numero3 = 48;
// let numero4 = 10;

// function sumar(a, b) {
//   return a + b;
// }
// let r = sumar(numero2, numero3);
// console.log(r);
// console.log(sumar(numero1, numero4));

// let x = sumar(2, 5);
// console.log(x);
// console.log(sumar(2, 5));
// function comentario(c) {
//   return "Hola chicos";
// }

// console.log(comentario());

// function sum(numberOne, numberTwo) {
//   if (numberTwo > numberOne) {
//     return numberTwo;
//   } else {
//     return numberOne;
//   }
// }
// let w = sum(200, 450);
// console.log(w);
// console.log(sum(200, 450));
// console.log(sum(2, 45));

// console.log(sum(20, 50));
// console.log(sum(2, 0));

// const p = 3;
// const u = 5;
// console.log(sum(p, u));
// function nombreFuncion(parametro) {
//   l = parametro + 1;
//   return l;
// }
// console.log(p);

// let f = nombreFuncion(p);
// console.log(f);
// console.log(nombreFuncion(p));
// console.log(p);
