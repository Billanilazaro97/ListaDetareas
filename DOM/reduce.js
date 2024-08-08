("--------------------------------------- CLASE REDUCE -----------------------------");

// El método reduce() aplica una función a un acumulador y a cada valor de una array (de izquierda a derecha) para reducirlo a un único valor. Osea que ejecuta una función reductora sobre cada elemento de un array y lo que temrina por devolver es un unico valor

//El método .reduce() nos permite recorrer el arreglo y obtener un resultado reducido en base a cada elemento del arreglo.

const array1 = [1, 2, 3, 4];
const reducer = (acumulador, valorInicial) => acumulador + valorInicial;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

//Ejemplo: Sumar todos los valores de un array
var total = [0, 1, 2, 3].reduce(function (a, b) {
  return a + b;
});
// total == 6

//Personalmente pienso al metodo Reduce() como una prensa ; osea que con cada vuelta de una palanca hacia abajo, esto necesita un array de numero y un valor inicial que le indicamos nosotros va operando con el valor que acumula asi hasta llegar al definitivo al final!

//forma con for..of

//necesitamos calcular la suma de todos los numeros! ==> const numeros = [3,10, 20, 50];

const numeros = [3, 10, 20, 50];

let total = 0;

for (let numero of numeros) {
  console.log((total += numero));
}

//aca nos muestra como fue cambiando cada numero en cada vuelta,
//pero es muy imperativo esta forma y podriamos hacerlo con el metodo reduce sobre el array original!!

const numeros = [3, 10, 20, 50];
let total = numeros.reduce((acumulador, numero) => {
  //el primer parametro es la funcion reductora la que va a ir actualizando el acumulador y el segundo es el valor inicial
  return acumulador + numero; // terminamos retornando que nuevo valor termina teniendo acumulador
}, 0);

/* ---------------------------------- */

//Reducerefactorizado

const numeros = [3, 10, 20, 50];

const acumular = (acumulador, numero) => acumulador + numero; //la funcion acumular recibe un acumulador y un numero y nos retorna el nuevo valor acumulado
let total = numeros.reduce(acumular); //el 0 en realidad es un valor opcional, ya que si no se pone reduce va a tomar al 3 como valor inicial ya que sabemos los numeros que existen dentro del array, pero si no existieran estos numeros si tendriamos que instanciar el primer numero

//AHORA PENSEMOS...

//si no existieran estos numeros si tendriamos que instanciar el primer numero
const numeros = [];
const acumular = (acumulador, numero) => acumulador + numero;
let total = numeros.length > 0 ? numeros.reduce(acumular) : 0; //estamos invocando a un reduce sin un valor inicial, por eso nos tenemos que asegurar solo si el array tiene elementos

/* -------------------------------------------------------------------------------------------------------- */

let notas = [1, 2, 3, 4, 10, 5];
let sumaDeNotas = 0;

for (let i = 0; i < notas.length; i++) {
  sumaDeNotas += notas[i];
}

console.log(sumaDeNotas); //25

("----------------------------------------------------------");

let notas = [1, 2, 3, 4, 10, 5];

let sumaDeNotas = notas.reduce((total, nota) => total + nota, 0);
// const sumaDeNotas = notas.reduce(function(total, nota) {
//  return total + nota;
// }, 0);

console.log(sumaDeNotas);

/* -------------------------------------------------------------------------------------------------------- */

/* 
SOLO NUMEROS PARES

Dado un arreglo de numeros, como podriamos hacer para crear un nuevo arreglo donde solamente podamos obtener los numeros que son pares. SOlo se puede utilizar metodo .reduce()

Utils: 
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
*/

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let pares = numeros.reduce((acc, numero) => {
  if (numero % 2 == 0) {
    acc.push(numero);
  }
  return acc;
}, []);

console.log(pares);

/* -------------------------------------------------------------------------------------------------------- */

/* 
ARREGLO DE NUMEROS

Dado un array de numeros, la idea puntual, es obtener un nuevo array con todos los dobles de cada numero, pero solo usando el metodo .reduce()

Utils: 
const numeros = [41, 71, 88, 19, 3, 65];
*/

const numeros = [41, 71, 88, 19, 3, 65];

const acumularDobles = (acumulador, numero) => {
  acumulador.push(numero * 2); //agregamos el doble del elemento dentro del array utilizando metodo push
  return acumulador; //por ultimo pedimos que retorne el valor actualizado de acumulador
};
const dobles = numeros.reduce(acumularDobles, []); //el primer parametro es una funcion acumuladora que ahora vamos a pasar a escribir y el valor inicial es el nuevo array que nos piden en nuestro ejercicio

//pero de esta forma utilizando el metodo push() lo que hacemos es mutar el valor del acumulador!

const numeros = [41, 71, 88, 19, 3, 65];

const acumularDobles = (acumulador, numero) => {
  return [...acumulador, numero * 2]; //lo que hacemos aca es retornar una copia del array agregando al final el nuevo valor calculado
};
const dobles = numeros.reduce(acumularDobles, []);

/* ----------------------------------------- */

/* SumArray()
En este ejercicio, deberás crear una Función sumArray que acepte un Arreglo de números y devuelva la suma de todos ellos. Usá este código para testear tu Función:
sumArray([1,2,3]) // 6
sumArray([10, 3, 10, 4]) // 27
sumArray([-5,100]) // 95
*/

function sumar(arreglo) {
  let fin = arreglo.length - 1;
  let total = 0;
  while (fin >= 0) {
    total += arreglo[fin];
    fin--;
  }
  console.log(total);
}

sumar([-5, 100]);

function sumArray(arr) {
  let total = arr.reduce((total, num) => (total += num), 0);
  console.log(total);
  return total;
}

sumArray([1, 2, 3]); // 6
sumArray([10, 3, 10, 4]); // 27
sumArray([-5, 100]); // 95

/* 
Simulación Del Array.Join()
En este ejercicio deberás crear una Función llamada join que reciba un Arreglo y simule el comportamiento del método Array.join().

⚠️Importante: No podés usar el método Array.join() original.

Por ejemplo: 
*/

join(["h", "o", "l", "a"]); // debe retornar el string "hola".

join(["c", "h", "a", "u"]); // debe retornar el string "chau".

function join(arreglo) {
  let fin = arreglo.length - 1;
  let total = "";
  let index = 0;
  while (index <= fin) {
    total += arreglo[index];
    index++;
  }
  return total;
}
join(["h", "o", "l", "a"]);

function join(arr) {
  let palabra = arr.reduce((palabra, valor) => (palabra += valor), "");
  return palabra;
}

join(["h", "o", "l", "a"]);

/*
   Ordenando elementos
   
   Debés crear una función llamada "ordenado" que reciba un arreglo como parámetro y devuelva otro con los números ordenados de mayor a menor.
   
   Ejemplo: 
   
   ordenado([1,2,0,25,1,3,97,1]) debe retornar [97, 25, 3, 2, 1, 1, 1, 0]
    ordenado([1,89, 20, 45, 105, 30, 2, 67]) => [105, 89, 67, 45, 30, 20, 2, 1]
   */

const ordenado = (array) => {
  return array.sort((a, b) => {
    return b - a;
  });
};

ordenado([1, 2, 0, 25, 1, 3, 97, 1]);
