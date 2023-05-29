"use client";
import { MyImage } from "./MyImage";
import Button from '@mui/material/Button';

type MusicProps = {
  title: string,
  artist: string,
  url: string

}

export const CardItem = (props: MusicProps) => {
  const {title, artist, url} = props;
  return (
    <div className="flex-row justify-between gap-2 bg-slate-300 rounded p-2 h-48">
      <MyImage source={url}/>
      <h2>{title}</h2>
      <p>{artist}</p>
      <Button variant="contained">Hello World</Button>
    </div>
  );
};
