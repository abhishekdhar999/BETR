import React from 'react'

import img_org from '../images/unviealing_soon-removebg-preview.png'
import img from '../images/LIMITED_TIME_ONLY-removebg-preview.png'
import '../App.css';
export default function Brands() {
  return (
    <>
      
      <div className='all md:my-auto mt-[280px] h-[70vh]'>

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
<h1 className='text-xl text-gray-500 font-futura'>LAUNCHING MINDFUL</h1>
<h1 className='text-xl text-gray-500 font-futura'>FOOD BRANDS</h1>
<h1 className='text-xl text-gray-500 font-futura'>ACROSS DELHI NCR</h1>
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
