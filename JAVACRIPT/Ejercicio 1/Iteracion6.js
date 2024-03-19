// 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.

for (a = 0; a <= 9; a++) {
  console.log("1.1 El valor de a es:", a);
}

// 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo
// cuando el resto del numero dividido entre 2 sea 0.
for (a = 0; a <= 9; a++) {
  if (a % 2 == 0) {
    console.log("1.2 Numeros que divididos entre 2 su resto sea 0:", a);
  }
}
// 1.3 Crea un bucle para conseguir dormir contando ovejas.
// Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
// Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle
// y cambia el mensaje en la décima vuelta a 'Dormido!'.

for (a = 1; a <= 10; a++) {
  if (a < 10) {
    console.log("Intentando dormir 🐑");
  } else {
    console.log("Dormido!");
  }
}
