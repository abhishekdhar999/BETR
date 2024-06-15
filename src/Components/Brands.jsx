import React from 'react'
import gsap from "gsap";
import { useEffect } from 'react';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';
import img_org from '../images/unviealing_soon-removebg-preview.png'
import img from '../images/LIMITED_TIME_ONLY-removebg-preview.png'
import '../App.css';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger,); 

export default function Brands() {
    const aboutRef = useRef(null);

    useEffect(() => {
        const elements = aboutRef.current;
    
        if (elements) {
         
          const line1 = elements.querySelector('.texts1');
            const line2 = elements.querySelector('.texts2');
            const line3 = elements.querySelector('.texts3');
        let ll = gsap.timeline({
            scrollTrigger: {
                trigger: line1,
                start: "top bottom",
                end: "bottom center",
                scrub: true,
                toggleActions: 'play none none none',
                //  markers: true, 
            }
        })
        ll.fromTo(line1,{x:-400,opacity:0,duration:10},{opacity:1,x:0})


        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: line2,
                start: "top bottom",
                end: "bottom center",
                scrub: true,
                toggleActions: 'play none none none',
                //  markers: true, 
            }
        })
        tl.fromTo(line2,{x:-400,opacity:0,duration:10},{opacity:1,x:0})

        let ttl = gsap.timeline({
            scrollTrigger: {
                trigger: line3,
                start: "top bottom",
                end: "bottom center",
                scrub: true,
                toggleActions: 'play none none none',
                //  markers: true, 
            }
        })
        ttl.fromTo(line3,{x:-400,opacity:0,duration:10},{opacity:1,x:0})
        }
        
        

        

      }, []);


  return (
    <>
      
      <div ref={aboutRef} className=' all md:my-auto mt-[280px] h-[70vh]'>

<div className='flex justify-center items-center h-full md:flex-row flex-col '>
        <div className='left mx-24'>
            <div className='year bg-orange-600 w-24 flex justify-center rounded-full p-2 h-5 items-center'>
                    <h1 className='text-white text-sm font-futura'>YEAR 2024</h1>
            </div>
           <div className='heading'>
            <h1 className='text-6xl font-light text-auto'>12+ OUTLETS</h1>
           </div>
           <div className='bg-[#f2ea3e] h-1 mx-0'></div>
           <div className='sub heading mx-2 my-2'>
<h1 className='texts1 text-xl text-gray-500 font-futura'>LAUNCHING MINDFUL</h1>
<h1 className='texts2 text-xl text-gray-500 font-futura'>FOOD BRANDS</h1>
<h1 className='texts3 text-xl text-gray-500 font-futura'>ACROSS DELHI NCR</h1>
           </div>
           <div className=''>
            <p className=' text-[11px] mx-2 font-futura'>IN 3RD QUARTER OF 2024</p>
           </div>
           <div className='bg-orange-600 h-1 w-36 mx-2'></div>
        </div>
        
<div className='right md:my-0 my-8'>

    <img className='sm:h-[600px] sm:w-[700px] h-[300px] w-[400px]' src={img}  alt="" />
</div>

</div> 


      </div>
    </>
  )
}
