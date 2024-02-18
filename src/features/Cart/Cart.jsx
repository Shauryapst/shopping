import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../../slices/cartOverlaySlice";
import CartItem from "../../components/CartItem/CartItem";

const Cart = () => {
  const isOpen = useSelector((state) => state.cartToggle.value);
  const cartData = useSelector((state) => state.cart);
  const cartItems = cartData.cartItems;

  const totalPrice = Object.values(cartItems).reduce(
    (total, item) => total + item.price * item.count,
    0
  );

  const dispatch = useDispatch();

  return (
    <div className={`cart-overlay ${isOpen ? "open" : ""}`}>
      <div className="cart-content">
        <h2>Cart Details</h2>
        <button className="cancel-btn" onClick={() => dispatch(toggleCart())}>
          X
        </button>
        <div className="cart-items">
          {Object.keys(cartItems).map((id) => (
            <CartItem
              key={id}
              imageUrl={cartItems[id].image}
              quantity={cartItems[id].count}
              price={cartItems[id].price}
              title={cartItems[id].title}
            />
          ))}
        </div>
        <div className="total-price">Total Price: ${totalPrice.toFixed(2)}</div>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
