import React from "react";
import Slider from "react-slick";
import { PlacementList } from "../../datas/Datas";

// ⚠️ Make sure these CSS imports are present:
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Placement = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3, // default for large screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,

   responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {PlacementList.map((item, index) => (
          <div key={index} className="acheivers-box">
            <img src={item.src} alt={item.name} />
            <div className="placed-content">
              <h5 className="white bold-font mb-0">{item.name}</h5>
              <p className="regular-font mb-0">{item.position}</p>
              <p className="regular-font mb-0">{item.company}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Placement;
