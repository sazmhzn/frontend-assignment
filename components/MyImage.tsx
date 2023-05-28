"use client";

import Image from "next/image";
import img from "../public/icon-a.png"

type ImageDetails = {
  source: string
}

export const MyImage = (props: ImageDetails) => {

  return (
    <div>
      <Image 
      src={props.source} 
      alt="Album cover"
      width={50} 
      height={50} 
      />
    </div>
  );
};
