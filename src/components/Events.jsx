import React, { useState } from 'react';

const EventsComponent = () => {
  const [events, setEvents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newEvent, setNewEvent] = useState({
    eventName: '',
    eventType: '',
    projectName: '',
    eventCategory: '',
    startTime: '',
    endTime: '',
    timeZone: '',
    guests: '',
    managers: '',
    workers: '',
  });

  // Add new event
  const addEvent = (e) => {
    e.preventDefault();
    setEvents([...events, newEvent]);

    // Reset form
    setNewEvent({
      eventName: '',
      eventType: '',
      projectName: '',
      eventCategory: '',
      startTime: '',
      endTime: '',
      timeZone: '',
      guests: '',
      managers: '',
      workers: '',
    });
    setShowForm(false);
  };

  // Handle input change
  const handleInputChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-8 bg-gray-100 w-[84%] sm:w-[60%] md:w-[65%] lg:w-[70%] xl:w-[70%] relative sm:left-[200px] md:left-[250px] lg:left-[300px] left-[80px] top-[65px]">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl md:text-3xl font-bold">Events Management</h1>
        <div className="flex space-x-4">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            {showForm ? 'Hide Form' : 'Create Event'}
          </button>
          <button className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600">
            More Options
          </button>
        </div>
      </div>

      {/* Event Creation Form */}
      {showForm && (
        <form onSubmit={addEvent} className="bg-white p-6 rounded shadow mb-8">
          <h2 className="text-xl font-semibold mb-4">Create a New Event</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 font-semibold">Event Name</label>
              <input
                type="text"
                name="eventName"
                value={newEvent.eventName}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Event Type</label>
              <input
                type="text"
                name="eventType"
                value={newEvent.eventType}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Project Name</label>
              <input
                type="text"
                name="projectName"
                value={newEvent.projectName}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Event Category</label>
              <input
                type="text"
                name="eventCategory"
                value={newEvent.eventCategory}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Start Time & Date</label>
              <input
                type="datetime-local"
                name="startTime"
                value={newEvent.startTime}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">End Time & Date</label>
              <input
                type="datetime-local"
                name="endTime"
                value={newEvent.endTime}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Time Zone</label>
              <input
                type="text"
                name="timeZone"
                value={newEvent.timeZone}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Guests</label>
              <input
                type="text"
                name="guests"
                value={newEvent.guests}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Managers</label>
              <input
                type="text"
                name="managers"
                value={newEvent.managers}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Workers</label>
              <input
                type="text"
                name="workers"
                value={newEvent.workers}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Add Event
          </button>
        </form>
      )}

      {/* Event Table */}
      <h2 className="text-2xl font-semibold mb-4">Events</h2>
      <div className="overflow-x-auto">
        <table className="bg-white min-w-full shadow rounded">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="py-2 px-4">Event Name</th>
              <th className="py-2 px-4">Event Type</th>
              <th className="py-2 px-4">Project Name</th>
              <th className="py-2 px-4">Event Category</th>
              <th className="py-2 px-4">Start Time</th>
              <th className="py-2 px-4">End Time</th>
              <th className="py-2 px-4">Time Zone</th>
              <th className="py-2 px-4">Guests</th>
              <th className="py-2 px-4">Managers</th>
              <th className="py-2 px-4">Workers</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.length > 0 ? (
              events.map((event, index) => (
                <tr key={index} className="border-t">
                  <td className="py-2 px-4">{event.eventName}</td>
                  <td className="py-2 px-4">{event.eventType}</td>
                  <td className="py-2 px-4">{event.projectName}</td>
                  <td className="py-2 px-4">{event.eventCategory}</td>
                  <td className="py-2 px-4">{new Date(event.startTime).toLocaleString()}</td>
                  <td className="py-2 px-4">{new Date(event.endTime).toLocaleString()}</td>
                  <td className="py-2 px-4">{event.timeZone}</td>
                  <td className="py-2 px-4">{event.guests}</td>
                  <td className="py-2 px-4">{event.managers}</td>
                  <td className="py-2 px-4">{event.workers}</td>
                  <td className="py-2 px-4">
                    {/* Actions can include editing or deleting an event */}
                    <button className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="11" className="text-center py-4">
                  No events created yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventsComponent;
