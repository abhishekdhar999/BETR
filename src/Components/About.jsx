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
        }
      });
      ll.fromTo(text3, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 2 });
    }
  }, []);

  return (
    <div id='about' ref={aboutRef} className='min-h-screen flex flex-col justify-center items-center py-5 px-4 lg:px-0 bg-[#fcf5e8] md:pt-48 pt-60 my-5'>
      <div className='group w-full md:w-auto'>
        <div className='texts text-center mx-auto max-w-[90%] md:max-w-[82%] my-5 md:my-0'>
          <p className='page text-2xl md:text-5xl text-gray-800 font-futura font-light leading-tight'>
            Established in 2024. <span className='font-extrabold text-2xl md:text-5xl font-futura p-2 text-black'>BETR.</span> IndiaFoodworks is an innovative force poised to make significant strides across diverse F&B sectors. The company envisions a dynamic presence in multiple verticals the F&B sector has to offer.
          </p>
        </div>
      </div>

      <div className='detail flex justify-center items-center text-[10px] sm:text-lg my-12 h-auto w-auto overflow-hidden'>
        <h1 className='w-auto font-futura font-light '>
          QSR.&nbsp;&nbsp;&nbsp;&nbsp;CDR.&nbsp;&nbsp;&nbsp;&nbsp;RETAIL.&nbsp;&nbsp;&nbsp;&nbsp;UQR.&nbsp;&nbsp;&nbsp;&nbsp;FINEDINE.&nbsp;&nbsp;&nbsp;&nbsp;D2C.
        </h1>
      </div>
    </div>
  );
}
