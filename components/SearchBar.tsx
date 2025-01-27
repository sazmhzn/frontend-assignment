"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export const SearchBar = () => {
  //set the data of input field evertime changed
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const onSearch = (e: React.FormEvent) => {

    e.preventDefault();
    //add %20 in sapces
    const encodedSearchQuery = encodeURI(searchQuery);
    router.push(`/search?q=${encodedSearchQuery}`);

  };

  return (
    <form
      action="https://deezerdevs-deezer.p.rapidapi.com/search"
      onSubmit={onSearch}
      className="mr-8 flex items-center justify-end"
    >
      <div className="relative lg:w-[300px] sm:w-1/2 xs:w-1/3">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fillRule="inherit"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="simple-search"
          value={searchQuery}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block xs:w-1/3 lg:w-full pl-10 p-2.5"
          placeholder="Search"
          onChange={(event) => setSearchQuery(event.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
        <span className="sr-only">Search</span>
      </button>
    </form>
  );
};

export default SearchBar;