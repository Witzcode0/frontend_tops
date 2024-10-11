import React, { useState } from 'react';

function TaskManager() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Complete assignment', status: 'pending' },
    { id: 2, title: 'Go for a walk', status: 'completed' }
  ]);

  const [newTask, setNewTask] = useState({ title: '', status: 'pending' });

  // Create: Add a new task
  const createTask = () => {
    const nextId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
    setTasks([...tasks, { id: nextId, ...newTask }]);
    setNewTask({ title: '', status: 'pending' }); // Reset input fields
  };

  // Update: Change task status
  const updateTask = (id, updatedStatus) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, status: updatedStatus } : task));
  };

  // Delete: Remove a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <h2>Task Manager</h2>
      
      {/* Create Task */}
      <div>
        <input
          type="text"
          placeholder="Task title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
        <select
          value={newTask.status}
          onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
        >
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
        <button onClick={createTask}>Add Task</button>
      </div>

      {/* Task Table */}
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.status}</td>
              <td>
                {/* Update Task */}
                <button onClick={() => updateTask(task.id, task.status === 'pending' ? 'completed' : 'pending')}>
                  {task.status === 'pending' ? 'Mark as Completed' : 'Mark as Pending'}
                </button>
                {/* Delete Task */}
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskManager;
