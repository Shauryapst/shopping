import React, { useEffect, useState } from 'react';
// import SlidingBanners from '../../components/SlidingBanners/SlidingBanners';
import homeimage from '../../assets/home/6974874_4399.jpg'


import './Home.css'; // Import the CSS file for Home

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false); 
  const [blurredImageLoaded, setBlurredImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = homeimage;
    img.onload = () => {
      setImageLoaded(true);
    };

    const blurredImg = new Image();
    blurredImg.src = "https://placehold.co/600x400";
    blurredImg.onload = () => {
      setBlurredImageLoaded(true);
    };
  }, []);
  return (
    <div className="home">
      <div className="image-container">
      {imageLoaded ? (
          <img src={homeimage} alt="Homepage" className="homepage-image" />
        ) : (
          blurredImageLoaded && (
            <img
              src="https://placehold.co/600x400"
              alt="Homepage (Blurred)"
              className="homepage-image"
            />
          )
        )}
      </div>
      {/* <SlidingBanners /> */}
 
    </div>
  );
};

export default Home;
