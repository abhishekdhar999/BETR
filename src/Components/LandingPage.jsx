import React from 'react'
import { useState,useEffect } from 'react';
export default function LandingPage() {
    const dynamicNames = [ "INDIA","FOOD", "PLACE", "MUSIC", "COLOR"];
  const [currentNameIndex, setCurrentNameIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNameIndex((prevIndex) => (prevIndex + 1) % dynamicNames.length);
    }, 2000); // Change the interval duration as needed (2000ms = 2 seconds)

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div class="flex justify-center items-center h-[560px] bg-[#f2ea3e] my-auto">
  <div >
  <h1 className="text-4xl mx-2 flex sm:flex-row flex-col font-futura">ON A MISSION TO MAKE <div className="text-6xl font-caveat  mx-8 w-[150px] ">{dynamicNames[currentNameIndex]}</div> <div className="font-extrabold text-4xl font-futura">BETR.</div></h1>
   


  </div>
</div>
    </>
  )
}
