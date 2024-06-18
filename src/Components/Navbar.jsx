import React from 'react';

import Logo from '../images/BETR logo.svg'; // Import your logo
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <>
      <div className='entire-nav my-6'>
        <div className='logo flex justify-center'>
          {/* Use img tag for logo */}
          <Link to={'/'}>
          <img src={Logo} alt="BETR Logo" className='w-20 h-20' />
          </Link>
        </div>

        <div className='navs my-4'>
          <ul className='flex justify-center items-center md:flex-row flex-col '>
            {/* About */}
            <Link to={'/about'}>
            <li className='mx-8 text-gray-500 font-futura'>ABOUT.</li>
            </Link>
            {/* Brands */}
            <Link to={'/brands'}>
           <li className='mx-8 text-gray-500 font-futura'>BRANDS.</li>
           </Link>
            {/* Founders */}
            <Link to={'/founders'}>
            <li className='mx-8 text-gray-500 font-futura'>FOUNDERS.</li>
            </Link>
            {/* Contact */}
            <Link to={'/footer'}> 
            <li className='mx-8 text-gray-500 font-futura'>CONTACT.</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
