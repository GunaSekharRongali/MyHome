import React, { useState } from 'react';

const Following = () => {
  const [peopleFollowing] = useState([
    {
      name: 'John Doe',
      username: '@john_doe',
      bio: 'Frontend Developer, React Enthusiast',
      profilePic: "makerble.png",
    },
    {
      name: 'Jane Smith',
      username: '@jane_smith',
      bio: 'UI/UX Designer and Sketch Lover',
      profilePic: 'makerble-mini-logo.png',
    },
    {
      name: 'Chris Johnson',
      username: '@chris_j',
      bio: 'Full Stack Developer, Node.js Wizard',
      profilePic: 'makerble-mini-logo.png',
    },
  ]);

  return (
    <div className="p-8 bg-gray-100 relative sm:left-[250px] md:left-[250px] lg:left-[300px] left-[80px] top-[65px] w-[80%] sm:w-[60%] md:w-[65%] lg:w-[70%] xl:w-[70%]">
      <h1 className="text-3xl font-bold mb-6">People You Follow</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {peopleFollowing.map((person, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <img
              src={person.profilePic}
              alt={person.name}
              className="w-24 h-24 object-cover rounded-full mb-4 mx-auto"
            />
            <h2 className="text-xl font-semibold text-center">{person.name}</h2>
            <p className="text-gray-500 text-center mb-2">{person.username}</p>
            <p className="text-center text-gray-700 mb-4">{person.bio}</p>
            <button className="block w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
              Unfollow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Following;

