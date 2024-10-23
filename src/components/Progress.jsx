import React, { useState } from 'react';

const Progress = () => {
  const [progressItems, setProgressItems] = useState([]);
  const [newProgress, setNewProgress] = useState({
    goal: '',
    progressDetail: '',
    completionPercentage: 0,
    date: '',
  });
  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProgress({ ...newProgress, [name]: value });
  };

  const addProgress = (e) => {
    e.preventDefault();
    setProgressItems([...progressItems, newProgress]);
    setNewProgress({
      goal: '',
      progressDetail: '',
      completionPercentage: 0,
      date: '',
    });
    setShowForm(false);
  };

  return (
    <div className="p-8 bg-gray-100 relative sm:left-[200px] md:left-[250px] lg:left-[300px] left-[80px] top-[65px] w-[80%] sm:w-[65%] md:w-[65%] lg:w-[70%] xl:w-[70%]">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Progress Tracker</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          {showForm ? 'Hide Form' : 'Add Progress'}
        </button>
      </div>

      {/* Progress Form */}
      {showForm && (
        <form onSubmit={addProgress} className="bg-white p-6 rounded shadow mb-8">
          <h2 className="text-xl font-semibold mb-4">Log Progress</h2>
          <div className="md:grid md:grid-cols-2 md:gap-4">
            <div>
              <label className="block mb-2 font-semibold">Goal</label>
              <input
                type="text"
                name="goal"
                value={newProgress.goal}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Progress Details</label>
              <textarea
                name="progressDetail"
                value={newProgress.progressDetail}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Completion %</label>
              <input
                type="number"
                name="completionPercentage"
                value={newProgress.completionPercentage}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
                max="100"
                min="0"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Date</label>
              <input
                type="date"
                name="date"
                value={newProgress.date}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Add Progress
          </button>
        </form>
      )}

      {/* Progress List */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Your Progress</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {progressItems.length > 0 ? (
            progressItems.map((progress, index) => (
              <div key={index} className="bg-white p-4 rounded shadow">
                <h3 className="text-xl font-bold mb-2">{progress.goal}</h3>
                <p className="text-gray-600 mb-2">{progress.progressDetail}</p>
                <p className="text-gray-600 mb-2">Completion: {progress.completionPercentage}%</p>
                <p className="text-gray-600">Logged on: {new Date(progress.date).toDateString()}</p>
                <div className="relative pt-2">
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                    <div
                      style={{ width: `${progress.completionPercentage}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                    ></div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No progress updates yet. Add one!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Progress;
