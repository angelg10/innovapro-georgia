import React, { useState } from 'react';

const ImageSlider = ({ beforeImg, afterImg, beforeText, afterText }) => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleInput = (e) => {
    setSliderValue(e.target.value);
  };

  return (
    <div className="img-slider">
      <div className="img-container before" style={{ width: `${sliderValue}%` }}>
        <img src={beforeImg} alt="Before work" />
        <div className="slider-label before-label">{beforeText}</div>
      </div>
      <div className="img-container after">
        <img src={afterImg} alt="After work" />
        <div className="slider-label after-label">{afterText}</div>
      </div>
      <div className="slider-handle" style={{ left: `${sliderValue}%` }}></div>
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={sliderValue} 
        className="slider-input" 
        onInput={handleInput}
      />
    </div>
  );
};

export default ImageSlider;
