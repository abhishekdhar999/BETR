import React from 'react'

export default function Navbar() {
  return (
    <>
    <div className='entire-nav my-6' >
     
      <div className='logo flex justify-center '>
        <h1 className=' font-extrabold text-4xl font-futura '>BETR.</h1>
      </div>
 
 <div className='navs my-4'>
    <ul className='flex justify-center items-center md:flex-row flex-col '>
        <li className='mx-8  text-gray-500 font-futura'>About</li>
        <li className='mx-8 text-gray-500 font-futura'>Brands</li>
        <li className='mx-8 text-gray-500 font-futura'>Founders</li>
        <li className='mx-8 text-gray-500 font-futura'>Contact</li>
    </ul>
 </div>

      </div>
    </>
  )
}
