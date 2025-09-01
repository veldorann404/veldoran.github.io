let todoList = [];

function validateForm() {
  const todoInput = document.getElementById("todo-Input").value.trim();
  const dateInput = document.getElementById("date-input").value;

  if (todoInput === "" || dateInput === "") {
    alert("Please enter a todo item.");
  } else {
    addTodo(todoInput, dateInput);
    document.getElementById("todo-Input").value = "";
    document.getElementById("date-input").value = "";
  }
}

function addTodo(todo, date) {
  const todoItem = {
    task: todo,
    date: date,
  };
  todoList.push(todoItem);
  displayTodos();
}

function displayTodos() {
  const todoListElement = document.getElementById("todo-list");
  todoListElement.innerHTML = ""; // Clear the list before displaying

  // Loop through the todoList array and create list items
  todoList.forEach((item, index) => {
    todoListElement.innerHTML += `
            <li>
                <span class="todo-item">${item.task} - ${item.date}</span>
                <button class="delete-btn" onclick="deleteTodo(${index})">Delete</button>
            </li>
        `;
  });
}

function deleteTodo(index) {
  todoList.splice(index, 1); // Remove the todo from the list
  displayTodos(); // Refresh the displayed list
}

function clearTodos() {
  todoList = []; // Clear the todoList array
  displayTodos(); // Refresh the displayed list
}
