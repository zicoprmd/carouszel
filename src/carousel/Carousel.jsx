import React from 'react';
import { useRef, useState, useEffect } from 'react';
import CarouselItem from './CarouselItem';
import CarouselControls from './CarouselControls';
import CarouselIndicators from './CarouselIndicators';

// scss
import './Carousel.scss';

const Carousel = ({
  slides,
  interval = 5000,
  controls = false,
  indicators = false,
}) => {
  const [currentSlide, setcurrentSlide] = useState(0);
  const slideInterval = useRef();

  const prev = () => {
    startSlideTimer();
    const index = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    setcurrentSlide(index);
  };

  const next = () => {
    startSlideTimer();
    const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    setcurrentSlide(index);
  };

  const switchIndex = (index) => {
    startSlideTimer();
    setcurrentSlide(index);
  };

  const startSlideTimer = () => {
    stopSlideTimer();
    slideInterval.current = setInterval(() => {
      setcurrentSlide((currentSlide) =>
        currentSlide < slides.length - 1 ? currentSlide + 1 : 0
      );
    }, interval);
  };

  const stopSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  useEffect(() => {
    startSlideTimer();

    return () => stopSlideTimer();
  }, []);

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(${-currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <CarouselItem
            slide={slide}
            key={index}
            stopSlide={stopSlideTimer}
            startSlide={startSlideTimer}
          />
        ))}
      </div>
      {indicators && (
        <CarouselIndicators
          slides={slides}
          currentIndex={currentSlide}
          switchIndex={switchIndex}
        />
      )}
      {controls && <CarouselControls prev={prev} next={next} />}
    </div>
  );
};

export default Carousel;
