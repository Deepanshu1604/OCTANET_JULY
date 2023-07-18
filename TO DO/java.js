var taskInput = document.getElementById("taskInput");
var addButton = document.getElementById("addButton");
var taskList = document.getElementById("taskList");
function addTask() {
  if (taskInput.value.trim() !== "") {
    var li = document.createElement("li");
    var taskText = document.createElement("span");
    taskText.innerText = taskInput.value;
    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete-button";
    deleteButton.addEventListener("click", function() {
      li.remove();
    });
    li.appendChild(taskText);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
    taskInput.value = "";
  }
}
addButton.addEventListener("click", addTask);
taskInput.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    addTask();
  }
});