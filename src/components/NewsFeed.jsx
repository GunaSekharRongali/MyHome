import React, { useState } from 'react';

const NewsFeedComponent = () => {
  const [postContent, setPostContent] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const [posts, setPosts] = useState([]); // State to store posts

  const handleInputChange = (e) => {
    setPostContent(e.target.value);
    setShowOptions(e.target.value.length > 0);
  };

  const cancelPost = () => {
    setPostContent('');
    setShowOptions(false);
  };

  const handlePost = (e) => {
    e.preventDefault();
    const newPost = {
      content: postContent,
      timestamp: new Date().toLocaleString(),
      comments: [], // Initialize with empty comments
      likes: 0, // Initialize likes count
      likedByUser: false, // Track if liked by the user
    };
    setPosts([newPost, ...posts]); // Add the new post to the list
    cancelPost(); // Reset after posting
  };

  const handleCommentSubmit = (index, comment) => {
    const updatedPosts = [...posts];
    updatedPosts[index].comments.push(comment); // Add the comment to the post
    setPosts(updatedPosts);
  };

  const toggleLike = (index) => {
    const updatedPosts = [...posts];
    if (updatedPosts[index].likedByUser) {
      updatedPosts[index].likes -= 1; // Decrease likes count
    } else {
      updatedPosts[index].likes += 1; // Increase likes count
    }
    updatedPosts[index].likedByUser = !updatedPosts[index].likedByUser; // Toggle like status
    setPosts(updatedPosts);
  };

  return (
    <div className="p-8 bg-gray-100 w-[80%] sm:w-[70%] md:w-[65%] lg:w-[70%] xl:w-[70%] 2xl:w-[70%] relative sm:left-[200px] md:left-[250px] lg:left-[300px] left-[80px] top-[65px]">
      <h1 className="text-3xl font-bold mb-6">News Feed</h1>

      <form onSubmit={handlePost} className="bg-white p-4 rounded-lg shadow mb-6">
        <textarea
          value={postContent}
          onChange={handleInputChange}
          placeholder="What's on your mind?"
          className="w-full p-2 border rounded mb-2"
          rows="4"
          required
        />
        {showOptions && (
          <div className="flex space-x-2 mb-4">
            <button type="button" className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600">
              Add Progress
            </button>
            <button type="button" className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
              Attach
            </button>
            <button type="button" className="bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-600">
              Location
            </button>
            <button type="button" className="bg-purple-500 text-white py-1 px-3 rounded hover:bg-purple-600">
              Date
            </button>
            <button type="button" className="bg-gray-500 text-white py-1 px-3 rounded hover:bg-gray-600">
              Rename Project
            </button>
          </div>
        )}
        <div className="flex justify-end">
          <button type="button" className="text-gray-500 mr-4" onClick={cancelPost}>
            Cancel
          </button>
          <button type="submit" className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600">
            Post
          </button>
        </div>
      </form>

      {/* Display posts */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2">Recent Updates</h2>
        {posts.map((post, index) => (
          <div key={index} className="mb-4 border-b pb-4">
            <p className="font-bold">User Name</p>
            <p>{post.content}</p>
            <p className="text-gray-500 text-sm">{post.timestamp}</p>
            <div className="flex items-center justify-between mt-2">
              <button
                className={`flex items-center text-gray-600 hover:text-blue-500 ml-1 ${post.likedByUser ? 'font-bold' : ''}`}
                onClick={() => toggleLike(index)}
              >
                {post.likedByUser ? '❤️' : '🤍'} {/* Like heart */}
                <span className="ml-1">{post.likes} {post.likes === 1 ? 'Like' : 'Likes'}</span>
              </button>
              <span className="mr-10 text-gray-600">
                {post.comments.length} {post.comments.length === 1 ? 'Comment' : 'Comments'}
              </span>
            </div>
            {post.comments.length > 0 && (
              <div className="mt-2">
                <h3 className="font-semibold">Comments:</h3>
                {post.comments.map((comment, idx) => (
                  <p key={idx} className="text-gray-700">{comment}</p>
                ))}
              </div>
            )}
            <div className="mt-2">
              <CommentSection
                index={index}
                handleCommentSubmit={handleCommentSubmit}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Component to handle comments
const CommentSection = ({ index, handleCommentSubmit }) => {
  const [comment, setComment] = useState('');

  const submitComment = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      handleCommentSubmit(index, comment);
      setComment('');
    }
  };

  return (
    <form onSubmit={submitComment} className="flex mt-2">
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment..."
        className="flex-1 p-2 border rounded"
      />
      <button type="submit" className="bg-blue-500 text-white py-1 px-3 rounded ml-2 hover:bg-blue-600">
        Comment
      </button>
    </form>
  );
};

export default NewsFeedComponent;
