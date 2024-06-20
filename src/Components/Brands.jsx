import React, { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img from '../images/Brands (1).svg';
import '../App.css';

gsap.registerPlugin(ScrollTrigger);

export default function Brands() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const elements = aboutRef.current;

    if (elements) {
      const outletsText = elements.querySelector('.outlets');
      const textElements = elements.querySelectorAll('.texts1, .texts2, .texts3');
      const imageElement = elements.querySelector('.brand-image');

      // Animation for text elements
      gsap.timeline({
        scrollTrigger: {
          trigger: outletsText,
          start: "top bottom",
          end: "bottom center",
          scrub: true,
          toggleActions: 'play none none none',
        }
      }).fromTo(outletsText, { opacity: 0 }, { opacity: 1, duration: 1 });

      gsap.fromTo(textElements, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, scrollTrigger: { trigger: textElements, start: "top bottom", end: "bottom center", scrub: true, toggleActions: 'play none none none' } });

      // Animation for the image
      gsap.fromTo(imageElement, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1, scrollTrigger: { trigger: imageElement, start: "top bottom", end: "bottom center", scrub: true, toggleActions: 'play none none none' } });
    }
  }, []);

  return (
    <div id='brands' ref={aboutRef} className='min-h-screen flex justify-center items-center py-20 px-4 lg:px-0 overflow-hidden '>
      <div className='all  md:my-24 md:mt-[80px] mt-[180px] h-[70vh]'>
        <div className='flex justify-center items-center h-full md:flex-row flex-col'>
          <div className='left mx-24'>
            <div className='year bg-orange-600 w-32 flex justify-center rounded-full p-2 h-10 items-center'>
              <h1 className='text-white text-xl font-futura' style={{ fontWeight: 100 }}>YEAR 2024</h1>
            </div>
            <div className='heading'>
              <p className='outlets text-6xl md:text-8xl font-futura' style={{ fontWeight: 100 }}>12+ OUTLETS</p>
            </div>
            <div className='bg-[#f2ea3e] h-1 mx-0'></div>
            <div className='sub-heading mx-2 my-2'>
              <p className='texts1 text-2xl md:text-4xl text-gray-500 font-futura' style={{ fontWeight: 100 }}>LAUNCHING MINDFUL</p>
              <p className='texts2 text-2xl md:text-4xl text-gray-500 font-futura' style={{ fontWeight: 100 }}>FOOD BRANDS</p>
              <p className='texts3 text-2xl md:text-4xl text-gray-500 font-futura' style={{ fontWeight: 100 }}>ACROSS DELHI NCR</p>
            </div>
            
          </div>
          
          <div className='right md:my-0 my-8'>
            <img className='brand-image sm:h-[400px] sm:w-[500px] h-[200px] w-[300px] md:h-[500px] md:w-[600px] max-w-full' src={img} alt="Brands" />
          </div>
        </div>
      </div>
    </div>
  );
}
