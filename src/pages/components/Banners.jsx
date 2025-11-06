import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import {bannerImages} from '../../datas/Datas';

const Banners = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Carousel fade interval={3000} indicators={false} controls={false}>
      {bannerImages.map((item, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={isMobile ? item.mobileSrc : item.src}
            alt={`Slide ${index + 1}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Banners;
