import React, { useEffect, useState } from 'react';
import CardSmall from '../../components/Card/CardSmall/CardSmall';
import apiHelper from '../../helper/api.helper';
import './Men.css'

const Men = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getMenData = async () => {
    try {
      const response = await apiHelper.sendFake({ url: `/products/category/jewelery`, method: 'get' });
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
    getMenData()
      .then((responseData) => {
        setData(responseData);
      })
      .catch((error) => {
        console.error('Error fetching men data:', error);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='product-page'>
      <div className='product-section'>
        {data.map((item) => (
          <CardSmall key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Men;
