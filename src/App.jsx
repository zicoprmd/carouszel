import { useState } from 'react';
import React from 'react';
import Carousel from './carousel/Carousel';

// import foto assets

function App() {
  const slides = [
    'http://localhost:5173/zem1.JPG',
    'http://localhost:5173/zem6.JPG',
    'http://localhost:5173/zem7.JPG',
    'http://localhost:5173/zem8.JPG',
  ];

  return (
    <div className="container">
      <Carousel slides={slides} />
    </div>
  );
}

export default App;
