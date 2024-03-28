let a = "Hola";
let b = "Manolo";
let e = 19;
typeof b;
console.log("🚀 ~ typeof(b);:", typeof b);
c = a.length += b.length;
console.log(e.length);
console.log(c);
const d = [e, a];
d[1] = d[1].length;
console.log("🚀 ~ d[1]:", d[1]);

console.log(d);
console.log(isNaN(a));
let s = 0;
for (i = 0; i < d.length; i++) {
  if (isNaN(d[i]) == true) {
    s = d[i].length;
  } else {
    s += d[i];
  }
  console.log(s);
}
console.log(s);

function intento(datos) {
  sumarString = 0;
  for (i = 0; i < datos.length; i++) {
    sumarString += datos[i].length;
  }
  return sumarString;
}

const sucesos = intento(d);
console.log(sucesos);

let rm = "Barbacoa";
let dt = 7;

if (String === typeof rm) {
  let sac = rm.length;
  console.log(sac);
} else {
  console.log("False");
}
Number;
typeof rm && String && console.log("Cierto");

if (typeof rm && String) {
  console.log("Sigue siendo cierto");
} else {
  console.log("Da error por la putisima cara");
}

//! SINTAXIS DE UNA FUNCIÓN
let parametro1;
let parametro2;
function nombreFuncion(parametroComparar1, parametroComparar2) {
  //Codigo de la funcion
  //? return ...
}

let funcion = nombreFuncion(parametro1, parametro2); // let funcion = ...
console.log("🚀 ~ funcion:", funcion);
console.log(
  "🚀 ~ nombreFuncion (parametro1, parametro2);:",
  nombreFuncion(parametro1, parametro2)
);

const arrayCualquiera = ["Manolo", "Paco", "Sergio"];
console.log(arrayCualquiera);
console.log(arrayCualquiera.length);
console.log(arrayCualquiera[0]);
console.log(arrayCualquiera[1]);
console.log(arrayCualquiera[2]);
console.log(arrayCualquiera[0].length);
console.log(arrayCualquiera[1].length);
console.log(arrayCualquiera[2].length);
