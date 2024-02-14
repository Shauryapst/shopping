import React, {useState, useEffect} from 'react';
import apiHelper from "../../helper/api.helper";
import "./ProductPage.css";

const ProductPage = (props) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const response = await apiHelper.sendFake({
        url: `/products/${props.id}`,
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
    <div>ProductPage</div>
  )
}

export default ProductPage