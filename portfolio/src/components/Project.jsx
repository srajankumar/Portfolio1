"use client";
import Image from "next/image";
import Link from "next/link";
import { Slide } from "react-reveal";
import Header from "@/utils/Header/index.js";
import { Tilt } from "react-tilt";
import ExternalLink from "@/utils/Links";
const App = () => {
  const projects = [
    {
      title: "Hungry Hive",
      description: "A MERN stack based recipe app.",
      tags: ["#mongodb", "#express", "#react", "#nodejs", "#tailwindcss"],
      imageSrc: "/assets/project/main/hungry-hive.png",
      sourcecode: "https://github.com/srajankumar/hungry-hive",
      link: "/projects/hungry-hive",
    },
    {
      title: "Pull Quest",
      description:
        "A simple and fun quest to learn how to make a pull-request in GitHub.",
      tags: ["#nextjs", "#tailwindcss"],
      imageSrc: "/assets/project/main/pullquest.png",
      sourcecode: "https://github.com/srajankumar/pullquest",
      link: "/projects/pull-quest",
    },
    {
      title: "QRby",
      description:
        "A simple user-friendly QR code generator with download capabilities.",
      tags: ["#nextjs", "#tailwindcss"],
      imageSrc: "/assets/project/main/qrby.png",
      sourcecode: "https://github.com/srajankumar/qrby",
      link: "/projects/qrby",
    },
  ];

  return (
    <div>
      <Project projects={projects} />
    </div>
  );
};

const Project = ({ projects }) => {
  return (
    <>
      <div className="flex flex-col md:hover:scale-[101%] transition duration-300 scale-100 border-input space-y-4 rounded-xl border-[1px] border-tertiary bg-secondary/50 p-4 md:min-h-48 md:flex-row md:space-y-0 md:space-x-8">
        <div className="overflow-hidden rounded-lg md:w-72"></div>
        <div className="flex flex-1 flex-col md:w-5 overflow-hidden justify-between">
          <div className="flex flex-col space-y-2">
            <p className="text-sm text-gray-300">abc</p>
            <div className="flex flex-col space-y-2 md:flex-row md:items-center md:space-x-2 md:space-y-0"></div>
          </div>
          <div className="flex mt-2 flex-wrap items-center"></div>
        </div>
      </div>
    </>
  );
};

export default App;
