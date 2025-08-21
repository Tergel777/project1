// main
const mainContainer = document.getElementById("main");
mainContainer.className = "main";

// header
const text = document.createElement("p");
text.textContent = "To Do List";
text.className = "header_title";
mainContainer.appendChild(text);

// input container
const inputContainer = document.createElement("div");
inputContainer.className = "input_container";
mainContainer.appendChild(inputContainer);

// input
const input = document.createElement("input");
input.className = "input";
inputContainer.appendChild(input);

// add button
const addButton = document.createElement("div");
addButton.className = "add_button";
addButton.textContent = "Add";
inputContainer.appendChild(addButton);

// task list container
const taskContainer = document.createElement("div");
taskContainer.className = "task_container";
mainContainer.appendChild(taskContainer);

// task count container
let totalTaskCount = 0;
let completedTaskCount = 0;

const totalContainer = document.createElement("div");
totalContainer.className = "total_container";
totalContainer.innerText = `${completedTaskCount} of ${totalTaskCount} tasks completed`;
mainContainer.appendChild(totalContainer);

// button click action
const onClick = () => {
  const value = input.value.trim();
  if (value === "") return;

  const item = document.createElement("div");
  item.className = "item_container";

  // complete button
  const completeMark = document.createElement("div");
  completeMark.className = "complete_button";
  completeMark.innerText = "✅";
  item.appendChild(completeMark);

  // task text
  const taskText = document.createElement("p");
  taskText.className = "task_text";
  taskText.innerText = value;
  item.appendChild(taskText);

  // delete button
  const deleteMark = document.createElement("div");
  deleteMark.className = "delete_button";
  deleteMark.innerText = "🗑️";
  item.appendChild(deleteMark);

  // complete action
  completeMark.addEventListener("click", () => {
    const isComplete = taskText.classList.toggle("complete");
    item.classList.toggle("completed_item");
    taskText.style.textDecorationLine = isComplete ? "line-through" : "none";
    updateTaskCount();
  });

  // delete action
  deleteMark.addEventListener("click", () => {
    taskContainer.removeChild(item);
    updateTaskCount();
  });

  // add item to task list
  taskContainer.appendChild(item);
  input.value = "";
  updateTaskCount();
};

const clearAllButton = document.createElement("div");
clearAllButton.className = "clear_all_button";
clearAllButton.textContent = "hallow purple";
mainContainer.appendChild(clearAllButton);

// update count
function updateTaskCount() {
  totalTaskCount = taskContainer.childNodes.length;
  completedTaskCount = 0;

  for (let i = 0; i < taskContainer.childNodes.length; i++) {
    const task = taskContainer.childNodes[i].querySelector(".task_text");
    if (task && task.classList.contains("complete")) {
      completedTaskCount += 1;
    }
  }

  totalContainer.innerText = `${completedTaskCount} of ${totalTaskCount} tasks completed`;
}

// add task on button click
addButton.addEventListener("click", onClick);

clearAllButton.addEventListener("click", () => {
  const completedTask = taskContainer.querySelectorAll(".completed_item");
  completedTask.forEach((tasklabel) => {
    taskContainer.removeChild(tasklabel);
  });
  calculatacount();
});
