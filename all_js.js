
const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const dueInput=document.getElementById("task-due");
const list = document.getElementById("task-list");
const count = document.getElementById("task-count");
const filterButtons=document.querySelectorAll(".filter");

let tasks = loadTasks();
let currentFilter ="all";

function loadTasks(){
    try{
        return JSON.parse(localStorage.getItem("tasks"))||[];
    }catch{
        return[];
    }
}

function saveTasks(){
    localStorage.setItem("tasks",JSON.stringify(tasks));
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const text.
})
const taskForm =document.getElementById("task-form");
const taskDesc =document.getElementById("task-desc");
const tableBody = document.getElementById("table-body");


let counter = 0;

function submitHandler(event){
    event.preventDefault();
    counter ++;
    const tr = document.createElement("tr");
    const td =document.createElement("td");
    tr.appendChild(td);
    tableBody.appendChild(tr);
    td1.innerText=counter;
    td2.innerText=taskDesc.value;
}

taskDesc.addEventListener("submit",submitHandler);