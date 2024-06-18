import React from 'react';

import Logo from '../images/BETR logo.svg'; // Import your logo
import { Link } from 'react-router-dom';
export default function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
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
            {/* <Link to={'/about'}> */}
            <li onClick={() => scrollToSection('about')} className='mx-8 text-gray-500 font-futura hover:cursor-pointer'>ABOUT.</li>
            {/* </Link> */}
            {/* Brands */}
            {/* <Link  to={'/brands'}> */} 
           
           <li  onClick={() => scrollToSection('brands')} className='mx-8 text-gray-500 font-futura hover:cursor-pointer'>BRANDS.</li>
           {/* </Link> */}
            {/* Founders */}
            {/* <Link  to={'/founders'}> */}
            <li onClick={() => scrollToSection('founders')} className='mx-8 text-gray-500 font-futura hover:cursor-pointer'>FOUNDERS.</li>
            {/* </Link> */}
            {/* Contact */}
            {/* <Link  to={'/footer'}>  */}
            <li onClick={() => scrollToSection('contact')} className='mx-8 text-gray-500 font-futura hover:cursor-pointer'>CONTACT.</li>
            {/* </Link> */}
          </ul>
        </div>
      </div>
    </>
  );
}
