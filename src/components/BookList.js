import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/books');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <div>
              <h2>{book.name}</h2>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Published on:</strong> {book.publish_date}</p>
            </div>
            <div>
              <Link to={`/library/edit/${book.id}`}>Edit</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
