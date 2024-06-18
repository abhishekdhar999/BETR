import React from 'react';

export default function Footer() {
  return (
    <div id='contact' className='all bg-[#e7eee6] p-6 md:p-12'>
      <div className='heading flex justify-center items-center my-4'>
        <h1 className='text-2xl md:text-3xl tag font-futura'>CONTACT</h1>
      </div>
      <div className='sub-heading flex justify-center items-center flex-col mb-6 md:mb-10'>
        <p className='text-base md:text-lg font-futura text-center'>
          Mail: connect@betrind.com
        </p>
        <p className='text-base md:text-lg font-futura text-center'>
          Address: 1st Floor, 07, Worldmark-1, Asset Area 11, Aerocity
        </p>
      </div>
    </div>
  );
}
