"use client";
import Image from "next/image";
import Fade from "react-reveal/Fade";

const Hero = () => {
  return (
    <div className="min-h-[90vh]">
      <div className="flex font-poppins rounded-3xl text-white justify-center items-center mt-44          ">
        <div className="flex items-center md:flex-row flex-col lg:text-4xl md:text-3xl text-lg font-bold">
          <div className="flex justify-center leading-relaxed flex-col items-center">
            <Fade left cascade>
              <h1> Tejas Nayak B</h1>
              <h6 className="text-xs">CSE Undergrad;</h6>
            </Fade>
          </div>
        </div>
      </div>
      <div>
        <div className="flex w-full  text-white justify-center">
          <div className="flex py-5 text-lg md:w-3/5 text-center">
            <Fade top>
              <p>
                Third-year engineering student at Sahyadri College of
                Engineering, I am actively engaged in web development projects
                and am driven by a curiosity to explore various other
                cutting-edge technologies!
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
