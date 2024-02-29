import React, { useState, useRef, useEffect} from "react";
import { Link } from "react-router-dom"; 
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../../slices/cartOverlaySlice";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  

  const dropdownRef = useRef(null);

  useEffect(() => {
    const closeDropdownOnOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("click", closeDropdownOnOutsideClick);

    return () => {
      document.removeEventListener("click", closeDropdownOnOutsideClick);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
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
            
            <li className="menu-item dropdown" ref={dropdownRef}>
              <a className="dropdown-toggle" onClick={toggleDropdown}>Category</a>
              {dropdownOpen && (
                <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <Link to="/category/men">Men</Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/category/women">Women</Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/category/jewelery">Jewelery</Link>
                  </li>
                </ul>
              )}
            </li>
            <div
              className="menu-item"
              onClick={() => {
                dispatch(toggleCart());
              }}
            >
              <a className="cart-icon-container">
                Cart
                <span className="cart-count">{cartItemCount}</span>
              </a>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
