import React, { useState } from 'react';

const Organizations = () => {
  const [organizations] = useState([
    {
      name: 'Global Aid Organization',
      description: 'Focused on providing humanitarian aid globally.',
      members: 120,
      logo: 'https://via.placeholder.com/100',
    },
    {
      name: 'Community Support Fund',
      description: 'Supporting local communities through various initiatives.',
      members: 85,
      logo: 'https://via.placeholder.com/100',
    },
    {
      name: 'Education for All',
      description: 'Advocating for education access for underprivileged children.',
      members: 200,
      logo: 'https://via.placeholder.com/100',
    },
  ]);

  return (
    <div className="p-8 bg-gray-100 w-[80%] sm:w-[55%] md:w-[65%] lg:w-[70%] xl:w-[70%] relative md:left-[200px] md:left-[250px] lg:left-[300px] left-[80px] top-[65px]">
      <h1 className="text-3xl font-bold mb-6">Your Organizations</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {organizations.map((org, index) => (
          <div key={index} className="bg-white p-2 md:p-4 rounded-lg shadow">
            <img
              src={org.logo}
              alt={org.name}
              className="w-12 h-12 md:w-24 md:h-24 object-cover rounded-full mb-4 mx-auto"
            />
            <h2 className="text-lg md:text-xl font-semibold text-center">{org.name}</h2>
            <p className="text-gray-600 text-center mb-2">{org.description}</p>
            <p className="text-gray-500 text-center">Members: {org.members}</p>
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

export default Organizations;
