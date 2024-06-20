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
    <div className="flex justify-center items-center h-screen bg-[#FFB333] md:mt-0 mt-6  p-4 sm:p-8" >
      <div className="text-center flex flex-col sm:flex-row items-center" >
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-futura mx-4">
          ON A MISSION TO MAKE
        </h1>
        <img src={svgImages[currentImageIndex]} alt="SVG" className="h-40 sm:h-48 lg:h-56 mx-4" />
        <img src={logo} alt="Logo" className="h-8 sm:h-12 lg:h-16 mx-4" />
      </div>
    </div>
  );
}
