import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <h1 className="website-name">FAKE STORE</h1>
        <ul className="menu">
          <li className="menu-item">
            <Link to="/">Home</Link>
          </li>
          
          <li className="menu-item">
            <Link to="/category/men">Men</Link>
          </li>
          <li className="menu-item">
            <Link to="/category/women">Women</Link>
          </li>
          <li className="menu-item">
            <Link to="/category/jewelery">Jewelery</Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
