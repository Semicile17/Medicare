import React from 'react'
import Carousel from '../ui/carousel';

const CarouselWindow = () => {
    const slideData = [
        {
          title: "Mystic Mountains",
          button: "Explore Component",
          src: "https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-goggles_23-2149611193.jpg?semt=ais_hybrid",
        },
        {
          title: "Urban Dreams",
          button: "Explore Component",
          src: "https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-goggles_23-2149611193.jpg?semt=ais_hybrid",
        },
        {
          title: "Neon Nights",
          button: "Explore Component",
          src: "https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-goggles_23-2149611193.jpg?semt=ais_hybrid",
        },
        {
          title: "Desert Whispers",
          button: "Explore Component",
          src: "https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-goggles_23-2149611193.jpg?semt=ais_hybrid",
        },
      ];
      return (
        <div className="relative overflow-hidden w-full h-full py-20">
          <Carousel slides={slideData} />
        </div>
      );
}

export default CarouselWindow;
