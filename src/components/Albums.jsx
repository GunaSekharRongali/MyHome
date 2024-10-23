import React, { useState } from 'react';

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [newAlbum, setNewAlbum] = useState({
    albumName: '',
    category: '',
    date: '',
    images: [],
  });
  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAlbum({ ...newAlbum, [name]: value });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setNewAlbum({ ...newAlbum, images: [...newAlbum.images, ...files] });
  };

  const addAlbum = (e) => {
    e.preventDefault();
    setAlbums([...albums, newAlbum]);
    setNewAlbum({
      albumName: '',
      category: '',
      date: '',
      images: [],
    });
    setShowForm(false);
  };

  return (
    <div className="p-8 bg-gray-100 w-[80%] sm:w-[70%] md:w-[65%] lg:w-[70%] xl:w-[70%] relative sm:left-[200px] md:left-[250px] lg:left-[300px] left-[80px] top-[65px]">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">Albums</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          {showForm ? 'Hide Form' : 'Add Album'}
        </button>
      </div>

      {/* Album Form */}
      {showForm && (
        <form onSubmit={addAlbum} className="bg-white p-6 rounded shadow mb-8">
          <h2 className="text-xl font-semibold mb-4">Create New Album</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 font-semibold">Album Name</label>
              <input
                type="text"
                name="albumName"
                value={newAlbum.albumName}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Category</label>
              <input
                type="text"
                name="category"
                value={newAlbum.category}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Date</label>
              <input
                type="date"
                name="date"
                value={newAlbum.date}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Upload Images</label>
              <input
                type="file"
                onChange={handleImageUpload}
                multiple
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Add Album
          </button>
        </form>
      )}

      {/* Album List */}
      <div>
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Your Albums</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {albums.length > 0 ? (
            albums.map((album, index) => (
              <div key={index} className="bg-white p-4 rounded shadow">
                <h3 className="text-xl font-bold mb-2">{album.albumName}</h3>
                <p className="text-gray-600">Category: {album.category}</p>
                <p className="text-gray-600">Date: {new Date(album.date).toDateString()}</p>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {album.images.map((image, idx) => (
                    <img
                      key={idx}
                      src={URL.createObjectURL(image)}
                      alt={`Album ${album.albumName}`}
                      className="w-full h-32 object-cover rounded"
                    />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No albums yet. Add one!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Albums;
