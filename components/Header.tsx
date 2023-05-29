"use client";
import React from 'react'
import { SearchBar } from "./SearchBar";


export const Header = () => {


  return (
        <div className="ml-8 flex flex-row items-center justify-between">
          {/* logo */}
          <div className="flex items-center gap-2">
            <img src="/icon-a.png" className="w-[10%]" alt="Logo" />
            <span className=" text-xl font-semibold whitespace-nowrap text-white">
              Music World
            </span>
          </div>
        </div>
  );
};

export * from "./Header";
