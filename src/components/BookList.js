import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import './BookList.css'; // Import CSS file for component styling

const BookList = () => {
  const [books, setBooks] = useState([]);
  const { id } = useParams();

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
  }, [id]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/books/${id}`);
      setBooks(books.filter(book => book.id !== id));
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div className="book-list-container">
      <h1>Books</h1>
      <ul className="book-list">
        {books.map((book) => (
          <li key={book.id} className="book-item">
            <div>
              <h2>{book.name}</h2>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Published on:</strong> {book.publish_date}</p>
            </div>
            <div className="book-actions">
              <Link to={`/bookstore/edit/${book.id}`} className="action-link">Edit</Link>
              <button onClick={() => handleDelete(book.id)} className="action-button">Delete</button>
              <Link to={`/bookstore/detail/${book.id}`} className="action-link">Details</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
