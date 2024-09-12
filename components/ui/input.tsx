import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React from "react";

interface Props {
  search: string;
  handleSearch: (search: string) => void;
}

const SearchInput: React.FC<Props> = ({ search, handleSearch }) => (
  <div className="relative w-full max-w-md">
    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
    </div>
    <input
      type="text"
      className="block w-full pl-10 pr-3 py-4 rounded-md shadow-md focus:outline-none sm:text-sm dark:bg-colors-dark-blue"
      placeholder="Search..."
      value={search}
      onChange={(e) => handleSearch(e.target.value)}
    />
  </div>
);

export default SearchInput;
