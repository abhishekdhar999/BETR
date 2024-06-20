import React, { useState } from 'react';
import Logo from '../images/BETR logo.svg'; // Import your logo
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState(null);
  const [underlineStyle, setUnderlineStyle] = useState({});

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const rect = element.getBoundingClientRect();
      setUnderlineStyle({
        width: `${rect.width}px`,
        left: `${rect.left}px`
      });
      setActiveLink(id); // Set the active link based on the clicked section
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
        <div className='navs my-2 relative'>
          <ul className='flex justify-center items-center md:flex-row flex-col '>
            <li
              onClick={() => scrollToSection('about')}
              className={`mx-8 text-gray-500 font-futura hover:cursor-pointer ${activeLink === 'about' ? 'text-yellow-500' : ''}`}
            >
              ABOUT.
            </li>
            <li
              onClick={() => scrollToSection('brands')}
              className={`mx-8 text-gray-500 font-futura hover:cursor-pointer ${activeLink === 'brands' ? 'text-yellow-500' : ''}`}
            >
              BRANDS.
            </li>
            <li
              onClick={() => scrollToSection('founders')}
              className={`mx-8 text-gray-500 font-futura hover:cursor-pointer ${activeLink === 'founders' ? 'text-yellow-500' : ''}`}
            >
              FOUNDERS.
            </li>
            <li
              onClick={() => scrollToSection('contact')}
              className={`mx-8 text-gray-500 font-futura hover:cursor-pointer ${activeLink === 'contact' ? 'text-yellow-500' : ''}`}
            >
              CONTACT.
            </li>
          </ul>
          {/* Underline */}
         
        </div>
      </div>
    </>
  );
}
