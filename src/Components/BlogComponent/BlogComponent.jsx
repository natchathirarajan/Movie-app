import React, { useState } from 'react';
import Post from '../PostComponent/PostComponent';
import './BlogComponent.css';

const BlogComponent = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Movie Name:SINGAM', content: 'CAST 1.Suriya,2.Anuska' },
    { id: 2, title: 'Movie Name:KABALI', content: 'CAST 1.Rajini 2.old Rajini' },
    { id: 3, title: 'Movie Name:LEO ', content: 'CAst  1.Vijay 2.trisha.' },
  ]);

  const [newPost, setNewPost] = useState({ title: '', content: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPostData = { id: posts.length + 1, title: newPost.title, content: newPost.content };
    setPosts([...posts, newPostData]);
    setNewPost({ title: '', content: '' });
  };

  return (
    <div>
      <h1>Movie Details</h1>
      <form onSubmit={handleSubmit}>
        <label>Movie Name:</label>
        <input type="text" value={newPost.title} onChange={(event) => setNewPost({ ...newPost, title: event.target.value })} />
        <br />
        <label>Movie Cast:</label>
        <textarea value={newPost.content} onChange={(event) => setNewPost({ ...newPost, content: event.target.value })} />
        <br />
        <button type="submit">Add movie</button>
      </form>
      <ul>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
};

export default BlogComponent;