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
          {/* <li className="menu-item">
            <Link to="/all">All</Link>
          </li> */}
          
          <li className="menu-item">
            <Link to="/men">Men</Link>
          </li>
          <li className="menu-item">
            <Link to="/women">Women</Link>
          </li>
          <li className="menu-item">
            <Link to="/jewelery">Jewelery</Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
