import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from 'react-redux'
import { toggleCart } from "../../slices/cartOverlaySlice";


const Cart = () => {
  const isOpen = useSelector((state) => state.cartToggle.value)
  const cartList = useSelector((state) => state.cart);
  console.log(cartList);
  const dispatch = useDispatch()
  return (
    <div className={`cart-overlay ${isOpen ? "open" : ""}`}>
     
      <div className="cart-content">
        <h2>Cart Details</h2>
        <p>Item 1</p>
        <p>Item 2</p>
        <p>Item 3</p>
         <button onClick={()=> dispatch(toggleCart())}>X</button>
      </div>
     
      
    </div>
  );
};

export default Cart;
