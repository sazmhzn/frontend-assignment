"use client";
import { MyImage } from "./MyImage";


type MusicProps = {
  title: string,
  artist: string,
  url: StaticImageData

}

export const CardItem = (props: MusicProps) => {
  const {title, artist, url} = props;
  return (
    <div>
      <MyImage source={url}/>
      <h2>{title}</h2>
      <p>{artist}</p>
    </div>
  );
};
