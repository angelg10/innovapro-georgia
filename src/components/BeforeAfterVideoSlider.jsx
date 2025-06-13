import React, { useState, useRef, useEffect } from 'react';

export const BeforeAfterVideoSlider = ({ 
  beforeVideo, 
  afterVideo, 
  beforeLabel, 
  afterLabel 
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const beforeVideoRef = useRef(null);
  const afterVideoRef = useRef(null);

  // Sincroniza la reproducción de ambos videos
  useEffect(() => {
    const syncVideos = () => {
      if (beforeVideoRef.current && afterVideoRef.current) {
        const masterTime = beforeVideoRef.current.currentTime;
        if (Math.abs(afterVideoRef.current.currentTime - masterTime) > 0.1) {
          afterVideoRef.current.currentTime = masterTime;
        }
      }
    };

    const intervalId = setInterval(syncVideos, 100); // Sincroniza 10 veces por segundo
    return () => clearInterval(intervalId);
  }, []);


  const handleInteractionStart = (e) => {
    setIsDragging(true);
    if (e.preventDefault) e.preventDefault();
  };

  const handleInteractionEnd = () => {
    setIsDragging(false);
  };

  const handleInteractionMove = (clientX) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => handleInteractionMove(e.clientX);
    const handleTouchMove = (e) => handleInteractionMove(e.touches[0].clientX);

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleInteractionEnd);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleInteractionEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleInteractionEnd);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleInteractionEnd);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-4xl mx-auto h-80 md:h-[500px] rounded-lg overflow-hidden shadow-xl cursor-col-resize select-none bg-black"
      onMouseDown={handleInteractionStart}
      onTouchStart={handleInteractionStart}
    >
      {/* Before Video */}
      <div className="absolute inset-0">
        <video
          ref={beforeVideoRef}
          src={beforeVideo}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline // Importante para iOS
        />
        <div className="absolute top-4 left-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded text-sm font-semibold">
          {beforeLabel}
        </div>
      </div>

      {/* After Video */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <video
          ref={afterVideoRef}
          src={afterVideo}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute top-4 right-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded text-sm font-semibold">
          {afterLabel}
        </div>
      </div>

      {/* Slider Line */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)', cursor: 'col-resize' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="w-6 h-6 bg-gradient-to-r from-[#ffde59] to-[#ff914d] rounded-full"></div>
        </div>
      </div>
    </div>
  );
};