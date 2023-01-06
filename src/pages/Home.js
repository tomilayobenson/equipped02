import React from 'react';
import Banner from '../components/Banner';
import HomeHowItWorks from '../components/HomeHowItWorks';
import TestimonialsCarousel from '../components/testimonials/TestimonialsCarousel';

const Home = () => {
  return (
    <>
        <Banner />
        <HomeHowItWorks/>
        <TestimonialsCarousel />
    </>
  )
}

export default Home;