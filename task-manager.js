// Define an array to hold our tasks
let tasks = [];

// Define a function to add a new task
function addTask(event) {
	// Prevent the default form submission behavior
	event.preventDefault();
	
	// Get the input values from the form
	const taskName = document.getElementById('task-name').value;
	const taskPriority = parseInt(document.getElementById('task-priority').value);
	
	// Add the task to our array
	tasks.push({name: taskName, priority: taskPriority});
	
	// Reset the form
	event.target.reset();
	
	// Refresh the task list
	refreshTaskList();
}

// Define a function to delete a task
function deleteTask(index) {
	// Remove the task from our array
	tasks.splice(index, 1);
	
	// Refresh the task list
	refreshTaskList();
}

// Define a function to edit a task
function editTask(index) {
	// Get the task object from our array
	const task = tasks[index];
	
	// Set the input values in the form
	document.getElementById('task-name').value = task.name;
	document.getElementById('task-priority').value = task.priority;
	
	// Remove the task from our array
	tasks.splice(index, 1);
	
	// Refresh the task list
	refreshTaskList();
}

// Define a function to refresh the task list
function refreshTaskList() {
	// Get the table body element
	const tableBody = document.getElementById('task-list').getElementsByTagName('tbody')[0];
	
	// Clear the table body
	tableBody.innerHTML = '';
	
	// Loop through our tasks and add them to the table
	tasks.forEach(function(task, index) {
		const row = tableBody.insertRow();
		
		const nameCell = row.insertCell();
		nameCell.textContent = task.name;
		
		const priorityCell = row.insertCell();
		priorityCell.textContent = task.priority;
		
		const editDeleteCell = row.insertCell();
		const editButton = document.createElement('button');
		editButton.textContent = 'Edit';
		editButton.addEventListener('click', function() {
		
// Call the editTask function with the current task index when the button is clicked
editTask(index);
});
editDeleteCell.appendChild(editButton);
    	const deleteButton = document.createElement('button');
	deleteButton.textContent = 'Delete';
	deleteButton.addEventListener('click', function() {
		// Call the deleteTask function with the current task index when the button is clicked
		deleteTask(index);
	});
	editDeleteCell.appendChild(deleteButton);
});

  
  // Clear the table body
tableBody.innerHTML = '';

// Filter tasks by priority
const filteredTasks = tasks.filter(task => task.priority >= parseInt(document.getElementById('task-filter').value));

// Sort filtered tasks by name
filteredTasks.sort((a, b) => a.name.localeCompare(b.name));

// Loop through our tasks and add them to the table
filteredTasks.forEach(function(task, index) {
	const row = tableBody.insertRow();
	
	const nameCell = row.insertCell();
	nameCell.textContent = task.name;
	
	const priorityCell = row.insertCell();
	priorityCell.textContent = task.priority;
	
	const editDeleteCell = row.insertCell();
	const editButton = document.createElement('button');
	editButton.textContent = 'Edit';
	editButton.addEventListener('click', function() {
		// Call the editTask function with the current task index when the button is clicked
		editTask(index);
	});
	editDeleteCell.appendChild(editButton);
	
	const deleteButton = document.createElement('button');
	deleteButton.textContent = 'Delete';
	deleteButton.addEventListener('click', function() {
		// Call the deleteTask function with the current task index when the button is clicked
		deleteTask(index);
	});
	editDeleteCell.appendChild(deleteButton);
});
