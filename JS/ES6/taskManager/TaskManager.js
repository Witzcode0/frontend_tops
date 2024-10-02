export default class TaskManager {
    constructor() {
      this.tasks = [];
    }
  
    addTask(task) {
      this.tasks.push(task);
      this.displayTasks();
    }
  
    removeTask(index) {
      this.tasks.splice(index, 1);
      this.displayTasks();
    }
  
    displayTasks() {
      const taskList = document.getElementById('taskList');
      taskList.innerHTML = '';
  
      this.tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', () => this.removeTask(index));
  
        li.appendChild(removeBtn);
        taskList.appendChild(li);
      });
    }
  }
  