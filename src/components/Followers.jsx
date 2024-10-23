import React, { useState } from 'react';

const Followers = () => {
  const [followers] = useState([
    {
      name: 'Emily Watson',
      username: '@emily_watson',
      bio: 'Social Impact Advocate',
      profilePic: 'makerble.png',
    },
    {
      name: 'Mark Peterson',
      username: '@mark_peterson',
      bio: 'Digital Marketing Strategist, Fundraiser',
      profilePic: 'makerble-mini-logo.png',
    },
    {
      name: 'Sarah Thompson',
      username: '@sarah_thompson',
      bio: 'Project Manager at Global Aid',
      profilePic: 'makerble-mini-logo.png',
    },
  ]);

  return (
    <div className="p-8 bg-gray-100 relative sm:left-[250px] md:left-[250px] lg:left-[300px] left-[80px] top-[65px] w-[80%] sm:w-[60%] md:w-[65%] lg:w-[70%] xl:w-[70%]">
      <h1 className="text-3xl font-bold mb-6">Followers</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {followers.map((follower, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <img
              src={follower.profilePic}
              alt={follower.name}
              className="w-24 h-24 object-cover rounded-full mb-4 mx-auto"
            />
            <h2 className="text-xl font-semibold text-center">{follower.name}</h2>
            <p className="text-gray-500 text-center mb-2">{follower.username}</p>
            <p className="text-center text-gray-700 mb-4">{follower.bio}</p>
            <button className="block w-full bg-red-500 text-white py-2 rounded hover:bg-red-600">
              Remove Follower
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Followers;
