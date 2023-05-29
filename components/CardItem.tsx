"use client";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
import {fetchFromAPI} from "../components/Data/fetchFromAPI";


export const CardItem = () => {
 
  console.log(fetchFromAPI);

  return (  
    <Card sx={{ maxWidth: 345, p: 2, borderRadius:2 }} className="bg-slate-300">
      <CardMedia
        component="img"
        height="194"
        image="/download.jpg"
        alt="Song"
      />
      <CardHeader title="Lose yourself" subheader="MJ" />

      <Link href="/">See more</Link>
    </Card>
  );
};
