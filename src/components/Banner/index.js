import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Banner.scss";
function Banner() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="banner">
      <div className="banner-container">
        <div className="banner-carousel">
          <div className="banner-slider">
            <Slider {...settings}>
              <div className="banner-item">
                <img
                  src="https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/fold4-moi-sliding-0709.jpg"
                  alt=""
                />
              </div>
              <div className="banner-item">
                <img
                  src="https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/fold4-moi-sliding-0709.jpg"
                  alt=""
                />
              </div>
              <div className="banner-item">
                <img
                  src="https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/fold4-moi-sliding-0709.jpg"
                  alt=""
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner;
