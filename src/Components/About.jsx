import React from 'react'
import gsap from "gsap";
import { useEffect } from 'react';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger,); 
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
                //  markers: true, 
            }
        })
        ll.fromTo(text3,{x:-400,opacity:0,duration:10},{opacity:1,x:0})
        }
      }, []);
  return (
    <>
      <div ref={aboutRef} className='all  sm:my-28 my-48 h-[70vh] flex justify-center items-center'>
<div>
        <div className='heading flex justify-center text-center items-center mb-8 '>
            <h1 className='heading tag text-3xl font-futura font-thin'>ABOUT</h1>
        </div>
       
        <div className='texts text-center mx-auto max-w-2xl '>
      <p className='page text-3xl text-gray-800 font-futura'>
        Established in 2024. <span className='font-bold text-4xl font-futura p-2 text-black'>BETR.</span> IndiaFoodworks is an innovative force poised to make significant strides across diverse F&B sectors. The company envisions a dynamic presence in multiple verticals the F&B sector has to offer.
      </p>
    </div>

        <div className='detail flex justify-center items-center text-sm my-8 '>
            
                <h1 className='w-auto'>QSR. CDR. RETAIL. UQR. FINEDINE. D2C.</h1>
            
        </div>

        </div>
      </div>
    </>
  )
}
