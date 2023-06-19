import { addTask } from "./addTask.js";
import { modifyTask } from "./modifyTask.js";
import { getTasks, saveTasks } from "./taskStorage.js";

const addButton = document.querySelector('.add__button');
const modifyButton = document.querySelector('.modify__button');
const cancelButton = document.querySelector('.cancel__button');

const errorPopup = document.querySelector('.error__popup');
const modifyModal = document.querySelector('.modify__modal');

const newTask = document.getElementById('add__input');
const taskContainer = document.querySelector('.tasks__container');

let taskList = [];

const showErrorPopup = () => {
  errorPopup.style.display = 'block';
  setTimeout(() => {
    errorPopup.classList.add('slide-out');
    setTimeout(() => {
      errorPopup.style.display = 'none';
      errorPopup.classList.remove('slide-out');
    }, 200);
  }, 3000);
};

const handleAddTask = () => {
  const taskElement = newTask.value.trim();
  if (taskElement.length === 0) {
    showErrorPopup();
  } else {
    console.log(taskList);
    const newTaskObject = {
      text: newTask.value,
      id: taskList.length + 1,
      done: false
    };
    taskList.push(newTaskObject);
    taskContainer.appendChild(addTask(taskElement, taskList.length));
    newTask.value = "";
  }
};

const handleModifyTask = (e) => {
  const targetTask = e.target.parentElement.parentElement.parentElement.dataset.info;
  modifyTask(targetTask);
};

const handleCancelModification = () => {
  modifyModal.classList.remove('modal--visible');
};

const loadTasks = () => {
  try{
    if (getTasks() !== null) {
      taskList = getTasks();
      taskList.forEach((element) => {
        const task = addTask(element.text, element.id);
        if (element.done) {
          task.classList.add('task--done');
          const input = task.firstElementChild;
          input.checked = true;
        }
        taskContainer.appendChild(task);
      });
    }
  }catch(TypeError){
    console.log("No hay tareas preguardadas");
  }
  
};

const handleWindowUnload = () => {
  saveTasks(taskList);
};

addButton.addEventListener('click', handleAddTask);
modifyButton.addEventListener('click', handleModifyTask);
cancelButton.addEventListener('click', handleCancelModification);
document.addEventListener("DOMContentLoaded", loadTasks);
window.addEventListener("beforeunload", handleWindowUnload);

export { taskList, modifyModal, errorPopup, showErrorPopup };
