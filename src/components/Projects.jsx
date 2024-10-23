import React, { useState } from 'react';

const Projects = () => {
  const [projects] = useState([
    {
      title: 'Community Cleanup Drive',
      description: 'Organizing a community cleanup to promote environmental awareness.',
      startDate: '2024-09-01',
      endDate: '2024-10-15',
      status: 'In Progress',
    },
    {
      title: 'Food Donation Campaign',
      description: 'Collecting food donations from rich people for local food banks.',
      startDate: '2024-08-15',
      endDate: '2024-09-30',
      status: 'Completed',
    },
    {
      title: 'Youth Mentorship Program',
      description: 'Providing mentorship to local youths to help them develop skills.',
      startDate: '2024-07-01',
      endDate: '2024-12-31',
      status: 'Ongoing',
    },
  ]);

  return (
    <div className="p-8 bg-gray-100 relative sm:left-[250px] md:left-[250px] lg:left-[300px] left-[80px] top-[65px] w-[80%] sm:w-[55%] md:w-[65%] lg:w-[70%] xl:w-[70%]">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Your Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-2 md:p-4 rounded-lg shadow">
            <h2 className="text-lg md:text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-2">{project.description}</p>
            <p className="text-gray-500">Start Date: {project.startDate}</p>
            <p className="text-gray-500">End Date: {project.endDate}</p>
            <p className={`font-bold ${project.status === 'Completed' ? 'text-green-500' : 'text-yellow-500'}`}>
              Status: {project.status}
            </p>
            <div className="text-center mt-4">
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
