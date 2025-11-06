import React from "react";
import Slider from "react-slick";
import { PlacementList } from "../../datas/Datas";

const Events = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {PlacementList.map((item, index) => (
          <div key={index} className="acheivers-box">
            <img src={item.src} alt={item.name} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Events;
