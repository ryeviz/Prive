// Get reference to the input field for new tasks
let taskInput = document.getElementById("new-task");

// Get reference to the "Add" button
let addButton = document.getElementsByTagName("button")[0];

// Get reference to the "Incomplete Tasks" ul element
let incompleteTaskHolder = document.getElementById("incomplete-tasks");

// Get reference to the "Completed Tasks" ul element
let completedTasksHolder = document.getElementById("completed-tasks");

/*---- Part 1: Create new task item ----*/

// Define a function to create a new task item with the given task string
let createNewTaskElement = function (taskString) {
  // Create a new list item element
  let listItem = document.createElement("li");

  // Create a checkbox input element
  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";

  // Create a label element with the given task string as its text content
  let label = document.createElement("label");
  label.innerText = taskString;
	
 // Create a span element for displaying the date and time
  let dateTime = document.createElement("span");
  dateTime.innerText = new Date().toLocaleString();

  // Create an input element for editing the task
  let editInput = document.createElement("input");
  editInput.type = "text";

  // Create an edit button element
  let editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.className = "edit";

  // Create a delete button element
  let deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";

  // Append the checkbox, label, date/time, edit input, edit button, and delete button to the list item
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(dateTime);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem;
};

/*---- Part 2: Add a new task ----*/

// Define a function to add a new task when the "Add" button is clicked
let addTask = function () {
  console.log("Add Task...");

  // Create a new list item with the text from the task input field
  let listItem = createNewTaskElement(taskInput.value);

  // Only add the new task if the input field is not empty
  if (taskInput.value !== "") {
    // Append the new task to the "Incomplete Tasks" list
    incompleteTaskHolder.appendChild(listItem);

    // Bind events to the new task
    bindTaskEvents(listItem, taskCompleted);

    // Clear the input field
    taskInput.value = "";
  }
};

// Bind the addTask function to the "Add" button
addButton.onclick = addTask;

/*---- Part 3: Edit a task ----*/

// Define a function to switch a task from "edit mode" to "display mode"
let editTask = function () {
  console.log("Edit Task...");
  console.log("Change 'edit' to 'save'");

  let listItem = this.parentNode;

  let editInput = listItem.querySelector("input[type=text]");
  let label = listItem.querySelector("label");
  let containsClass = listItem.classList.contains("editMode");

  // If the list item is already in "edit mode", switch it back to "display mode" and update the label text
  if (containsClass) {
    label.innerText = editInput.value;
  }
  // If the list item is not in "edit mode", switch it to "edit mode" and update the edit input value
  else {
    editInput.value = label.innerText;
  }

  // Toggle the "edit mode" class on the list item
  listItem.classList.toggle("editMode");
};

/*---- Part 4: Delete a task ----*/

/*---- Part 4 ----*/
let deleteTask = function () {
	console.log("Delete Task...");

	let listItem = this.parentNode;
	let ul = listItem.parentNode;
	// Remove the parent list item from the ul.
	ul.removeChild(listItem);

}

/*---- Part 5 ----*/

let taskCompleted = function () {
	console.log("Complete Task...");

	// Append the task list item to the #completed-tasks
	let listItem = this.parentNode;
	completedTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskIncomplete);

}

/*---- Part 6 ----*/
let taskIncomplete = function () {
	console.log("Incomplete Task...");
	// Mark task as incomplete.
	let listItem = this.parentNode;
	incompleteTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);
}

/*---- Part 7 ----*/
addButton.onclick = addTask;
addButton.addEventListener("click", addTask);

let bindTaskEvents = function (taskListItem, checkBoxEventHandler) {
	console.log("bind list item events");
	// select ListItems children
	let checkBox = taskListItem.querySelector("input[type=checkbox]");
	let editButton = taskListItem.querySelector("button.edit");
	let deleteButton = taskListItem.querySelector("button.delete");


	// Bind editTask to edit button.
	editButton.onclick = editTask;
	// Bind deleteTask to delete button.
	deleteButton.onclick = deleteTask;
	// Bind taskCompleted to checkBoxEventHandler.
	checkBox.onchange = checkBoxEventHandler;
}

/*---- Part 8 ----*/
// cycle over incompleteTaskHolder ul list items
// for each list item
for (let i = 0; i < incompleteTaskHolder.children.length; i++) {

	// bind events to list items children(tasksCompleted)
	bindTaskEvents(incompleteTaskHolder.children[i], taskCompleted);
}

// cycle over completedTasksHolder ul list items
for (let i = 0; i < completedTasksHolder.children.length; i++) {
	// bind events to list items children(tasksIncompleted)
	bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}

const sortTasks = (tasks, sortBy) => {
  return tasks.sort((a, b) => {
    switch (sortBy) {
      case 'created':
        return new Date(a.created) - new Date(b.created);
      case 'due':
        return new Date(a.due) - new Date(b.due);
      case 'priority':
        return b.priority - a.priority;
      default:
        return 0;
    }
  });
}

const renderTasks = (tasks) => {
  // Sort tasks by selected sort method
  const sortBy = document.getElementById('sort-by').value;
  const sortedTasks = sortTasks(tasks, sortBy);
  
  // Render tasks in sorted order
  // ...
}

// Add event listener to re-render tasks when sorting method changes
const sortBySelect = document.getElementById('sort-by');
sortBySelect.addEventListener('change', () => {
  renderTasks(tasks);
});
