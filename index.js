const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("task-btn");
const taskList = document.getElementById("task-list");
const deleteBtn = document.getElementById("dlt-btn");

window.addEventListener("DOMContentLoaded", showTodos);
addBtn.addEventListener("click", addTodo);
window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});

function addTodo() {
  const todo = taskInput.value;

  if (localStorage.getItem("todos") === null) {
    let todos = [];

    todos.push(todo);

    todos = localStorage.setItem("todos", JSON.stringify(todos));
  } else {
    const todos = JSON.parse(localStorage.getItem("todos"));

    todos.push(todo);

    localStorage.setItem("todos", JSON.stringify(todos));

    taskInput.value = "";
  }

  showTodos();
}

function showTodos() {
  const todos = JSON.parse(localStorage.getItem("todos"));

  for (i = 0; i < todos.length; i++) {
    const todo = todos[i];

    let li = document.createElement("li");
    li.innerHTML = `<p>${todo}</p><button id="dlt-btn">x</button>`;

    taskList.appendChild(li);
  }
}
