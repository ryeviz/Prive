// Define an array to hold our tasks
let tasks = [];

// Define a function to add a new task
function addTask(event) {
	// Prevent the default form submission behavior
	event.preventDefault();
	
	// Get the input values from the form
	const taskName = document.getElementById('task-name').value;
	const taskDescription = document.getElementById('task-description').value;
	const taskPriority = parseInt(document.getElementById('task-priority').value);
	const taskDueDate = document.getElementById('task-due-date').value;
	const taskStatus = document.getElementById('task-status').value;
	
	// Add the task to our array
	tasks.push({
		name: taskName,
		description: taskDescription,
		priority: taskPriority,
		dueDate: taskDueDate,
		status: taskStatus
	});
	
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
	document.getElementById('task-description').value = task.description;
	document.getElementById('task-priority').value = task.priority;
	document.getElementById('task-due-date').value = task.dueDate;
	document.getElementById('task-status').value = task.status;
	
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
		
		const descriptionCell = row.insertCell();
		descriptionCell.textContent = task.description;
		
		const priorityCell = row.insertCell();
		priorityCell.textContent = task.priority;
		
		const dueDateCell = row.insertCell();
		dueDateCell.textContent = task.dueDate;
		
		const statusCell = row.insertCell();
		statusCell.textContent = task.status;
		
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
}

// Add an event listener to the form to handle task submission
document.getElementById('add-task-form').addEventListener('submit', addTask);

// Refresh the task list when the page loads
refreshTaskList();
