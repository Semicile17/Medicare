import React from "react";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import AuthButtons from "./AuthButtons";
import ImagesSliderWindow from "./ImagesSlider";

const HeroSection = () => {
  return (
    <div className="w-screen h-full flex">
      <div className="md:w-1/2 h-full bg-primary p-10 flex flex-col items-center justify-center">
        {/* Logo and Branding */}
        <div className="space-y-4">
          <h1 className="md:text-7xl text-5xl font-bold text-secondary">Medi<span className="">Care</span></h1>
          <TextGenerateEffect
            words={"Your Health Portfolio and Assistant"}
            className="font-light md:text-3xl text-md tracking-tight  "
          />
          <TextGenerateEffect
            words={"We care about your well-being 😊"}
            className="font-normal md:text-4xl text-balance text-xl tracking-tight"
          />
          <div className="">
            <AuthButtons />
          </div>
        </div>
      </div>
      <div className="md:w-1/2 h-full">
        <ImagesSliderWindow />
      </div>
    </div>
  );
};

export default HeroSection;
