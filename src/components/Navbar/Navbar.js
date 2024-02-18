import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../../slices/cartOverlaySlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const cartItemCount = useSelector((state) => state.cart.count);
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <h1 className="website-name">FAKE STORE</h1>
        <div className="">
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
            <div
              className="menu-item"
              onClick={() => {
                dispatch(toggleCart());
              }}
            >
              <a class="cart-icon-container">
                Cart
                <span class="cart-count">{cartItemCount}</span>
              </a>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
