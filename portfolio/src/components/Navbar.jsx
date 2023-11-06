"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

import { useEffect, useState } from "react";

const Navbar = () => {
  const [avatarUrl, setAvatarUrl] = useState("");

  useEffect(() => {
    // Fetch GitHub avatar when the component mounts
    fetchGitHubAvatar();
  }, []);

  const fetchGitHubAvatar = async () => {
    // Replace 'USERNAME' with the GitHub username of the user whose avatar you want to fetch.
    const githubUsername = "TejasNayak42";

    // GitHub API endpoint for fetching user data
    const apiUrl = `https://api.github.com/users/${githubUsername}`;

    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        const avatarUrl = data.avatar_url;
        setAvatarUrl(avatarUrl);
      } else {
        console.error("Error fetching GitHub avatar:", response.status);
      }
    } catch (error) {
      console.error("Error fetching GitHub avatar:", error);
    }
  };
  return (
    <div>
      <div>
        <header className="fixed md:grid  z-50 font-bold w-full backdrop-blur-sm text-black dark:text-white body-font">
          <div className="container min-w-full flex  max-[500px]: justify-center ">
            <div className=" justify-start p-2 ml-3">
              <Link href="https://github.com/TejasNayak42">
                <Image
                  src={avatarUrl}
                  alt="GitHub Avatar"
                  width={600} // Specify the width
                  height={600} // Specify the height
                  className=" w-14 h-14 rounded-full "
                />
              </Link>
            </div>

            <div className="flex p-1 ml-auto max-[500px]:hidden">
              <button className="focus:underline hover:underline underline-offset-4 focus:underline-offset-8">
                <Link
                  className=" font-gothamB tracking-wide w-20 flex items-center justify-center px-10 mr-2 cursor-pointer"
                  href="#about"
                >
                  About
                </Link>
              </button>

              <button className="focus:underline hover:underline underline-offset-4 focus:underline-offset-8">
                <Link
                  className=" font-gothamB tracking-wide  flex items-center justify-center px-5 cursor-pointer"
                  href="#project"
                >
                  Projects
                </Link>
              </button>

              <button className="focus:underline hover:underline underline-offset-4 focus:underline-offset-8">
                <Link
                  className=" font-gothamB tracking-wide flex items-center justify-center px-5 cursor-pointer"
                  href="#contact"
                >
                  Contact
                </Link>
              </button>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
