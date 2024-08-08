("---------------CLASE MAP------------------");

/* 
El METODO MAP, es una pieza fundamental para la programacion funcional!!

Que es lo que hace?
 Crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos. Se puede usar en los arreglos de JAVASCRIPT

 El método map() nos permite devolver un nuevo arreglo de datos partiendo de un arreglo, dicho así, NO CAMBIAMOS los datos del arreglo original, ahora tenemos un nuevo arreglo con los valores que queremos como resultado.

SINTAXIS:

arreglo.map(function(elementoActual, indice, arregloOriginal) {  ... código });

map() recibe como parámetro una función la cual recibe 3 parámetros, el elemento actual, indice del elemento actual y el arreglo original.

Sintaxis
var nuevo_array = arr.map(function callback(currentValue, index, array) {
    // Elemento devuelto de nuevo_array
}[, thisArg])

value: El elemento actual del array que se esta procesando.
index: El elemento actual del array que se esta procesando
array: El array sobre el que se esta produciendo el metodo map
thisArg: ES un valor opcional, podemos usarlo como this al ejecutar la funcion
*/

//EJERCICIOS DE PRUEBA:

/* TRIPLICADOR

Tenemos un arreglo de numeros y necesitamos pasar todos esos numeros elevados a su tercera potencia.

let numeros = [3, 10, 20, 50] => [9, 30, 60, 150]
*/

let numeros = [3, 10, 20, 50];
//el metodo map recibe la funcion transformadora y a su vez, recibe los parametros que va a transformar.
const triplicador = numeros.map(function (numero) {
  return numero * 3;
});
console.log(triplicador);
/* ------------------------------------------------- */
//MULTIPLICADOR
//arrow function
let numeros = [2, 20, 40];

const multiplicador = numeros.map((numero) => numero * 2);
console.log(multiplicador);

/* LISTA DE PRODUCTOS CON DESCUENTOS:

Tenemos una lista de productos y necesitamos aplicarle un 10% de descuento a los produtos que cuestan $10.000 o mas de ese precio
*/
const productos = [
  { id: 123, nombre: "Televisor", precio: 25000 },
  { id: 456, nombre: "Equipo de musica", precio: 5000 },
  { id: 789, nombre: "Sillon", precio: 16000 },
];
//creamos la variable productosConDescuento y le pasamos el metodo MAP
const productosConDescuento = productos.map(function (producto) {
  //con el condicional preguntamos si el precio del producto es menor a 10000 que directamente nos retorne ese producto sin cambios o modificaciones
  if (producto.precio < 10000) {
    return producto;
  }
  //error muy comun con este metodo
  //muchas personas escribirian el codigo de esta manera
  //producto.precio = producto.precio * 0.9
  //lo que estamos haciendo aca es modificar el precio en el array original, esto es lo primero que estamos haciendo mal.
  ("--------------------------------------------------------------------------------");
  //esto lo podemos arreglar retornando un nuevo objeto donde vamos a copiar las propiedades del objeto original, pero le pisamos el precio para que tenga el descuento correspondiente!!
  return {
    ...producto,
    precio: producto.precio * 0.9,
  };
  //ahora tenemos un objeto completamente nuevo el cual creamos copiando la propiedades del objeto original pero le pisamos una propiedad
});
//console.log(productos)//error
console.log(productosConDescuento);

/* 
LISTA DE PRODUCTOS:

Tenemos una lista de productos que comprara un usuario y queremos obtener solamente los nombres de los productos a comprar. 
*/

//Resolviendo con metodo FOR()

const products = [
  { id: "1", name: "Remera", category: "Ropa" },
  { id: "2", name: "Botines de futbol", category: "Zapatillas" },
  { id: "3", name: "Zapatillas", category: "Zapatillas" },
  { id: "4", name: "Camisa", category: "Ropa" },
  { id: "5", name: "Jean", category: "Ropa" },
];

let nameOfProducts = [];

for (let i = 0; i < products.length; i++) {
  nameOfProducts.push(products[i]["name"]); //SE PUEDE HACER CON BRACKET NOTATION Y CON DOT NOTATION
}

