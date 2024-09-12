"use client";

import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Country from "@/data/data.json";
import Image from "next/image";

interface CountryProps {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  subregion: string;
  region: string;
  population: number;
  latlng: [number, number];
  demonym: string;
  area: number;
  gini: number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string;
  flags: {
    svg: string;
    png: string;
  };
  currencies: {
    code: string;
    name: string;
    symbol: string;
  }[];
  languages: {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
  }[];
  translations: {
    br: string;
    pt: string;
    nl: string;
    hr: string;
    fa: string;
    de: string;
    es: string;
    fr: string;
    ja: string;
    it: string;
    hu: string;
  };
  flag: string;
  regionalBlocs: {
    acronym: string;
    name: string;
  }[];
  cioc: string;
  independent: boolean;
}

const CountryDetails: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const [country, setCountry] = useState<CountryProps | any>({});

  useEffect(() => {
    if (params?.country) {
      const detail = Country?.find((item) => String(item?.area) === params?.country); // Use find instead of filter

      if (detail) {
        setCountry(detail); // detail will be a single object
      }
    }
  }, [params?.country]);

  console.log({ params });

  return (
    <>
      <div className="container mx-auto px-4 py-8 h-screen">
        <div>
          {/* Back Button */}
          <button
            className="flex items-center space-x-2 bg-colors-very-light-gray dark:bg-colors-dark-blue text-colors-dark-gray dark:text-colors-very-light-gray px-4 py-2 rounded-md shadow-md hover:bg-gray-200 mb-10"
            onClick={() => router.back()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back</span>
          </button>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Country Flag */}
            <Image
              src={country?.flags?.svg || country?.flags?.png}
              width={1000}
              height={1000}
              alt={`${name} flag`}
              className="w-full h-auto rounded-md shadow-lg"
            />

            {/* Country Details */}
            <div>
              <h1 className="text-3xl font-bold mb-6">{country?.name}</h1>

              <div className="flex flex-col md:flex-row justify-between">
                <div className="flex-1">
                  <p className="text-lg font-semibold mb-2">
                    Native Name: <span className="font-normal">{country?.nativeName}</span>
                  </p>
                  <p className="text-lg font-semibold mb-2">
                    Population: <span className="font-normal">{country?.population?.toLocaleString()}</span>
                  </p>
                  <p className="text-lg font-semibold mb-2">
                    Region: <span className="font-normal">{country?.region}</span>
                  </p>
                  <p className="text-lg font-semibold mb-2">
                    Sub Region: <span className="font-normal">{country?.subregion}</span>
                  </p>
                  <p className="text-lg font-semibold mb-2">
                    Capital: <span className="font-normal">{country?.capital}</span>
                  </p>
                </div>

                <div className="flex-1">
                  <p className="text-lg font-semibold mt-6 mb-2">
                    Top Level Domain: <span className="font-normal">{country?.topLevelDomain}</span>
                  </p>
                  <p className="text-lg font-semibold mb-2">
                    Currencies:{" "}
                    <span className="font-normal">{country?.currencies?.map((obj: any) => obj?.name)?.join(", ")}</span>
                  </p>
                  <p className="text-lg font-semibold mb-2">
                    Languages:{" "}
                    <span className="font-normal">{country?.languages?.map((obj: any) => obj?.name)?.join(", ")}</span>
                  </p>
                </div>
              </div>

              {/* Border Countries */}

              <div className="mt-6">
                <p className="text-lg font-semibold mb-2">Border Countries:</p>
                <div className="flex flex-wrap gap-2">
                  {country?.borders?.map((country: string, index: number) => (
                    <span key={index} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md shadow-md">
                      {country}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryDetails;
