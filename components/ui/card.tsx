import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CountryCardProps {
  country: string;
  population: number;
  region: string;
  capital: string;
  flagUrl: string;
  index: number;
}

const CountryCard: React.FC<CountryCardProps> = ({ country, population, region, capital, flagUrl, index }) => {
  return (
    <Link
      href={`/country/${index}`}
      className="w-full lg:max-w-sm bg-colors-very-light-gray dark:bg-colors-dark-blue rounded-lg shadow-md overflow-hidden"
    >
      <Image src={flagUrl} alt={`${country} flag`} width={500} height={300} className="w-full h-32 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{country}</h3>
        <p className="text-sm">
          <strong>Population: </strong>
          {population.toLocaleString()}
        </p>
        <p className="text-sm">
          <strong>Region: </strong>
          {region}
        </p>
        <p className="text-sm">
          <strong>Capital: </strong>
          {capital}
        </p>
      </div>
    </Link>
  );
};

export default CountryCard;
