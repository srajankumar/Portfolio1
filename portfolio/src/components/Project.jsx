import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Fade } from "react-reveal";

const projects = [
  {
    title: "Novu",
    description: "A fleet management app",
    github: "https://github.com/TejasNayak42/novu",
    live: "https://novu.vercel.app",
    tags: [
      "NextJS",
      "Typescript",
      "Shadcn-UI",
      "React",
      "MongoDB",
      "NodeJs",
      "ExpressJS",
    ],
    imageSrc: "/assets/project/Novu.jpg",
  },
  {
    title: "Hungry Hive",
    description: "MERN Stack Recipe App",
    github: "https://github.com/TejasNayak42/hungry-hive",
    live: "https://hungryhive.vercel.app",
    tags: ["MongoDB", "ExpressJS", "ReactJs", "NodeJS", "TailwindCSS"],
    imageSrc: "/assets/project/HungryHive.jpg",
  },
  {
    title: "Textoi",
    description:
      "A react based app for manipulating/decorating text according to our need",
    github: "https://github.com/TejasNayak42/textoi",
    live: "https://textoi.vercel.app",
    tags: ["ReactJs", "TailwindCSS"],
    imageSrc: "/assets/project/textoi.png",
  },
];

const extractDomain = (url) => {
  const match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
  if (
    match != null &&
    match.length > 2 &&
    typeof match[2] === "string" &&
    match[2].length > 0
  ) {
    return match[2];
  } else {
    return null;
  }
};

const convertGithubLink = (githubLink) => {
  const parts = githubLink.split("/");
  const repoName = parts[parts.length - 1];
  const username = parts[parts.length - 2];
  return `${username}/${repoName}`;
};

const Projects = () => {
  return (
    <>
      <div className="flex xl:mx-20 lg:mx-10 mx:5 justify-center items-center">
        <div className="grid lg:grid-cols-3 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="w-full p-5">
              <div className="flex flex-col space-y-4 rounded-xl border-[1px] border-black/5 backdrop-blur-lg bg-white/5 p-4">
                <div className="overflow-hidden rounded-lg">
                  <Link href={project.live}>
                    <div className="relative w-full aspect-video">
                      <Image
                        priority
                        src={project.imageSrc}
                        alt={project.title}
                        layout="fill"
                        className="rounded-xl h-40 w-72 object-cover hover:opacity-80 transition duration-200"
                      />
                    </div>
                  </Link>
                </div>
                <div className="flex flex-1 flex-col overflow-hidden justify-between">
                  <div className="flex flex-col space-y-2">
                    <Link
                      href={project.live}
                      className="text-2xl w-fit text-white font-bold"
                    >
                      {project.title}
                    </Link>
                    <p className="text-sm text-gray-300">
                      {project.description}
                    </p>
                    <div className="flex flex-col space-y-2 pt-2">
                      <div className="flex space-x-3 items-center">
                        <div className="w-[1.2rem] h-[1.2rem]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="21"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill="currentColor"
                              fill-rule="evenodd"
                              d="M8 14.5c.23 0 .843-.226 1.487-1.514c.306-.612.563-1.37.742-2.236H5.771c.179.866.436 1.624.742 2.236C7.157 14.274 7.77 14.5 8 14.5ZM5.554 9.25a14.444 14.444 0 0 1 0-2.5h4.892a14.452 14.452 0 0 1 0 2.5H5.554Zm6.203 1.5c-.224 1.224-.593 2.308-1.066 3.168a6.525 6.525 0 0 0 3.2-3.168h-2.134Zm2.623-1.5h-2.43a16.019 16.019 0 0 0 0-2.5h2.429a6.533 6.533 0 0 1 0 2.5Zm-10.331 0H1.62a6.533 6.533 0 0 1 0-2.5h2.43a15.994 15.994 0 0 0 0 2.5Zm-1.94 1.5h2.134c.224 1.224.593 2.308 1.066 3.168a6.525 6.525 0 0 1-3.2-3.168Zm3.662-5.5h4.458c-.179-.866-.436-1.624-.742-2.236C8.843 1.726 8.23 1.5 8 1.5c-.23 0-.843.226-1.487 1.514c-.306.612-.563 1.37-.742 2.236Zm5.986 0h2.134a6.526 6.526 0 0 0-3.2-3.168c.473.86.842 1.944 1.066 3.168ZM5.31 2.082c-.473.86-.842 1.944-1.066 3.168H2.109a6.525 6.525 0 0 1 3.2-3.168ZM8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                        <Link
                          className="scale-100 hover:underline underline-offset-4 w-fit"
                          href={project.live}
                        >
                          {extractDomain(project.live)}
                        </Link>
                      </div>
                      <div className="flex space-x-3 items-center">
                        <div className="w-[1.2rem] h-[1.2rem]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                            />
                          </svg>
                        </div>
                        <Link
                          href={project.github}
                          className="hover:underline underline-offset-4 scale-100"
                        >
                          {convertGithubLink(project.github)}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-2 flex-wrap items-center">
                    {project.tags.map((tag, tagIndex) => (
                      <div
                        key={tagIndex}
                        className="cursor-pointer mt-2 mr-2 bg-white hover:bg-gray-300 transition duration-300 text-black text-xs px-3 py-1 rounded-full"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
