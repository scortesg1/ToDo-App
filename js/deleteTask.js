import { taskList } from "./main.js";

function deleteTask(targetTask) {

    // console.log(targetTask);
    let index = taskList.findIndex((task) => {task.id == targetTask});
    let aux = document.getElementById(`no__${targetTask}`);
    taskList.splice(index, 1);
    aux.classList.add('slide-out');
    setTimeout(() => {
        aux.remove();
    }, 300);
    // console.log(taskList);
    
}

export {deleteTask}