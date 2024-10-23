import React, { useState } from 'react';

const TaskComponent = () => {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [newTask, setNewTask] = useState({
    task: '',
    assignedTo: '',
    deadline: '',
    goal: '',
    details: '',
    completed: false,
  });

  const addTask = (e) => {
    e.preventDefault();
    const createdTime = new Date().toLocaleString();

    setTasks([
      ...tasks,
      { ...newTask, createdTime },
    ]);

    setNewTask({
      task: '',
      assignedTo: '',
      deadline: '',
      goal: '',
      details: '',
      completed: false,
    });
  };

  const handleInputChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const toggleCompletion = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const filteredTasks = tasks.filter(task =>
    task.task.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8 bg-gray-100 w-[90%] sm:w-[55%] md:w-[60%] lg:w-[70%] xl:w-[70%] relative sm:left-[250px] md:left-[250px] lg:left-[300px] left-[80px] top-[65px]">
      <h1 className="text-3xl font-bold mb-4">Task Management</h1>

      {/* Task Creation Form */}
      <form onSubmit={addTask} className="bg-white p-6 rounded shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">Create a New Task</h2>
        <div className="lg:grid lg:grid-cols-2 lg:gap-4">
          <div>
            <label className="block mb-2 font-semibold">Task</label>
            <input
              type="text"
              name="task"
              value={newTask.task}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Assigned To</label>
            <input
              type="text"
              name="assignedTo"
              value={newTask.assignedTo}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Deadline</label>
            <input
              type="date"
              name="deadline"
              value={newTask.deadline}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Goal</label>
            <input
              type="text"
              name="goal"
              value={newTask.goal}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="col-span-2">
            <label className="block mb-2 font-semibold">Details</label>
            <textarea
              name="details"
              value={newTask.details}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              rows="4"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add Task
        </button>
      </form>

      {/* Task Filter Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search tasks by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 w-full border rounded"
        />
      </div>

      {/* Task Table for Active Tasks */}
      <h2 className="text-2xl font-semibold mb-4">Tasks To Do</h2>
      <div className="table-container overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded mb-8">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="py-2 px-4">Assigned To</th>
              <th className="py-2 px-4">Task</th>
              <th className="py-2 px-4">Deadline</th>
              <th className="py-2 px-4">Created Time</th>
              <th className="py-2 px-4">Goal</th>
              <th className="py-2 px-4">Completed</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.filter(task => !task.completed).length > 0 ? (
              filteredTasks.filter(task => !task.completed).map((task, index) => (
                <tr key={index} className="border-t">
                  <td className="py-2 px-4">{task.assignedTo}</td>
                  <td className="py-2 px-4">{task.task}</td>
                  <td className="py-2 px-4">{task.deadline}</td>
                  <td className="py-2 px-4">{task.createdTime}</td>
                  <td className="py-2 px-4">{task.goal}</td>
                  <td className="py-2 px-4">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleCompletion(task.id)}
                      className="h-5 w-5"
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  No tasks to do.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Task Table for Completed Tasks */}
      <h2 className="text-2xl font-semibold mb-4">Completed Tasks</h2>
      <div className="table-container overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="py-2 px-4">Assigned To</th>
              <th className="py-2 px-4">Task</th>
              <th className="py-2 px-4">Deadline</th>
              <th className="py-2 px-4">Created Time</th>
              <th className="py-2 px-4">Goal</th>
              <th className="py-2 px-4">Undo</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.filter(task => task.completed).length > 0 ? (
              filteredTasks.filter(task => task.completed).map((task, index) => (
                <tr key={index} className="border-t">
                  <td className="py-2 px-4">{task.assignedTo}</td>
                  <td className="py-2 px-4">{task.task}</td>
                  <td className="py-2 px-4">{task.deadline}</td>
                  <td className="py-2 px-4">{task.createdTime}</td>
                  <td className="py-2 px-4">{task.goal}</td>
                  <td className="py-2 px-4">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleCompletion(task.id)}
                      className="h-5 w-5"
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  No completed tasks.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskComponent;
