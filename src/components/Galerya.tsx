import React from 'react';
import  CircularGallery  from './CircularGallery/CircularGallery';
import SplashCursor from './SplashCursor'


export const Galerya: React.FC = () => {
  return (
  
    <div style={{ height: '600px', position: 'relative' }}>
        <SplashCursor />
    <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
  </div>
  );
};