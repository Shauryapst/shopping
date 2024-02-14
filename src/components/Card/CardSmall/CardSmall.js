import React from "react";
import { Link } from 'react-router-dom';
import "./CardSmall.css";

const CardSmall = (props) => {
  return (
    <Link to={`/category/product/${props.data.id}`} className="product-card">
      <div className="product-image-container">
        <img src={props.data.image} alt="" className="product-image" />
      </div>
      <div className="product-details">
        <h2 className="product-title">{props.data.title}</h2>
        <p className="product-price">${props.data.price}</p>
        <div className="product-rating">
          {Array.from({ length: props.data.rating.rate }).map((_, index) => (
            <span key={index} className="star">
              &#9733;
            </span>
          ))}
        </div>
      </div>
      {/* <button className="add-to-cart-button">Add to Cart</button> */}
    </Link>
  );
};

export default CardSmall;
