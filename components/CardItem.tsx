"use client";
import Link from "@mui/material/Link";
import { useState, useEffect } from 'react';

export const CardItem = () => {

const [data, setData] = useState(null);

const url = 'https://deezerdevs-deezer.p.rapidapi.com/artist/2';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '31ad4d710bmsh386467647829c47p113ab0jsnaca6afce2499',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};
useEffect(() => {
  const response = fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      setData(data);
    });
}, []);



if (!data) return <p>No profile data</p>;

  return (
    <div className=" flex flex-col bg-white rounded-md gap-3 overflow-hidden">
      <div className="">
        <img src={data['picture_big']} alt="" />
      </div>

      <div className="py-4 px-2">
        <div className="text-2xl"> {!data ? "no data found" : data['name'] } </div>
        <div className="text-sm">Eminiem</div>
      </div>

    </div>
  );
};
