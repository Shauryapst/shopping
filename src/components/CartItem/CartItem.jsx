import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./CartItem.css";

const CartItem = ({ imageUrl, price, title, quantity }) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
  };

  const handleDecrement = () => {
  };

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="cart-item-details">
        <div className="cart-item-title">{title}</div>
        <div className="price-and-count">
          <p className="cart-item-price">${price}</p>
          <div className="add-del-counter">
            <button onClick={handleDecrement}>-</button>
            <p className="quantity">{quantity}</p>
            <button onClick={handleIncrement}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
