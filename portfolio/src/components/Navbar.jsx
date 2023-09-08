"use client"
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
      // Fetch GitHub avatar when the component mounts
      fetchGitHubAvatar();
  }, []);

  const fetchGitHubAvatar = async () => {
      // Replace 'USERNAME' with the GitHub username of the user whose avatar you want to fetch.
      const githubUsername = 'TejasNayak42';

      // GitHub API endpoint for fetching user data
      const apiUrl = `https://api.github.com/users/${githubUsername}`;

      try {
          const response = await fetch(apiUrl);
          if (response.ok) {
              const data = await response.json();
              const avatarUrl = data.avatar_url;
              setAvatarUrl(avatarUrl);
          } else {
              console.error('Error fetching GitHub avatar:', response.status);
          }
      } catch (error) {
          console.error('Error fetching GitHub avatar:', error);
      }
  };
  return (
    <div>
      <div>
        <header className="fixed md:grid hidden z-50 font-bold w-full backdrop-blur-sm text-black dark:text-white body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link href="/">
            <Image
                    src={avatarUrl}
                    alt="GitHub Avatar"
                    width={600} // Specify the width
                    height={600} // Specify the height
                    className=" w-14 h-14 rounded-full"
                />

              <span className="ml-3">Tejas Nayak B</span>
            </Link>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
