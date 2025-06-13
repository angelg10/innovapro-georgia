import React, { useState, useRef, useEffect, useCallback } from 'react';

export const BeforeAfterVerticalVideo = ({
  beforeVideo,
  afterVideo,
  beforeLabel,
  afterLabel
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isVertical, setIsVertical] = useState(window.innerWidth < 768);
  const containerRef = useRef(null);

  const checkScreenSize = useCallback(() => {
    setIsVertical(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [checkScreenSize]);

  const handleInteractionMove = useCallback((clientX, clientY) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    let percentage;

    if (isVertical) {
      const y = clientY - rect.top;
      percentage = Math.max(0, Math.min(100, (y / rect.height) * 100));
    } else {
      const x = clientX - rect.left;
      percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    }
    setSliderPosition(percentage);
  }, [isDragging, isVertical]);

  useEffect(() => {
    const handleMouseMove = (e) => handleInteractionMove(e.clientX, e.clientY);
    const handleTouchMove = (e) => e.touches[0] && handleInteractionMove(e.touches[0].clientX, e.touches[0].clientY);
    const handleInteractionEnd = () => setIsDragging(false);

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('mouseup', handleInteractionEnd);
      document.addEventListener('touchend', handleInteractionEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('mouseup', handleInteractionEnd);
      document.removeEventListener('touchend', handleInteractionEnd);
    };
  }, [isDragging, handleInteractionMove]);

  const handleInteractionStart = (e) => {
    setIsDragging(true);
    if (e.preventDefault) e.preventDefault();
  };

  const beforeVideoStyle = isVertical
    ? { clipPath: `polygon(0 0, 100% 0, 100% ${sliderPosition}%, 0 ${sliderPosition}%)` }
    : { clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` };

  const sliderStyle = isVertical
    ? { top: `${sliderPosition}%` }
    : { left: `${sliderPosition}%` };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-lg mx-auto rounded-lg overflow-hidden shadow-xl select-none bg-black md:max-w-4xl cursor-pointer"
      style={{ aspectRatio: isVertical ? '9 / 16' : '16 / 9' }}
      onMouseDown={handleInteractionStart}
      onTouchStart={handleInteractionStart}
    >
      {/* Video "Después" - Capa base, siempre visible debajo */}
      <div className="absolute inset-0">
        <video src={afterVideo} className="w-full h-full object-cover" autoPlay loop muted playsInline />
        <div className="absolute top-4 right-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded text-sm font-semibold z-10">
          {afterLabel}
        </div>
      </div>

      {/* Video "Antes" - Capa superior que se recorta */}
      <div
        className="absolute inset-0"
        style={beforeVideoStyle}
      >
        <video src={beforeVideo} className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted playsInline />
        <div className="absolute top-4 left-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded text-sm font-semibold z-10">
          {beforeLabel}
        </div>
      </div>

      {/* Deslizador (Línea y Botón) */}
      <div
        className={`absolute z-20 pointer-events-none ${isVertical ? 'w-full h-1 left-0' : 'h-full w-1 top-0'}`}
        style={sliderStyle}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 rounded-full shadow-lg flex items-center justify-center backdrop-blur-sm">
          <div className={`w-3 h-6 flex items-center justify-between ${isVertical ? 'rotate-90' : ''}`}>
            <div className='w-px h-full bg-gray-600'></div>
            <div className='w-px h-full bg-gray-600'></div>
          </div>
        </div>
      </div>
    </div>
  );
};
