import React from "react";
import "./CardSmall.css";

const CardSmall = (props) => {
  
  return (
    
    <div class="product-card">
      <img
        src={props.data.image}
        alt=""
        class="product-image"
      />
      <div class="product-details">
        <h3 class="product-name">{props.data.title}</h3>
        <p class="product-price">${props.data.price}</p>
      </div>
    </div>
  );
}

export default CardSmall;
