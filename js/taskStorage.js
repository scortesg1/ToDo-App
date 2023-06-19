function saveTasks(tasks){
    
    let arrayJson = JSON.stringify(tasks);

    localStorage.setItem('tasks', arrayJson);

}

function getTasks(){

    let arrayJson = localStorage.getItem('tasks');
    let taskArray = JSON.parse(arrayJson);

    return taskArray;

}

export {saveTasks, getTasks}