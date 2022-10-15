import React from 'react';
import { useState, useEffect } from 'react';
import CarouselItem from './CarouselItem';
import './Carousel.scss';

const Carousel = ({ slides }) => {
  const [currentSlide, setcurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setcurrentSlide((currentSlide) =>
        currentSlide < slides.length - 1 ? currentSlide + 1 : 0
      );
    }, 3000);
    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(${-currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <CarouselItem slide={slide} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
