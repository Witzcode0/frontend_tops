import TaskManager from './TaskManager.js';

const taskManager = new TaskManager();

document.getElementById('addTaskBtn').addEventListener('click', () => {
  const taskInput = document.getElementById('taskInput');
  const task = taskInput.value;

  console.log(task, "----")

  if (task) {
    taskManager.addTask(task);
    taskInput.value = ''; 
  } else {
    alert("Please enter something.")
  }
});
