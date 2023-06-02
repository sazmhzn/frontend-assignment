"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Card from "./Card";

const SearchPage = () => {

  //used to get the parameter value from url
  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;
  const encodedSearchQuery = encodeURI(searchQuery || "");


  //store the API data to testData
  const [testData, setTestData] = useState({
    data: [],
    total: 0,
  });

  const fetchData = () => {
    console.log("Data fetching");
    const url =
      "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + encodedSearchQuery;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "31ad4d710bmsh386467647829c47p113ab0jsnaca6afce2499",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((data) =>
        setTestData({
          data: data.data,
          total: data.total,
        })
      );
  };

  //to fetch the data when new search occurs
  useEffect(() => {
    fetchData();
  }, [encodedSearchQuery]);

  //this JSX will create the card components

  const cardList = testData.data.map((card) => {
    return (
      <Card
        key={card.id}
        title={card.title}
        artist={card.artist.name}
        src={card.album.cover_medium}
        preview={card.preview}
      />
    );
  });

  return (
    <div>
      <div className="text-slate-300 text-sm">Home / search</div>
      {testData.total > 0 ? (
        <div>
          <div className="my-8">
            <p className="text-slate-300 text-sm">
              Total result found: {testData.total}
            </p>
          </div>
          <div className=" flex flex-wrap items-center justify-evenly gap-x-2">
            {cardList}
          </div>
        </div>
      ) : 
        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] text-4xl text-slate-300">Noting found </div>
      }
    </div>
  );
};

export default SearchPage;
