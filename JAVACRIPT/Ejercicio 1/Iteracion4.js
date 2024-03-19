// 1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log("1.1 Valor 0 del array:", avengers[0]);

// 1.2 Cambia el primer elemento de avengers a "IRONMAN"
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

avengers[0] = "IRONMAN";
console.log("1.2 Nuevo valor del array:", avengers[0]);

// 1.3 console numero de elementos en el array usando la propiedad correcta de Array.
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

console.log("1.3 Numero de elementos del array:", avengers.length);

// 1.4 Añade 2 elementos al array: "Morty" y "Summer".
// Muestra en consola el último personaje del array
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
for (let i = 0; i < rickAndMortyCharacters.length; i++) {
  console.log(
    "1.4 Los integrantes de la familia son:",
    rickAndMortyCharacters[i]
  );
}
rickAndMortyCharacters.push("Morty", "Summer");
for (let o = 3; o < rickAndMortyCharacters.length; o++) {
  console.log("1.4 Los integrantes añadidos son:", rickAndMortyCharacters[o]);
}

// 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.push("Lapiz Lopez");
rickAndMortyCharacters.pop();
console.log("1.5 El primer dato del array es:", rickAndMortyCharacters[0]);
console.log("1.5 El ultimo dato del array es:", rickAndMortyCharacters[4]);
// 1.6 Elimina el segundo elemento del array y muestra el array por consola.
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.push("Lapiz Lopez");
rickAndMortyCharacters.splice(1, 1);
for (i = 0; i < rickAndMortyCharacters.length; i++) {
  console.log("1.6 Los datos del array son:", rickAndMortyCharacters[i]);
}
