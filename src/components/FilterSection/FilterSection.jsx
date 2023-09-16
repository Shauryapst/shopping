import React, {useState } from 'react'
import './FilterSection.css';

export const FilterSection = (props) => {
  console.log(props.handleSliderChange());
   const [sliderValue, setSliderValue] = useState(1000);
   const handleSliderChange = (newValue) => {
    setSliderValue(newValue);
  };
  return (
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
          <div>
            asdfasfa
            adsf
            ad
            fa
            df
            asdf
            a
            dfas
            fa
            sd
            asd
            fa
            s
          </div>
        </div>
  )
}
