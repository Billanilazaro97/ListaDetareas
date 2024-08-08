("------------------------------CLASE FOR EACH------------------------------");

// El metodo forEach(): ejecuta la funcion indicada una vez por cada elemento del array.

const array = ["a", "b", "c"];

array.forEach((element) => console.log(element));

// output esperado: "a"
// output esperado: "b"
// output esperado: "c"

/* 
NOTA: No hay forma de detener o cortar un bucle forEach() ; si nosotros necesitamos que se produzca este comportamiento, vamos a necesitar un iteración simple!

El bucles forEach() en JS, y en general en muchos lenguajes, es un bucle que simplemente recorre los objetos de un array!
*/

/* --------------------------------------------------------------------------------- */

const array = ["a", "j", "f", "k"];

array.forEach(function (element, index, arreglo) {
  console.log(element);
  console.log(index);
  console.log(arreglo);
});

//aca lo que estamos mandando a imprimir en la consola es el elemento, la posicion y el arreglo en total!

/* ------------------------------------------------------------------------------------ */

const arreglo = [2, 4, 6, 8];

arreglo.forEach((element) => console.log(element * 2));

/* ------------------------------------------------------------------------------------------ */

/* Tenemos un array de números, y queremos crear un array nuevo con todos los números elevados al cuadrado.
let array = [1, 3, 5] ==> [1, 9, 25] */

let array = [1, 3, 5];

function elevado(array) {
  let newArray = [];
  array.forEach(function (n, i) {
    newArray[i] = n * n;
  });
  return newArray;
}
elevado(array);

/* 
Tenemos un array de números en la variable numbers.
Necesitamos calcular la suma total de todos los números en el array, 
utilizando forEach.
let numbers = [6, 1, 34, 94, 3, 17] ==> 155 */

let numbers = [2, 4, 10, 20]; //=> 36

let sumaTotal = (numero) => {
  //CREAMOS LA VARIABLE sumaTotal y como valor le pasamos una arrow function
  let acumuladora = 0;
  numero.forEach(function (num) {
    //a nuestro parametro numbers le instaciamos el metodo forEach() para que recorra y haga un bucle en todos los elementos del arreglo!
    acumuladora += num;
  });
  return acumuladora;
};
sumaTotal(numbers)


let numbers = [6, 1, 34, 94, 3, 17];

function sumaTotal(numbers) {
    //craemos la funcion le dimos como nombre "sumaTotal", y le passamos un parametro
    let total = 0; // creamos la variable "total" y la estamos utilizando como acumuladora!

    numbers.forEach(function(num){
        //a nuestro parametro numbers le instaciamos el metodo forEach() para que recorra y haga un bucle en todos los elementos del arreglo!
        total += num 
    })
    return total ; //en ultima instancia pedimos que retorne la variable en donde tiene la suma total de todos los elementos!
 }
sumaTotal(numbers);

/* 
Escribir una función llamada soloNumerosPares 
que acepta un array de números 
y retorna un nuevo array 
con solo los números pares que contiene el array original. 
Utilizar forEach para la solución.

let numbers = [6, 1, 34, 94, 3, 17] ==> [6, 34, 94] */

//EL metodo .push() añade uno o mas elementos al final de un array y lo que termina devolviendo es una nueva longitud del array!

const animals = ["perro", "gato", "vaca"];

const count = animals.push("pajaro")
console.log(count);
//output esperado = 4
console.log(animals);
//output esperado = ["perro", "gato", "vaca", "pajaro"] ;

const animales
let numbers = [6, 1, 34, 94, 3, 17];


function soloNumerosPares (array){
    let arregloDePares = [];
    array.forEach(function(num){
        if(num % 2 == 0){
            arregloDePares.push(num)
        }
    })
    return arregloDePares ;
}
soloNumerosPares(numbers)



/* Escribe una función biggest_smallest 
que tome como entrada un arreglo de números, 
y usando .forEach(),
que devuelva un arreglo que contenga el menor número en la posición cero 
y el mayor número en la posición 1. 

let numbers = [6, 1, 34, 94, 3, 17] ==> [1, 94] */

let numbers = [6, 1, 34, 94, 3, 17];

function biggest_smallest (array){
    let mayor = array[0];
    let menor = array[0];
    array.forEach(function(element){
        if(element > mayor){
            mayor = element;
        }
        if(element < menor){
            menor = element
        }
    })
    return [menor, mayor]
}
biggest_smallest(numbers);



/* Manejando dos arreglos

Debés crear una función llamada `arrayHandler` que reciba dos arreglos de igual largo como parámetros y muestre en la consola “Soy {elemento de array 1} y yo soy {elemento de array 2}”.

Ejemplo:

arrayHandler([1,2,3,4], [“h”,”o”,”l”,”a”]) 

debe mostrar: 

Soy 1 y yo soy h
Soy 2 y yo soy o
Soy 3 y yo soy l
Soy 4 y yo soy a
 */

//for loop

let arrayHandler = (array1, array2) => {
    for(let i = 0 ; i < array1.length; i++){
        console.log("Soy " + array1[i] + " y yo soy " + array2[i] + ".")
    }
}
arrayHandler([1,2,3,4], ["h", "o", "l", "a"])

/* --------------------------------------------------------- */

//forEach()

function arrayHandler(array1, array2){
    array1.forEach((i)=>{
        const num = array2[i - 1]
        console.log("Soy " + i + " y yo soy " + num + ".")
    })
}

arrayHandler([1,2,3,4], ["h", "o", "l", "a"]);




