import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./TopBar.scss";
function TopBar() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="topbar">
      <div className="container topbar-container">
        <div className="topbar-language">
          <div className="country-img"></div>
          <span className="country-name">VI</span>
          <span className="language-name">EN</span>
        </div>
        <div className="topbar-carousel">
          <div className="topbar-slider">
            <Slider {...settings}>
              <div>Get the gift that always fits. Digital Gift Cards.</div>
              <div>Fast, Free Shipping. Orders over €65 ship for free.</div>
              <div>Students get 15% off! Sign in or sign up now!</div>
              <div>30 Days Free Returns! See Details.</div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TopBar;
