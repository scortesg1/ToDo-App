import { deleteTask } from "./deleteTask.js";
import { taskList, modifyModal } from "./main.js";

function addTask(taskText, taskID) {

    function remove() {
        deleteTask(taskID);
    }

    function edit() {
        modifyModal.dataset.info = task.id;
        modifyModal.classList.add('modal--visible');
    }


    let task = document.createElement('DIV');

    task.classList.add('task');

    task.innerHTML = `<input type="checkbox" name="done" id="task__check">
    <span class="task__text">${taskText}</span>
    <div class="task__buttons">
        <i class="bi bi-pencil-square edit__button"></i>
        <i class="bi bi-trash3 remove__button"></i>
    </div>`;

    task.id = `no__${taskID}`;
    task.dataset.status = "";

    let removeButton = task.querySelector('.remove__button');
    let editButton = task.querySelector('.edit__button');
    let checkButton = task.querySelector('#task__check');
    
    // console.log("index: " + index);

    let element = taskList.find(e => e.id == taskID);

    removeButton.addEventListener('click', remove)

    editButton.addEventListener('click', edit)

    checkButton.addEventListener('input', (e) => {

        if (e.target.checked) {
            task.classList.add('task--done');
            element.done = true;
        } else {
            task.classList.remove('task--done');
            element.done = false;
        }

    });

    return task;

}

export { addTask }