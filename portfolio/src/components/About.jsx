"use client";
import { Slide, Bounce } from "react-reveal";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";

const resume = "TejasNayakB_Resume.pdf";
const About = () => {
  return (
    <div className="min-h-[90vh]">
      <div className="flex font-poppins rounded-3xl text-white justify-center items-center mt-20 lg:mt-56 ">
        <div className="flex items-center md:flex-row flex-col lg:text-4xl md:text-3xl text-lg font-bold">
          <div className="flex justify-center leading-relaxed flex-col items-center">
            <Fade top cascade>
              <h1 className="text-3xl"> Tejas Nayak B</h1>
            </Fade>
            <Bounce>
              <h6 className="text-xs py-5 ml-[0.36rem] lg:ml-5 ">
                CSE Undergrad • Web Developer • Tech Enthusiast
              </h6>
            </Bounce>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center w-full  text-white justify-center">
          <div className="flex py-5 text-lg md:w-3/5 text-center">
            <Slide bottom cascade>
              <p className="  lg:tracking-wide font-[450] ">
                Passionate web developer actively engaged in projects, and a
                third year engineering student at Sahyadri College of
                Engineering and Management, eager to explore new technologies.
              </p>
            </Slide>
          </div>
          <Slide bottom>
            <a href={resume} target="_blank" className=" font-gothamM ">
              resume
            </a>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default About;
