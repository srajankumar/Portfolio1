"use client";
import Image from "next/image";
import { Slide, Bounce } from "react-reveal";
import Fade from "react-reveal/Fade";

const Hero = () => {
  return (
    <div className="min-h-[90vh]">
      <div className="flex font-poppins rounded-3xl text-white justify-center items-center mt-28          ">
        <div className="flex items-center md:flex-row flex-col lg:text-4xl md:text-3xl text-lg font-bold">
          <div className="flex justify-center leading-relaxed flex-col items-center">
            <Fade top cascade>
              <h1 className="text-3xl"> Tejas Nayak B</h1>
            </Fade>
            <Bounce cascade>
              <h6 className="text-xs">
                CSE Undergrad • Web Developer • Tech Enthusiast
              </h6>
            </Bounce>
          </div>
        </div>
      </div>
      <div>
        <div className="flex w-full  text-white justify-center">
          <div className="flex py-5 text-lg md:w-3/5 text-center">
            <Slide bottom cascade>
              <p className="tracking-wide ">
                Passionate web developer actively engaged in projects, and a
                third-year engineering student at Sahyadri College of
                Engineering, eager to explore new technologies.
              </p>
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
