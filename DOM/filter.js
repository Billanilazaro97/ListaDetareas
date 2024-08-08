("-----------------CLASE FILTER---------------");
/* 
El metodo Filter() : nos permite filtrar solo los elementos que deseamos y devolverlos en un nuevo array.

Es como una maquina que va agarrando cada elemento y decide si pasa o no al nuevo array, si algun elemento no cuenta con cierta condicion es totalmente descartado!

 El metdo Filter toma una Función que comprueba cada elemento del array para ver si cumple la condición (también llamada predicado). Retorna true si el elemento la cumple o en caso contrario retornará false.

*/

//EJERCICIO SIMPLE:

const ciudades = ["Madrid", "Buenos Aires", "Nueva York"];

const newArray = ciudades.filter((ciudad) => {
  console.log(ciudad);
})("-----------------------------------------------");

const ciudades = ["Madrid", "Buenos Aires", "Nueva York"];

const newArray = ciudades.filter((ciudad) => {
  console.log(ciudad);
  return ciudad.length > 6;
});
console.log(newArray);

/* ------------------------------------------- */

/* 
NUMEROS PARES
Filtrar solamente los numeros pares del siguiente arreglo!

Utils: let numbers = [3, 7, 6, 13, 2, 24, 99];
*/

let numbers = [3, 7, 6, 13, 2, 24, 99];

let numeros = numbers.filter((arr) => {
  if (arr % 2 == 0) {
    return arr;
  }
});
console.log(numeros);

/* 
EJERCICIO:

Pongamos un ejemplo muy sencillo, de la siguiente lista de números, queremos obtener solamente los mayores que 10.

Utils:
let numbers = [1,5,23,4,12,45,78,8,8.9,10,11,3.4,10.1,84,6]


LO QUE PODRIAMOS HACER DE MANERA SIMPLE SERIA LO SIGUIENTE:

*/
//CON FOR LOOP

let numbers = [1, 5, 23, 4, 12, 45, 78, 8, 8.9, 10, 11, 3.4, 10.1, 84, 6];

let numMayores = [];

for (let i = 0; i < numbers.length; i++) {
  let comparador = numbers[i];
  if (comparador > 10) {
    numMayores.push(comparador);
  }
}
console.log(numMayores);

("-----------------------------------");

//CON METODO FILTER

let numbers = [1, 5, 23, 4, 12, 45, 78, 8, 8.9, 10, 11, 3.4, 10.1, 84, 6];

let numMayores2 = numbers.filter((number) => number > 10);
console.log(numMayores2); // => [23, 12, 45, 78, 11, 10.1, 84]

let mayoresOIgualesA5 = [3, 6, 8, 2];
let mayoresOIguales = mayoresOIgualesA5.filter((number) => number >= 5);

console.log(mayoresOIguales);

//callback es una Función que comprueba cada elemento del array para ver si cumple la condición

// En este ejercicio lo que hacemos internamente, recorrer el array y para cada elemento comprobamos si el callback retorna true. Por ultimo retornar un nuevo array con todos los items que pasaron la prueba o en otras palabras devolvieron true!

//OTRAS FORMAS DE UTILIZAR FILTER PARA EL EJERCICIO ANTERIOR

//ES6
//Siempre que una Arrow Function tenga más de una expresión entre sus acciones, es obligatorio poner las llaves. En caso de que querramos retornar algo, debemos usar la keyword return.
let numMayores = numbers.filter((number) => {
  return number > 10;
});
console.log(numMayores);

//sin llaves/ sin return
//Cuando una Arrow Function tiene un solo Parámetro, los paréntesis son opcionales.
//Si las Arrow Functions tienen una sola expresión, se escriben sin las llaves {}). En ese caso, tienen el return implícito y, por lo tanto, podemos evitar usar la keyword return.
let numMayores = numbers.filter((number) => number > 10);
console.log(numMayores);

/* ---------------------------------------- */

//Sintaxis Clásica De una Función:
function nombreEnCamelCase() {
  // Los paréntesis y, luego, se abre una llave para alojar las instrucciones.
  console.log("¡Soy una Función!"); // Bloque de código que se ejecutará luego.
} // Se cierra la llave.

//function(){} => ES5
let numbers = [1, 5, 23, 4, 12, 45, 78, 8, 8.9, 10, 11, 3.4, 10.1, 84, 6];

let numMayores = numbers.filter(function () {
  number > 10;
});
console.log(numMayores);

//return
let numbers = [1, 5, 23, 4, 12, 45, 78, 8, 8.9, 10, 11, 3.4, 10.1, 84, 6];

let numMayores = numbers.filter(function (number) {
  return number > 10;
});
console.log(numMayores);

