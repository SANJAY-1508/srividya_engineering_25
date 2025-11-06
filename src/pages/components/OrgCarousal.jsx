import React from "react";
import Slider from "react-slick";
import { OrgList } from "../../datas/Datas";
const OrgCarousal = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplaySpeed: 2000,
    navigators: false,
  };
  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          {OrgList.map((item, index) => (
            <div key={index} className="org-carousel">
              <img src={item.src} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default OrgCarousal;
