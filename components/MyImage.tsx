"use client";

import Image from "next/image";
import img from "../public/download.jpg";
type ImageDetails = {
  source: string
}

export const MyImage = (props: ImageDetails) => {

  return (
    <div>
      <Image 
      src={img} 
      alt="Album cover"
      width={100} 
      height={100} 
      />
    </div>
  );
};
