"use client"

import Link from 'next/link'
import React from 'react'
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [avatarUrl, setAvatarUrl] = useState('');

    useEffect(() => {
        // Fetch GitHub avatar when the component mounts
        fetchGitHubAvatar();
    }, []);

    const fetchGitHubAvatar = () => {
        // Replace 'USERNAME' with the GitHub username of the user whose avatar you want to fetch.
        const githubUsername = 'TejasNayak42'

        // GitHub API endpoint for fetching user data
        const apiUrl = `https://api.github.com/users/${githubUsername}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const avatarUrl = data.avatar_url;
                setAvatarUrl(avatarUrl);
            })
            .catch(error => {
                console.error('Error fetching GitHub avatar:', error);
            });
    };
  return (
    <div>
        <div>
            <header className="fixed md:grid hidden z-50 font-bold w-full backdrop-blur-sm text-black dark:text-white body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href='/'>
                          <img
                               src={avatarUrl}
                              alt="GitHub Avatar"

                          className="w-14 h-14 rounded-full"
                          >
                              
                          </img>
                          <span className='ml-3'>Tejas Nayak B</span>
                    </Link>
                </div>
            </header>
        </div>
    </div>
  )
}

export default Navbar




