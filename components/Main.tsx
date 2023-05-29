"use client";
import { CardItem } from "./CardItem";
import Typography from "@mui/material/Typography";
import ImageListItem from "@mui/material/ImageListItem";
import { itemData } from "./Data/imgData";


export const Main = () => {
  console.log(itemData);

  return (
    <div className="p-2 bg-green mt-28">
      <div className="pb-4 rounded-lg dark:border-gray-700">
        <div className="flex items-center justify-center mb-4 rounded bg-gray-50 dark:bg-gray-800">
          <p className="text-2xl text-gray-400 dark:text-gray-500">
            <ImageListItem key={itemData[0].img}>
              <img src={itemData[0].img} alt={"banner umg"} loading="lazy" />
            </ImageListItem>
          </p>
        </div>

        <div className="p-4 flex-row items-center mb-4 rounded">
          <h2 className="text-white mb-5">Top trending music</h2>

          <div className="flex justify-between gap-4">
            <CardItem  />
            <CardItem  />
            <CardItem  />
          </div>
        </div>
      </div>
    </div>
  );
};

export * from "./Main";
