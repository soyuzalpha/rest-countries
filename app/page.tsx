"use client";

import CountryCard from "@/components/ui/card";
import Dropdown from "@/components/ui/dropdown";
import SearchInput from "@/components/ui/input";
import Pagination from "@/components/ui/pagination";
import Countries from "@/data/data.json";
import { useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(12); // Change to your desired items per page
  const [selectedRegion, setSelectedRegion] = useState<string>("Filter by Region");
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Filtering by region and search term for country name
  const filteredCountries = Countries.filter((country) => {
    const matchesRegion = selectedRegion === "Filter by Region" || country.region === selectedRegion;
    const matchesSearch = country.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  const currentItems = filteredCountries.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredCountries.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleOptionClick = (option: string) => {
    setSelectedRegion(option);
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <section className="container mx-auto pt-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <SearchInput search={searchTerm} handleSearch={handleSearch} />
        <Dropdown selected={selectedRegion} handleOptionClick={handleOptionClick} />
      </div>

      <section className="my-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {currentItems?.map((item, index: number) => (
            <CountryCard
              key={index}
              country={item?.name}
              population={item?.population}
              region={item?.region}
              capital={item?.capital || ""}
              flagUrl={item?.flags?.svg}
              index={item?.area}
            />
          ))}
        </div>

        <div className="my-10">
          <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
        </div>
      </section>
    </section>
  );
}
