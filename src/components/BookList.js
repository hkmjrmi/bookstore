import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'; // Changed import statement
import '../styles/booklist.css'; // Import CSS file for component styling

const BookList = () => {
  const [books, setBooks] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate(); // Changed from useHistory

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
      setBooks(books.filter((book) => book.id !== id));
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/bookstore/edit/${id}`); // Changed from history.push
  };

  const handleDetails = (id) => {
    navigate(`/bookstore/detail/${id}`); // Changed from history.push
  };

  return (
    <div className="book-list-container">
      <h1>Books</h1>
      <ul className="book-list">
        {books.map((book) => (
          <li key={book.id} className="book-item">
            <div>
              <h2>{book.name}</h2>
              <img src={require('../assets/images.png')}  alt="Book Cover" />
              <p>
              by <strong>{book.author}</strong> 
              </p>
              <p>
                <strong>Published on:</strong> {book.publish_date}
              </p>
            </div>
            <div className="book-actions">
              <button onClick={() => handleEdit(book.id)} className="action-button">
                Edit
              </button>
              <button onClick={() => handleDelete(book.id)} className="action-button">
                Delete
              </button>
              <button onClick={() => handleDetails(book.id)} className="action-button">
                Details
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
