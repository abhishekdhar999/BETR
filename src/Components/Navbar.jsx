import React from 'react';

import Logo from '../images/BETR logo.svg'; // Import your logo

export default function Navbar() {
  return (
    <>
      <div className='entire-nav my-6'>
        <div className='logo flex justify-center'>
          {/* Use img tag for logo */}
          <img src={Logo} alt="BETR Logo" className='w-20 h-20' />
        </div>

        <div className='navs my-4'>
          <ul className='flex justify-center items-center md:flex-row flex-col '>
            {/* About */}
            <li className='mx-8 text-gray-500 font-futura'>ABOUT.</li>
            {/* Brands */}
            <li className='mx-8 text-gray-500 font-futura'>BRANDS.</li>
            {/* Founders */}
            <li className='mx-8 text-gray-500 font-futura'>FOUNDERS.</li>
            {/* Contact */}
            <li className='mx-8 text-gray-500 font-futura'>CONTACT.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
