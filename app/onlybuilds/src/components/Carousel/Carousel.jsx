import React, { useState, useEffect } from "react";
import "./Carousel.css";

const Carousel = (props) => {
  const { images } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextClick();
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  const handlePreviousClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="carousel">
      <div className="carousel-image-container">
        <img
          src={images[currentIndex]}
          alt="Current slide"
          className="carousel-image"
        />
      </div>
    </div>
  );
};

export default Carousel;
