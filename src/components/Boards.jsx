import React, { useState } from 'react';

const Boards = () => {
  const [columns, setColumns] = useState([
    { title: 'To Do', tasks: [] },
    { title: 'In Progress', tasks: [] },
    { title: 'Completed', tasks: [] },
  ]);

  const [newTask, setNewTask] = useState('');
  const [selectedColumn, setSelectedColumn] = useState('To Do');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    const updatedColumns = columns.map((column) => {
      if (column.title === selectedColumn) {
        return { ...column, tasks: [...column.tasks, newTask] };
      }
      return column;
    });
    setColumns(updatedColumns);
    setNewTask('');
  };

  const moveTask = (task, fromColumn, toColumn) => {
    const updatedColumns = columns.map((column) => {
      if (column.title === fromColumn) {
        return { ...column, tasks: column.tasks.filter((t) => t !== task) };
      }
      if (column.title === toColumn) {
        return { ...column, tasks: [...column.tasks, task] };
      }
      return column;
    });
    setColumns(updatedColumns);
  };

  return (
    <div className="p-8 bg-gray-100 w-[80%] sm:w-[70%] md:w-[65%] lg:w-[70%] xl:w-[70%] relative sm:left-[200px] md:left-[250px] lg:left-[300px] left-[80px] top-[65px]">
      <h1 className="text-3xl font-bold mb-6">Project Board</h1>

      <form onSubmit={addTask} className="mb-6 flex">
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Add a new task"
          className="p-2 border rounded w-1/2 mr-2"
          required
        />
        <select
          value={selectedColumn}
          onChange={(e) => setSelectedColumn(e.target.value)}
          className="p-2 border rounded"
        >
          {columns.map((column) => (
            <option key={column.title} value={column.title}>
              {column.title}
            </option>
          ))}
        </select>
        <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
          Add Task
        </button>
      </form>

      <div className="lg:flex lg:space-x-4">
        {columns.map((column) => (
          <div key={column.title} className="mb-2 bg-white p-4 rounded shadow lg:w-1/3">
            <h2 className="text-xl font-semibold mb-2">{column.title}</h2>
            <div className="flex flex-col space-y-2">
              {column.tasks.length > 0 ? (
                column.tasks.map((task, index) => (
                  <div
                    key={index}
                    className="p-2 border rounded flex justify-between items-center bg-gray-100"
                  >
                    <span>{task}</span>
                    <div>
                      {column.title !== 'Completed' && (
                        <button
                          onClick={() => moveTask(task, column.title, 'Completed')}
                          className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600"
                        >
                          ✔
                        </button>
                      )}
                      {column.title !== 'In Progress' && (
                        <button
                          onClick={() => moveTask(task, column.title, 'In Progress')}
                          className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600 mx-1"
                        >
                          ⏳
                        </button>
                      )}
                      {column.title !== 'To Do' && (
                        <button
                          onClick={() => moveTask(task, column.title, 'To Do')}
                          className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                        >
                          🔄
                        </button>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500">No tasks yet.</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Boards;
