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