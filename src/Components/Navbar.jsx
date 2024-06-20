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
      <div className='entire-nav fixed w-full h-36 bg-white top-0 left-0'>
        <div className='logo flex justify-center pt-2'>
          <Link to={'/'}>
            <img src={Logo} alt="BETR Logo" className='w-20 h-20' />
          </Link>
        </div>
        <div className='navs my-2'>
          <ul className='flex justify-center items-center md:flex-row flex-col '>
            <li onClick={() => scrollToSection('about')} className='mx-8 text-gray-500 font-futura hover:cursor-pointer'>ABOUT.</li>
            <li onClick={() => scrollToSection('brands')} className='mx-8 text-gray-500 font-futura hover:cursor-pointer'>BRANDS.</li>
            <li onClick={() => scrollToSection('founders')} className='mx-8 text-gray-500 font-futura hover:cursor-pointer'>FOUNDERS.</li>
            <li onClick={() => scrollToSection('contact')} className='mx-8 text-gray-500 font-futura hover:cursor-pointer'>CONTACT.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
