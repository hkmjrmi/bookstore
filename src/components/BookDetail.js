import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/books/${id}`);
        setBook(response.data);
      } catch (error) {
        console.error('Error fetching book:', error);
      }
    };

    fetchBook();
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Book Details</h1>
      <div>
        <h2>{book.name}</h2>
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Published on:</strong> {book.publish_date}</p>
      </div>
    </div>
  );
};

export default BookDetail;
