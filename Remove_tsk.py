import datetime

class Task:

    def __init__(self, title, description, due_date=None):

        self.title = title

        self.description = description

        self.completed = False

        self.created_at = datetime.datetime.now()

        self.due_date = due_date

    def __repr__(self):

        return f"{self.title} ({'completed' if self.completed else 'incomplete'})"

class TaskList:

    def __init__(self, name):

        self.name = name

        self.tasks = []

    def add_task(self, task):

        self.tasks.append(task)

    def remove_task(self, task):

        try:

            self.tasks.remove(task)

        except ValueError:

            print(f"Task {task} not found in task list {self.name}.")

    def complete_task(self, task):

        task.completed = True

    def incomplete_task(self, task):

        task.completed = False

    def get_completed_tasks(self):

        return [task for task in self.tasks if task.completed]

    def get_incomplete_tasks(self):

        return [task for task in self.tasks if not task.completed]

    def get_tasks_due_today(self):

        today = datetime.date.today()

        return [task for task in self.tasks if task.due_date == today]

class TaskManager:

    def __init__(self):

        self.task_lists = []

    def add_task_list(self, task_list):

        self.task_lists.append(task_list)

    def remove_task_list(self, task_list):

        try:

            self.task_lists.remove(task_list)

        except ValueError:

            print(f"Task list {task_list} not found in task manager.")

    def get_all_tasks(self):

        return [task for task_list in self.task_lists for task in task_list.tasks]

    def get_completed_tasks(self):

        return [task for task in self.get_all_tasks() if task.completed]

    def get_incomplete_tasks(self):

        return [task for task in self.get_all_tasks() if not task.completed]

    def get_tasks_due_today(self):

        today = datetime.date.today()

        return [task for task in self.get_all_tasks() if task.due_date == today]

# task usage

task_list = TaskList('My Task List')

task1 = Task('Finish Python project', 'Complete the Python project by next week', datetime.date(2023, 3, 3))

task2 = Task('Buy groceries', 'Buy groceries for the week', datetime.date(2023, 2, 27))

task3 = Task('Do laundry', 'Do laundry on Sunday')

task_list.add_task(task1)

task_list.add_task(task2)

task_list.add_task(task3)

task_manager = TaskManager()

task_manager.add_task_list(task_list)

print("All tasks:", task_manager.get_all_tasks())

print("Incomplete tasks:", task_manager.get_incomplete_tasks())

print("Completed tasks:", task_manager.get_completed_tasks())

print("Tasks due today:", task_manager.get_tasks_due_today())

# remove a task that exists in the list

task_list.remove_task(task1)

print("All tasks after removing task1:", task_manager.get_all_tasks())

# remove a task that doesn't exist in the list

task4 = Task('Walk the dog', 'Take the dog for a walk')

task_list.remove_task(task4)

# remove a task list that exists in the task manager

task_manager.remove_task_list(task_list)

print("Task lists after removing task_list:", task_manager.task_lists)

# remove a task list that doesn't exist in the task manager

task_list2

