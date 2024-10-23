import React, { useState } from 'react';

const Contacts = () => {
  const [contacts] = useState([
    {
      name: 'John Doe',
      role: 'Project Manager',
      email: 'john.doe@example.com',
      phone: '+1 (555) 123-4567',
      photo: 'https://via.placeholder.com/100',
    },
    {
      name: 'Jane Smith',
      role: 'Volunteer Coordinator',
      email: 'jane.smith@example.com',
      phone: '+1 (555) 987-6543',
      photo: 'https://via.placeholder.com/100',
    },
    {
      name: 'Michael Brown',
      role: 'Fundraising Specialist',
      email: 'michael.brown@example.com',
      phone: '+1 (555) 456-7890',
      photo: 'https://via.placeholder.com/100',
    },
  ]);

  return (
    <div className="p-8 bg-gray-100 w-[80%] sm:w-[55%] md:w-[65%] lg:w-[70%] xl:w-[70%] relative sm:left-[250px] md:left-[250px] lg:left-[300px] left-[80px] top-[65px]">
      <h1 className="text-xl md:text-3xl font-bold mb-6">Your Contacts</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contacts.map((contact, index) => (
          <div key={index} className="bg-white p-2 md:p-4 rounded-lg shadow">
            <img
              src={contact.photo}
              alt={contact.name}
              className="w-12 h-12 md:w-24 md:h-24 object-cover rounded-full md:mb-4 mx-auto"
            />
            <div>
            <h2 className="text-sm md:text-lg md:text-xl font-semibold text-center">{contact.name}</h2>
            <p className="text-gray-600 text-center mb-2">{contact.role}</p>
            <p className="text-gray-500 text-center">{contact.email}</p>
            <p className="text-gray-500 text-center">{contact.phone}</p>
            </div>
            <div className="text-center mt-4">
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