console.log(nameOfProducts);

//Resolviendo con metodo MAP()

const products = [
  { id: "1", name: "Remera", category: "Ropa" },
  { id: "2", name: "Botines de futbol", category: "Zapatillas" },
  { id: "3", name: "Zapatillas", category: "Zapatillas" },
  { id: "4", name: "Camisa", category: "Ropa" },
  { id: "5", name: "Jean", category: "Ropa" },
];
let nombreProductos = products.map((producto, index, array) => {
  // Cómo solo queremos los nombres, retornamos "name".
  return producto["name"]; //SE PUEDE HACER CON BRACKET NOTATION Y CON DOT NOTATION
});

console.log(nombreProductos);

("--------------------------------------------------------------------------------------------------");

//reducido con ARROW FUNCTIONS

const products = [
  { id: "1", name: "Remera", category: "Ropa" },
  { id: "2", name: "Botines de futbol", category: "Zapatillas" },
  { id: "3", name: "Zapatillas", category: "Zapatillas" },
  { id: "4", name: "Camisa", category: "Ropa" },
  { id: "5", name: "Jean", category: "Ropa" },
];

//como tenemos un solo parametro le sacamos los parentesis () y como despues de nuestra flecha tenemos solo la opcion de retorno sacamos las llaves {} y el return

let idProductos = products.map((producto) => producto.id);
console.log(idProductos);

//["1", "2", "3", "4", "5"]

/*
CreandoLiving

Escribí una función que tenga dos parámetros, en primer lugar un arreglo de objetos y el nombre de una propiedad.
La función tendrá que devolver un nuevo arreglo, pero solo con los valores que esten dentro de la propiedad recibida.

Ejemplo: 

let comedor = [{ nombre: 'Mesa', precio: 5000 }, { nombre: 'Sillas', precio: 2500 }, { nombre: 'Sillon', precio: 10000 }, { nombre: 'Escritorio', precio: 25000 }]
pluck(productos, 'nombre') => ["Mesa", "Sillas", "Sillon", "Escritorio"]
pluck(productos, ‘precio’) => [5000, 2500, 10000, 25000]
*/

let comedor = [
  { nombre: "Mesa", precio: 5000 },
  { nombre: "Sillas", precio: 2500 },
  { nombre: "Sillon", precio: 10000 },
  { nombre: "Escritorio", precio: 25000 },
];

function creandoLiving(arr, prop) {
  return arr.map((e) => {
    return e[prop];
  });
}
creandoLiving(comedor, "nombre");
creandoLiving(comedor, "precio");

//.push()

let comedor = [
  { nombre: "Mesa", precio: 5000 },
  { nombre: "Sillas", precio: 2500 },
  { nombre: "Sillon", precio: 10000 },
  { nombre: "Escritorio", precio: 25000 },
];

function CreandoLiving(array, prop) {
  let nuevoArray = [];
  for (let i = 0; i < array.length; i++) {
    nuevoArray.push(array[i][prop]);
  }
  return nuevoArray;
}

CreandoLiving(comedor, "precio");

//sin metodo .push()
let comedor = [
  { nombre: "Mesa", precio: 5000 },
  { nombre: "Sillas", precio: 2500 },
  { nombre: "Sillon", precio: 10000 },
  { nombre: "Escritorio", precio: 25000 },
];

function CreandoLiving(array, prop) {
  let nuevo_array = [];
  for (let i = 0; i < array.length; i++) {
    nuevo_array[i] = array[i][prop];
  }
  return nuevo_array;
}
CreandoLiving(comedor, "precio");

/* --------------------------------------------------------------- */

const oneProperty = (array, prop) => {
  let arr = [];
  array.map((value) => {
    arr.push({ [prop]: value[prop] });
  });
  return arr;
};

/* 
En Conclusión:

Cómo podemos ver reducimos nuestro código. 
Ahora es más legible, fácil de entender y simplificado. 

dejo la documentación de MDN por si quieren ver mas ejemplos.
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*/
