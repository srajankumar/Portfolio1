"use client";
import { Slide, Bounce } from "react-reveal";
import Fade from "react-reveal/Fade";

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
              <p className="  lg:tracking-wide font-[499] ">
                Passionate web developer actively engaged in projects,also
                exploring Cloud Computing and a third year engineering student
                at Sahyadri College of Engineering and Management, eager to
                explore new <br className="min-[768px]:hidden" />
                technologies.
              </p>
            </Slide>
          </div>

          <Slide bottom>
            <a href={resume} target="_blank" className=" font-gothamM ">
              resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 200"
                xmlSpace="preserve"
                className=""
              >
                <path
                  fill="#FFFFFF"
                  d="m81.532 99.998 5.2 9.1c1.1 1.8 3.7 1.8 4.7 0l5.2-9.1c1.1-1.8-.3-4.1-2.4-4.1h-10.4c-2.1 0-3.4 2.3-2.3 4.1z"
                />
                <path
                  fill="#FFFFFF"
                  d="M89.432 98.998c-1 0-1.8-.7-2-1.7-1.2-7.2 1.1-14.5 6.3-19.7 5.3-5.3 12.9-7.6 20.3-6.1 1.1.2 1.8 1.3 1.6 2.4s-1.3 1.8-2.4 1.6c-6.1-1.2-12.3.7-16.7 5-4.2 4.2-6.2 10.2-5.2 16.1.2 1.1-.5 2.1-1.6 2.3-.1.1-.2.1-.3.1z"
                />
                <path
                  fill="#FFFFFF"
                  d="M119.532 143.298h-30.9c-.5 0-1-.2-1.4-.6l-20.3-20.3c-.4-.3-.6-.8-.6-1.4v-50.1c0-8.2 6.6-14.8 14.8-14.8h38.4c8.2 0 14.8 6.6 14.8 14.8v57.6c0 8.2-6.6 14.8-14.8 14.8zm-30.1-4h30.1c6 0 10.8-4.8 10.8-10.8v-57.6c0-6-4.8-10.8-10.8-10.8h-38.4c-6 0-10.8 4.8-10.8 10.8v49.3l19.1 19.1z"
                />
                <path
                  fill="#FFFFFF"
                  d="M87.132 141.298v-13c0-3.7-3.8-7-8.2-7h-9.6v-4h9.6c6.6 0 12.2 5 12.2 11v13c0 1.1-4 1.1-4 0z"
                />
              </svg>
            </a>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default About;
