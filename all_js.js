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