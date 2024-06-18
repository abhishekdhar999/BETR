import React, { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const elements = aboutRef.current;

    if (elements) {
      const text3 = elements.querySelector('.texts');

      let ll = gsap.timeline({
        scrollTrigger: {
          trigger: text3,
          start: "top bottom",
          end: "bottom center",
          scrub: true,
          toggleActions: 'play none none none',
          // markers: true, 
        }
      });
      ll.fromTo(text3, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 2 });
    }
  }, []);

  return (
    <div ref={aboutRef} className='min-h-screen flex flex-col justify-center items-center py-20 px-0 mb-12'>
      <div className='group'>
        <div className='heading flex justify-center text-center items-center mb-14'>
          <h1 className='heading tag text-2xl md:text-4xl font-futura font-thin'>ABOUT</h1>
        </div>

        <div className='texts text-center mx-auto max-w-[90%] md:max-w-[82%] my-4'>
          <p className='page text-2xl md:text-5xl text-gray-800 font-futura font-light leading-tight'>
            Established in 2024. <span className='font-extrabold text-2xl md:text-5xl font-futura p-2 text-black'>BETR.</span> IndiaFoodworks is an innovative force poised to make significant strides across diverse F&B sectors.
          </p>
          <p className='page text-2xl md:text-5xl text-gray-800 font-futura font-light leading-tight'>
            The company envisions a dynamic presence in multiple
          </p>
          <p className='page text-2xl md:text-5xl text-gray-800 font-futura font-light leading-tight'>
            verticals the F&B sector has to offer.
          </p>
        </div>
      </div>

      <div className='detail flex justify-center items-center text-base md:text-lg my-12 h-auto'>
        <h1 className='w-auto font-futura font-light'>
          QSR.&nbsp;&nbsp;&nbsp;&nbsp;CDR.&nbsp;&nbsp;&nbsp;&nbsp;RETAIL.&nbsp;&nbsp;&nbsp;&nbsp;UQR.&nbsp;&nbsp;&nbsp;&nbsp;FINEDINE.&nbsp;&nbsp;&nbsp;&nbsp;D2C.
        </h1>
      </div>
    </div>
  );
}
