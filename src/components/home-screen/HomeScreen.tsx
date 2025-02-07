import React from 'react'
import HeroSection from './HeroSection'
import CarouselWindow from './Carousel'
import Testimonials from './Testimonials'
import { AccordionWindow } from './Accordion'

const HomeScreen = () => {
  return (
    <div>
       <div className="h-screen">
        <HeroSection />
      </div>
      <div className="h-screen">
        <h1 className="text-4xl font-bold text-center text-secondary mt-20">Explore a wide range of features we offer</h1>
        <CarouselWindow />
      </div>
      <div className="h-screen justify-center items-center flex flex-col ">
        <h1 className="text-center text-secondary text-4xl font-bold ">Our reviews speaks for us</h1>
        <Testimonials />

        <AccordionWindow />
      </div>
    </div>
  )
}

export default HomeScreen
