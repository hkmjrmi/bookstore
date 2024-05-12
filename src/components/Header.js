import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import '../styles/header.css'; // Importing CSS file

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <span>Hakim's Bookstore</span>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/bookstore">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/categories">Categories</Link>
          </li>
          <li className="nav-item">
            <Link to="/authors">Authors</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
