import Image from "next/image";
import Player from "./Player";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useState } from "react";

 
 const Card = ({title, artist, src, preview} : {title: string; artist: string; src: string; preview:string}) => {

const [isClick, setIsClick] = useState(false);

    return (
        <div className="w-[100%] xs:w-full sm:w-[50%] md:w-[33%] lg:w-[20%] bg-slate-100 my-4 rounded-sm overflow-hidden">
            <div className="relative">
              <Image 
              src={src}
              width={1000}
              height={1000}
              alt={title}
              />
            </div>

          <div className=" p-2 flex items-center justify-between">
            <div className=" border-t-2 border-t-black-100">
              <h1 className="text-lg font-semibold">
                {title}
                </h1>
              <p>{artist}</p>
            </div>
            <button onClick={() => setIsClick(!isClick)} className="w-12 h-12 rounded-full bg-[#e85c31]">
              <PlayArrowIcon sx={{ color: 'white' }} />
            </button>
          </div>
          {
            isClick && <Player song={preview} />
          }         
          </div>
    )
 }

 export default Card;