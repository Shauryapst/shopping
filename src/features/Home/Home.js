import React from 'react';
// import SlidingBanners from '../../components/SlidingBanners/SlidingBanners';
import homeimage from '../../assets/home/6974874_4399.jpg'
import Footer from '../../components/Footer/Footer';

import './Home.css'; // Import the CSS file for Home

const Home = () => {
  return (
    <div className="home">
      <div className="image-container">
        <img src={homeimage} alt="Homepage" className="homepage-image" />
      </div>
      {/* <SlidingBanners /> */}
      <Footer/>
    </div>
  );
};

export default Home;
