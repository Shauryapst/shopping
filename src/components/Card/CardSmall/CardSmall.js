import React from 'react';
import "./CardSmall.css";

function CardSmall() {
  return (
    <div class="product-card">
        <img src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" alt="" class="product-image"/>
        <div class="product-details">
            <h3 class="product-name">Product Name</h3>
            <p class="product-price">$19.99</p>
        </div>
    </div>
  )
}

export default CardSmall;