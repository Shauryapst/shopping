import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import apiHelper from "../../helper/api.helper";
import "./ProductPage.css";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from "../../slices/cartSlice";

const ProductPage = () => {
  const dispatch = useDispatch();
  let { catergoryName, productId } = useParams();
  const [count, setCount] = useState(1);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleMinus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const handlePlus = () => {
    setCount(count + 1);
  };

  const handleAddToCart = () => {
    console.log('Product added to cart:', count);
    dispatch(addToCart(
      {
        ...data, quantity: count
      }));
  };

  const getData = async () => {
    try {
      const response = await apiHelper.sendFake({
        url: `/products/${productId}`,
        method: "get",
      });
      return response;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    getData()
      .then((responseData) => {
        setData(responseData);
      })
      .catch((error) => {
        // console.error(`Error fetching ${props.category} data:`, error);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="product-page">
      <div className="product-wrapper">
        <div className="image-section">
          <div className="image-container">
            <img src={data.image} alt="" className="product-image" />
          </div>
        </div>
        <div className="detail-section">
          <div className="title">{data.title}</div>
          <div className="description">{data.description}</div>
          <div className="product-actions">
            <div className="price">${data.price}</div>
            <div className="product-operation">
              <div className="product-add-del-count">
                <button onClick={handleMinus}>-</button>
                <p className="quantity">{count}</p>
                <button onClick={handlePlus}>+</button>
              </div>
              <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
            </div>
          </div>

          {/* <>{data.rating.rate}</> */}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
