import React, { useState, useEffect } from 'react';
import logo from '../images/BETR logo.svg'; // Adjust the path to your SVG file as needed
import svgImage1 from '../images/betr website-11.svg'; // Path to your first SVG image
import svgImage2 from '../images/betr website-12.svg'; // Path to your second SVG image
import svgImage3 from '../images/betr website-13.svg'; // Path to your third SVG image

export default function LandingPage() {
  const svgImages = [svgImage1, svgImage2, svgImage3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % svgImages.length);
    }, 2000); // Change the interval duration as needed (2000ms = 2 seconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-[#f2ea3e]">
      <div className="text-center flex items-center">
        <h1 className="text-5xl sm:text-7xl font-futura  mx-4">
          ON A MISSION TO MAKE
        </h1>
        <img src={svgImages[currentImageIndex]} alt="SVG Image" className="h-24 sm:h-32 mx-4" />
        <img src={logo} alt="Logo" className="h-12 sm:h-16 mx-4" />
      </div>
    </div>
  );
}
