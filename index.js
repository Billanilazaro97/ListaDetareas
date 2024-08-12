// let taskInput = document.getElementById("taskInput");
// let addButton = document.getElementById("addButton");
// let taskList = document.getElementById("taskList");
// let searchInput = document.getElementById("searchInput");


// addButton.addEventListener("click", addTask);

// function addTask(){
//     let tarea = taskInput.value
//     if(tarea.trim()){
//         let li = document.createElement("li")
//         li.textContent = tarea;
//         taskList.appendChild(li)
//         taskInput.value = ""

//     }
// }

// let body = document.body

// body.addEventListener("click", function(e){
//     console.log(e.type)
// })

// taskList.addEventListener(`click`, function(event) {
//     if (event.target.tagName === `LI`) {
//         taskList.removeChild(event.target);
//     }

// });


// searchInput.addEventListener('input', function() {
//     const filter = searchInput.value.toLowerCase();
//     const tasks = taskList.getElementsByTagName('li');

//     Array.from(tasks).forEach(function(task) {
//         const taskText = task.textContent.toLowerCase();
//         if (taskText.includes(filter)) {
//             task.style.display = '';
//         } else {
//             task.style.display = 'none';
//         }
//     });
// });





// taskInput.addEventListener("keydown", function(e){
//     if(e.key === "Enter"){
//         addTask()
//     }
// })


// let formulario = document.getElementByid("formulario");

// formulario.addEventListener("submit", function(e){
//     e.preventDefault()
// })

// input.addEventListener("input", function(e){
//     let valorDelInput = e.target.value
//     console.log("El valor del input es" + valorDelInput)
// })

// window.addEventListener("unload", function(){
//     console.log("La pagina esta a punto de ser descargada")
// })




// function hacerAlgo(callback) {
//     console.log("Haciendo algo...")
//     setTimeout(function() {
//         console.log("Tarea Terminada..")
//         callback()

//     }, 2000);
// }

// function completado(){
//     console.log("La tarea ha sido completada")
// }

// hacerAlgo(completado)








// sessionStorage.setItem("usuario", JSO.stringify(persona))




// let contador = 0;

// function incrementarContador{
//     contador++
//     localStorage.setItem("contador", contador.toString())
// }

// incrementarContador()

// let valorDelContador = localStorage.getItem("contador")

// console.log(valorDelContador)

// let objetoJsonPersona = sessionStorage.getItem("usuario")
// let objetoPersona = JSON.parse(objetoPersona)

// console.log(objetoPersona.mail)

// function sumar(a, b){
//     return a + b
// }

// const multiplicar = function(a, b){
//     return a * b
// }




// const suma = (a, b) => a + b;


// let resultado=suma(2, 5)



// const persona = {
//     name: "Pepe"
//     edad: 30,
//     mail: "pepe@gmail.com"
// }

// let name = persona.name

// console.log(name)

// let { name, age} = persona
// console.log(name)
// console.log(edad)

// let productos = ["smart","monitos","mouse"]





// import { saludar } from "./saludo"
// saludar()


// condicion ? "Lo que sucede si es verdadero" : "Lo que sucede si es falso"

// <---------------------------------------------------------->
// localStorage.setItem(`ùsername`, `usuario1`);
// console.log(localStorage.getItem(`username`));

// console.log(localStorage.getItem(`username`));


// localStorage.setItem("apellido", "billani");

// const usuario = {
//     nombre: "kevin",
//     edad: 25,
//     email: "Lazaro@gmail.com"
// };

// sessionStorage.setItem("usuario", JSON.stringify(usuario));


// let contador = 0;

// function incrementarContador(){
//     contador++;
//     localStorage.setItem("contador", contador.toString());
// }

// incrementarContador()


// let valorDelContador = localStorage.getItem("contador")

// console.log(valorDelContador)


// let objetoJsonPersona = sessionStorage.getItem("usuario")

// let objetoPersona = JSON.parse (objetoJsonPersona)







