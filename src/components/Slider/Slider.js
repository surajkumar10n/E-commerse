import React, { useEffect, useState } from 'react';
import './Slider.css'; // Import CSS for styling

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    // Cleanup the interval to prevent memory leaks
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="slider-container">
      <button onClick={prevSlide} className="slide-button left-button">
        &lt;
      </button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="slider-image" />
      <button onClick={nextSlide} className="slide-button right-button">
        &gt;
      </button>
    </div>
  );
};

export default Slider;