/* 
EJERCICIO

En esta ocasión queremos obtener la lista de estudiantes aprobados (en Argentina se aprueba con nota 7):

Utils: 
let alumnos = [
    {
      name: 'Alvaro',
      score: 10,
    },
    {
      name: 'Daniel',
      score: 6,
    },
    {
      name: 'Alexys',
      score: 2,
    },
    {
      name: 'Rafa',
      score: 7,
    },
    {
      name: 'Alejandro',
      score: 8,
    },
    {
      name: 'Sofia',
      score: 9,
    }
  ]
*/
let alumnos = [
  {
    name: "Alvaro",
    score: 10,
  },
  {
    name: "Daniel",
    score: 6,
  },
  {
    name: "Alexys",
    score: 2,
  },
  {
    name: "Rafa",
    score: 7,
  },
  {
    name: "Alejandro",
    score: 8,
  },
  {
    name: "Sofia",
    score: 9,
  },
];

let aprobados = alumnos.filter((estudiante) => estudiante.score >= 7);
console.log(aprobados);

//EJERCICIO:

/*

Necesitamos obtener solamente los productos que cuestan menos de $1000, para mostrar las oportunidades de compra!

Utils: 
const productos = [
    {id: 123, nombre:"camisa", precio: 500},
    {id: 456, nombre:"zapatillas", precio: 2000},
    {id: 789, nombre:"pantalon", precio: 1500},
]

*/

const productos = [
  { id: 123, nombre: "camisa", precio: 500 },
  { id: 456, nombre: "zapatillas", precio: 2000 },
  { id: 789, nombre: "pantalon", precio: 1500 },
];

const productosBaratos = productos.filter((producto) => producto.precio < 1000);
console.log(productosBaratos);

/* ------------------------------------------------------------- */

const productos = [
  { id: 123, nombre: "camisa", precio: 500 },
  { id: 456, nombre: "zapatillas", precio: 2000 },
  { id: 789, nombre: "pantalon", precio: 1500 },
];

//Si quisieramos escribir un codigo muchisimo mas limpio y mas claro, podriamos hacer lo siguiente:

const esBarato = (producto) => producto.precio < 1000; //Lo que hacemos es guardar el "predicado" o en otras palabras la funcion callback en otra variable
const productosBaratos = productos.filter(esBarato); // a esa variable que creamos la utilizamos como la condicion de nuestro metodo filter
console.log(esBarato);

/* ------------------------------------------------- */

const productos = [
  { id: 123, nombre: "camisa", precio: 500 },
  { id: 456, nombre: "zapatillas", precio: 2000 },
  { id: 789, nombre: "pantalon", precio: 1500 },
];

const esBarato = (producto) => producto.precio < 1000; //Lo que hacemos es guardar el "predicado" o en otras palabras la funcion callback en otra variable
const esCaro = (producto) => !esBarato(producto);

const productosBaratos = productos.filter(esBarato); // a esa variable que creamos la utilizamos como la condicion de nuestro metodo filter
const productosCaros = productos.filter(esCaro);
console.log(productosBaratos);

/* ---------------------------------------------------------- */

//Vamos a utilizar el metodo filter para sacar los elementos que se repiten en un array.

const numeros = [1, 2, 3, 4, 3, 1];

const numerosUnicos = numeros.filter((numero, posicion, numeros) => {
  return posicion === numeros.indexOf(numero);
});
/* 
Explicacion de los 3 parametros:
numero: hace referencia para cada elemento
posicion: para las posiciones dentro del array
numeros hace referencia al array.

El método indexOf() verifica la posición de un elemento dentro de un Arreglo y nos devuelve su Índice. ⚠️Importante: Si ese elemento no existiera en el Arreglo, nos retornará -1.
*/

/*
Mover ceros a lo último
Debés crear una función llamada `moveZeros` que reciba un arreglo como parámetro y devuelva otro con los números `0` ordenados al final.

Ejemplo: 

moveZeros([false,1,0,1,2,0,1,3,"a"]) debe retornar [false,1,1,2,1,3,"a",0,0]
moveZeros([1,2,0,1,0,1,0,3,0,1]) debe retornar [1,2,1,1,3,1,0,0,0,0] 
*/

//METODO FILTER

const array = [1, 2, 0, 1, 0, 1, 0, 3, 0, 1];

const moveZeros = (arr) => {
  let sinCeros = arr.filter((element) => element !== 0);

  let conCeros = arr.filter((element) => element == 0);

  let resultado = sinCeros.concat(conCeros);

  return resultado;
};
moveZeros(array);

//El método concat() se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array
