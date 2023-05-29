"use client";
import Link from "@mui/material/Link";
import { fetchFromAPI } from "../components/Data/fetchFromAPI";

export const CardItem = () => {
  // console.log("This will shoe the api detail in cardItem");
  // console.log(fetchFromAPI);


const songDetails = fetchFromAPI
      .then((res) => res)
      .then((data) => console.log(data));
  
console.log("the variable is called afger this")
console.log( songDetails)

  return (
    <div className=" flex flex-col bg-white rounded-md gap-3 overflow-hidden">
      <div className="">
        <img src="/download.jpg" alt="" />
      </div>

      <div className="py-4 px-2">
        <div className="text-2xl">Lose yourself</div>
        <div className="text-sm">Eminiem</div>
      </div>

    </div>
  );
};
