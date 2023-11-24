"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "./style.min.css";

import { events } from "@/components/constants/index.js";

import { textVariant, staggerContainer } from "@/utils/motion.js";

import Image from "next/image";
import Link from "next/link";

const EventCard = ({ event }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "transparent",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={event.date}
      iconStyle={{ background: event.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <Image
            src={event.icon}
            alt={event.description}
            height={1024}
            width={1024}
            className={`w-[100%] h-[80%] object-contain rounded-full bg-[${event.iconBg}]`}
          />
        </div>
      }
    >
      {event.title && (
        <div className="md:hover:scale-[102%] cursor-default transition duration-300 backdrop-blur-sm bg-[#d1f2f9] bg-opacity-5 p-10">
          <h3 className="text-[#fffba4] text-xl md:text-[24px] font-jbExtrabold">
            {event.title}
          </h3>
          <ul className="mt-5 space-y-2">
            {event.points.map((point, index) => (
              <li
                key={`event-point-${index}`}
                className="text-secondary pb-1 text-sm md:text-[16px] font-jbRegular"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      )}
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`padding max-w-7xl pt-10 mx-auto relative z-0`}
    >
      <h1 className="text-3xl px-5 text-left w-full py-10 font-bold tracking-wide">
        Experience
      </h1>{" "}
      <span className="hash-span" id="skill">
        {``}
      </span>
      <div className="flex flex-col">
        <VerticalTimeline>
          {events.map((event, index) => (
            <EventCard key={`event-${index}`} event={event} />
          ))}
        </VerticalTimeline>
      </div>
      <div className="flex xl:mt-4 justify-start xl:justify-center">
        <div className="w-[30rem] mx-7 md:hover:scale-[102%] space-y-5 cursor-default transition duration-300 backdrop-blur-sm bg-[#d1f2f9] bg-opacity-5 p-10">
          <h3 className="text-[#fffba4] text-xl md:text-[24px] font-jbExtrabold">
            Contact Me
          </h3>
          <Link
            href="mailto:srajankumar@gmail.com"
            target="_blank"
            className="text-secondary bg-gray-400/20 rounded-lg w-full flex justify-center hover:bg-gray-400/10 transition-colors py-2 text-sm md:text-[16px]"
          >
            Email Me
          </Link>
          <ul className="flex justify-between">
            <Link
              href="/"
              target="_blank"
              className="p-1.5 rounded-md border border-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475c0-.237-.012-1.025-.012-1.862c-2.513.462-3.163-.613-3.363-1.175a3.636 3.636 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2.001 2.001 0 0 1 1.538 1.025a2.137 2.137 0 0 0 2.912.825a2.104 2.104 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.892 3.892 0 0 1 1.025-2.688a3.594 3.594 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.427 9.427 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.593 3.593 0 0 1 .1 2.65a3.869 3.869 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.563 4.937a2.368 2.368 0 0 1 .675 1.85c0 1.338-.012 2.413-.012 2.75c0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247Z"
                />
              </svg>
            </Link>
            <Link
              href="/"
              target="_blank"
              className="p-1.5 rounded-md border border-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
                />
              </svg>
            </Link>
            <Link
              href="/"
              target="_blank"
              className="p-1.5 rounded-md border border-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104a5.35 5.35 0 0 0-.125.513a5.527 5.527 0 0 0 .062 2.362a5.83 5.83 0 0 0 .349 1.017a5.938 5.938 0 0 0 1.271 1.818l4.277 4.193l.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019l-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523a2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382a1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382a1.38 1.38 0 0 0-1.38-1.382z"
                />
              </svg>
            </Link>
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
