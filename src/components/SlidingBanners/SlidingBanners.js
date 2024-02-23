import React, { useState } from "react";
import {
  SB1,
  SB2,
  SB3,
  SB4,
  SB5,
  SB6,
  SB7,
  SB8,
  SB9,
  SB10,
} from "../AllImages";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const SlidingBanners = () => {
  const bannerImagelist = [SB1, SB2, SB3, SB4, SB5, SB6, SB7, SB8, SB9, SB10];

  return (
    <Carousel autoPlay="true" infiniteLoop="true" dynamicHeight="false" width="100%" centerMode="true">
      {bannerImagelist.map((image) => {
        return (
          <div className="ad">
            <img  src={image} alt="slide 1" />
          </div>
        );
      })}
    </Carousel>
  );
};

export default SlidingBanners;
