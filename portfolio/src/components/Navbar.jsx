import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div>
        <header className="fixed md:grid hidden z-50 font-bold w-full backdrop-blur-sm text-black dark:text-white body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link href="/">
              <img
                src="/assets/Me.jpg"
                alt="GitHub Avatar"
                className="w-14 h-14 rounded-full"
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
