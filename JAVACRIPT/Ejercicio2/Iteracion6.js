//TODO Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados,
//TODO en caso que existan los elimina para retornar un array sin los elementos duplicados.

const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];
function removeDuplicates(duplicados) {
  const sinDuplicados = [];
  for (i = 0; i < duplicados.length; i++) {
    !sinDuplicados.includes(duplicados[i]) && sinDuplicados.push(duplicados[i]);
  }
  return sinDuplicados;
}

let solucion = removeDuplicates(duplicates);
console.log("🚀 ~  solucion :", solucion);
