// 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.

for (a = 0; a < 10; a++) {
  console.log("1.1 El valor de a es:", a);
}

// 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo
// cuando el resto del numero dividido entre 2 sea 0.
for (a = 0; a < 10; a++) {
  if (a % 2 == 0) {
    console.log("1.2 Numeros que divididos entre 2 su resto sea 0:", a);
  }
}
// 1.3 Crea un bucle para conseguir dormir contando ovejas.
// Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
// Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle
// y cambia el mensaje en la décima vuelta a 'Dormido!'.
const dormir = "Vuelta 0";
switch (dormir) {
  case "Vuelta 0":
    console.log("Intentando dormir 🐑");
    break;
  case "Vuelta 1":
    console.log("Intentando dormir 🐑");
    break;
  case "Vuelta 2":
    console.log("Intentando dormir 🐑");
    break;
  case "Vuelta 3":
    console.log("Intentando dormir 🐑");
    break;
  case "Vuelta 4":
    console.log("Intentando dormir 🐑");
    break;
  case "Vuelta 5":
    console.log("Intentando dormir 🐑");
    break;
  case "Vuelta 6":
    console.log("Intentando dormir 🐑");
    break;
  case "Vuelta 7":
    console.log("Intentando dormir 🐑");
    break;
  case "Vuelta 8":
    console.log("Intentando dormir 🐑");
    break;
  case "Vuelta 9":
    console.log("Intentando dormir 🐑");
    break;
  case "Vuelta 10":
    console.log("Dormido!");
    break;
}
