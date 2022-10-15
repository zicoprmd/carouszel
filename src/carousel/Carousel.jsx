import React from 'react';
import CarouselItem from './CarouselItem';
import './Carousel.scss';

const Carousel = ({ slides }) => {
  return (
    <div className="carousel">
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <CarouselItem slide={slide} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
