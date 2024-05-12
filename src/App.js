import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';
import BookDetail from './components/BookDetail'; // Import BookDetail component

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/bookstore" element={<BookList />} />
          <Route path="/bookstore/add" element={<AddBook />} />
          <Route path="/bookstore/edit/:id" element={<EditBook />} />
          <Route path="/bookstore/detail/:id" element={<BookDetail />} /> {/* Add route for BookDetail */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
