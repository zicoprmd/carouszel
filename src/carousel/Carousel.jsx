import React from 'react';
import { useState, useEffect } from 'react';
import CarouselItem from './CarouselItem';
import CarouselControls from './CarouselControls';
import './Carousel.scss';

const Carousel = ({ slides }) => {
  const [currentSlide, setcurrentSlide] = useState(0);

  const prev = () => {
    const index = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    setcurrentSlide(index);
  };

  const next = () => {
    const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    setcurrentSlide(index);
  };

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
      <CarouselControls prev={prev} next={next} />
    </div>
  );
};

export default Carousel;
