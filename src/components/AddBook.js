import React, { useState } from 'react';
import axios from 'axios';

const AddBook = () => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [publishDate, setPublishDate] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/books', {
        name,
        author,
        publish_date: publishDate,
      });
      setMessage(response.data.message);
      setName('');
      setAuthor('');
      setPublishDate('');
    } catch (error) {
      console.error('Error adding book:', error);
      setMessage('Failed to add book.');
    }
  };

  return (
    <div>
      <h1>Add New Book</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <label>Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>Author:
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </label>
        <label>Publish Date:
          <input type="text" value={publishDate} onChange={(e) => setPublishDate(e.target.value)} required />
        </label>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
