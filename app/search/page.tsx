"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Card from "./Card";

const SearchPage = () => {

const search = useSearchParams();
const searchQuery = search ? search.get("q") : null;
const encodedSearchQuery = encodeURI(searchQuery || '');
console.log(encodedSearchQuery); 


const [fetchedData, setFetchedData] = useState({});
const [dataReached, setDataReached] = useState(false);
const [totaResult, setTotalResult] = useState(0);

const fetchData = () => {

    const url = "https://deezerdevs-deezer.p.rapidapi.com/search?q="+encodedSearchQuery;
    const options = {
      method: "GET",
    //   params: { q: encodedSearchQuery },
      headers: {
        "X-RapidAPI-Key":"31ad4d710bmsh386467647829c47p113ab0jsnaca6afce2499",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };
    fetch(url, options)
    .then((res) => res.json())
    .then((data) => setFetchedData(data));
    setDataReached(true);
    console.log(fetchedData);
  }
   

  useEffect(() => {
    console.log("This is inside useEffect");
    setTotalResult( cards[1][1] );
    fetchData();
  },[encodedSearchQuery]);

  let cards:any[] = [];
  if(dataReached) {
     cards = Object.entries(fetchedData);
  }



const cardList = cards.map( card => (
  console.log(card)

) )




    return (
      <div>
        <div className="text-slate-300 text-sm">Home / search</div>
        <div className="my-8">
          <p className="text-slate-300 text-sm">Total result found:  {totaResult}</p>
        </div>
        <div className="flex items-center justify-between grow-2">

          <Card src={"/preson_listening_song.png"} title={"lose yourself"} desc={"the song descrition here"} />
      

        </div>
      </div>
        
    )
}

export default SearchPage;


