import React, { useEffect, useState } from "react";
import CardSmall from "../Card/CardSmall/CardSmall";
import apiHelper from "../../helper/api.helper";
import "./CategoryPage.css";

const CategoryPage = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sliderValue, setSliderValue] = useState(1000);
  const handleSliderChange = (newValue) => {
    setSliderValue(newValue);
  };




  const getData = async () => {
    try {
      const response = await apiHelper.sendFake({
        url: `/products/category/${props.category}`,
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
        console.error(`Error fetching ${props.category} data:`, error);
      });
  
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="wrapper">
      <div className="category-page">
        <div className="category-section">
          {data
            .filter((item) => item.price < sliderValue)
            .map((item) => (
              <CardSmall key={item.id} data={item} />
            ))}
        </div>
        <div className="filter-section">
          <label htmlFor="price-slider">Price Range:</label>
          <input
            type="range"
            id="price-slider"
            min={0}
            max={1000}
            value={sliderValue}
            step={0.1}
            onChange={(e) => handleSliderChange(parseInt(e.target.value))}
          />
          <span>${sliderValue}</span>
          <div>asdfasfa adsf ad fa df asdf a dfas fa sd asd fa s</div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
