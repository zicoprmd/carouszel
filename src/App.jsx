import React from 'react';
import Carousel from './carousel/Carousel';

// import foto assets
const zemaUrl = new URL('./assets/zem5.JPG', import.meta.url).href;
const zema1 = new URL('./assets/zem6.JPG', import.meta.url).href;
const zema2 = new URL('./assets/zem7.JPG', import.meta.url).href;
const zema3 = new URL('./assets/zem8.JPG', import.meta.url).href;

function App() {
  const slides = [
    'http://localhost:5173/zem1.JPG',
    'http://localhost:5173/zem2.JPG',
    'http://localhost:5173/zem3.JPG',
    'http://localhost:5173/zem4.JPG',
    zemaUrl,
    zema1,
    zema2,
    zema3,
  ];

  return (
    <div className="container">
      <Carousel slides={slides} indicators controls />
    </div>
  );
}

export default App;
