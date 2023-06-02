"use client";
import React from 'react'
import Image from 'next/image';
import { SearchBar } from "./SearchBar";


export const Header = () => {


  return (
        <div className="ml-8 flex flex-row items-center justify-between">
          {/* logo */}
          <div className="flex items-center gap-2">
            <Image src={"/icon-a.png"} width={50} height={50} alt={"logo"}/>
            {/* <img src= className="w-[10%]" alt="Logo" /> */}
            <span className=" text-xl font-semibold whitespace-nowrap text-white">
              Music World
            </span>
          </div>
        </div>
  );
};

export * from "./Header";
