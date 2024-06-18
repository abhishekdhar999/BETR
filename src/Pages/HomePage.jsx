import React from 'react';

import LandingPage from '../Components/LandingPage';
import Brands from '../Components/Brands';
import Founders from '../Components/Founders';
import Footer from '../Components/Footer'
import About from '../Components/About';
export default function HomePage() {
  return (
    <>
      <LandingPage></LandingPage>
      <About></About>
      <Brands></Brands>
      <Founders></Founders>
      <Footer></Footer>
      
    </>
  )
}
