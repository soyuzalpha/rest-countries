"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

interface Props {
  selected: string;
  handleOptionClick: (selected: string) => void;
}

const Dropdown: React.FC<Props> = ({ selected, handleOptionClick }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const options: string[] = ["Africa", "America", "Asia", "Europe", "Oceania"];

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block max-w-fit">
      <button
        onClick={toggleDropdown}
        className="flex justify-between items-center w-full px-4 py-3 text-left bg-colors-very-light-gray dark:bg-colors-dark-blue  rounded-md shadow-md focus:outline-none gap-3"
      >
        <span>{selected}</span>
        <ChevronDownIcon className="w-5 h-5 text-gray-500" />
      </button>

      {isOpen && (
        <ul className="absolute w-full mt-1 bg-colors-white dark:bg-colors-dark-blue rounded-md shadow-lg">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => {
                handleOptionClick(option);
                toggleDropdown();
              }}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
