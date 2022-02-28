let input = document.querySelector('#textInput');
let date = new Date();
const addTask = () => {
    let random = Math.floor(Math.random() * 100000000);
    if (input.value == "") {
        return;
    }
    let task = document.createElement('div');
    task.classList.add('task');
    task.classList.add(random);
    task.innerHTML += `
        <input onclick='checkTask(${random})' type="checkbox" name="checker" id="checker">
        <p id="taskContent">${input.value}</p>
        <i onclick='editTask(${random})' class="fa-solid fa-pen-to-square"></i>
        <i onclick='removeTask(${random})' class="fa-solid fa-trash"></i>
            `;
    document.querySelector('.taskList').appendChild(task);
    input.value = '';
}
const checkTask = (id) => {
    let tasks = document.querySelectorAll('.task');
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].classList.contains(id)) {
            tasks[i].querySelector('#taskContent').classList.toggle('checked');
        }
    }
}
const removeTask = (id) => {
    let tasks = document.querySelectorAll('.task');
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].classList.contains(id)) {
            tasks[i].remove();
        }
    }
}
const editTask = (id) => {
    let tasks = document.querySelectorAll('.task');
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].classList.contains(id)) {
            tasks[i].querySelector('#taskContent').contentEditable = true;
            tasks[i].querySelector('#taskContent').focus();
            tasks[i].querySelector('.fa-solid').classList.toggle('fa-pen-to-square');
            tasks[i].querySelector('.fa-solid').classList.toggle('fa-check');
        }
        if (tasks[i].querySelector('.fa-solid').classList.contains('fa-pen-to-square')) {
            tasks[i].querySelector('#taskContent').contentEditable = false;
        }
    }
}
