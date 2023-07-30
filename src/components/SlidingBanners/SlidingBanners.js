import React, { useState } from 'react';
import './SlidingBanners.css'; // Import the CSS file for Sliding Banners

const SlidingBanners = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { imageUrl: '../.jpg', caption: 'Slide 1' },
    { imageUrl: 'path-to-image2.jpg', caption: 'Slide 2' },
    { imageUrl: 'path-to-image3.jpg', caption: 'Slide 3' },
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="sliding-banners">
      <div className="slides">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.imageUrl})` }}
          >
            <div className="caption">{slide.caption}</div>
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={handlePrevSlide}>&#8249;</button>
        <button onClick={handleNextSlide}>&#8250;</button>
      </div>
    </div>
  );
};

export default SlidingBanners;
