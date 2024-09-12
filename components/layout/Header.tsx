"use client";

import { useTheme } from "next-themes";
import React, { useState } from "react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { setTheme } = useTheme();

  const toggleDarkMode = () => {
    if (isDarkMode) {
      setIsDarkMode(!isDarkMode);
      setTheme("light");
    } else {
      setIsDarkMode(!isDarkMode);
      setTheme("dark");
    }
  };

  return (
    <header className="sticky w-full top-0 left-0 shadow-md z-50 h-20 flex items-center  bg-colors-very-light-gray dark:bg-colors-dark-blue px-8">
      <nav className="flex items-center justify-between container mx-auto px-4 lg:px-0">
        <h1 className="text-lg font-bold">Where in the world ?</h1>

        <div>
          {isDarkMode ? (
            <div onClick={toggleDarkMode} className="cursor-pointer flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>

              <span className="font-bold">Dark Mode</span>
            </div>
          ) : (
            <div onClick={toggleDarkMode} className="cursor-pointer flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
              <span className="font-bold">Light Mode</span>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
