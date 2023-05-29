"use client";
import React from 'react'
import { SearchBar } from "./SearchBar";


export const Header = () => {


  return (
        <div className="flex lg:flex-row items-center justify-between px-6 py-4 ">
          {/* logo */}
          <div className="flex items-center">
            <img src="/icon-a.png" className="w-[10%]" alt="Logo" />
            <span className=" text-xl font-semibold whitespace-nowrap text-white">
              Music World
            </span>
          </div>

          {/* search bar */}
        </div>
  );
};

export * from "./Header";
