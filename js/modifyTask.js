import { modifyModal, taskList, showErrorPopup } from "./main.js";

function modifyTask(targetTask) {

    let taskText = document.getElementById('modify__text');
    let taskID = targetTask.slice(4);
    // console.log(taskID)
    let task = document.querySelector(`#${targetTask} .task__text`);

    if(taskText.value.trim().length === 0) {
        showErrorPopup();
    }else{
        task.textContent = taskText.value;
        modifyModal.classList.remove('modal--visible');
        taskList.find(function (element) {
            if(element.id == taskID){
                element.text = taskText.value;
            }
        });
        
        taskText.value = "";
    }
    
}

export {modifyTask}