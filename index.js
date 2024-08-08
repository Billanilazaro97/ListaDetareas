let taskInput = document.getElementById("taskInput");
let addButton = document.getElementById("addButton");
let taskList = document.getElementById("taskList");
let searchInput = document.getElementById("searchInput");


addButton.addEventListener("click", addTask);

function addTask(){
    let tarea = taskInput.value
    if(tarea.trim()){
        let li = document.createElement("li")
        li.textContent = tarea;
        taskList.appendChild(li)
        taskInput.value = ""

    }
}

let body = document.body

body.addEventListener("click", function(e){
    console.log(e.type)
})

taskList.addEventListener(`click`, function(event) {
    if (event.target.tagName === `LI`) {
        taskList.removeChild(event.target);
    }

});


searchInput.addEventListener('input', function() {
    const filter = searchInput.value.toLowerCase();
    const tasks = taskList.getElementsByTagName('li');

    Array.from(tasks).forEach(function(task) {
        const taskText = task.textContent.toLowerCase();
        if (taskText.includes(filter)) {
            task.style.display = '';
        } else {
            task.style.display = 'none';
        }
    });
});





taskInput.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        addTask()
    }
})


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



