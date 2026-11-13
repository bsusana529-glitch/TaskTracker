
const taskForm = document.getElementById("task-form");
const taskDesc = document.getElementById("task-desc");
const tableBody = document.getElementById("table-body");

// Area where the "task completed" message is shown
const message = document.createElement("p");
message.id = "task-message";
message.setAttribute("role", "status");
taskForm.after(message);

let tasks = loadTasks();
let messageTimer;

function loadTasks(){
    try{
        return JSON.parse(localStorage.getItem("tasks")) || [];
    }catch{
        return [];
    }
}

function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function showMessage(text){
    message.innerText = text;
    clearTimeout(messageTimer);
    messageTimer = setTimeout(() => {
        message.innerText = "";
    }, 3000);
}

function completeTask(index){
    tasks[index].completed = true;
    saveTasks();
    renderTasks();
    showMessage(`Task #${index + 1} "${tasks[index].text}" completed!`);
}

function renderTasks(){
    tableBody.innerHTML = "";

    tasks.forEach((task, index) => {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");

        td1.innerText = index + 1;
        td2.innerText = task.text;

        if (task.completed){
            td2.style.textDecoration = "line-through";
            td3.innerText = "Done";
        } else {
            const doneButton = document.createElement("button");
            doneButton.type = "button";
            doneButton.innerText = "Complete";
            doneButton.addEventListener("click", () => completeTask(index));
            td3.appendChild(doneButton);
        }

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tableBody.appendChild(tr);
    });
}

function submitHandler(event){
    event.preventDefault();

    const text = taskDesc.value.trim();
    if (text === ""){
        return;
    }

    tasks.push({ text: text, completed: false });
    saveTasks();
    renderTasks();

    taskDesc.value = "";
    taskDesc.focus();
}

taskForm.addEventListener("submit", submitHandler);

renderTasks();
