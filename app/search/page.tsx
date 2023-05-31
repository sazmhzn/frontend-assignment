"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Card from "./Card";

const SearchPage = () => {
  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;
  const encodedSearchQuery = encodeURI(searchQuery || "");

  const [fetchedData, setFetchedData] = useState([]);
  const [dataReached, setDataReached] = useState(false);
  const [totalResult, setTotalResult] = useState(0);

  const fetchData = () => {
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
      .then((data) => setFetchedData(data));
    setDataReached(true);
  };

  //to fetch the data when new search occurs
  useEffect(() => {
    fetchData();
    setTotalResult(fetchedData.total);
  }, [encodedSearchQuery]);

  let apiData: { data: []; total: Number; next: string }[] = fetchedData;
  var { data } = apiData;

  //data may send undefiedn data type
  //the arr takes the defined data from data
  let arr = [];

  if (data != undefined) {
    arr = [...data];
  }

  //this JSX will create the card components
  const cardList = arr.map((card) => {
    return (
      <Card title={card.title} artist={card.artist.name} src={card.album.cover_medium} preview={card.preview} />
    );
  });

  return (
    <div>
      <div className="text-slate-300 text-sm">Home / search</div>
      <div className="my-8">
        <p className="text-slate-300 text-sm">
          Total result found: {totalResult}
        </p>
      </div>
      <div className=" flex flex-wrap items-center justify-evenly gap-x-2">
        {cardList}
      </div>
    </div>
  );
};

export default SearchPage;
