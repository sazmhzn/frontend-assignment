"use client";
import { CardItem } from "./CardItem";

export const Main = () => {
  // console.log(itemData);

  return (
    <div className=" mt-4">
      <div className="pb-4 rounded-lg dark:border-gray-700">
        <div className="min-h-48 flex items-center justify-between mb-8 rounded bg-gray-50 dark:bg-gray-800">
          <div className="w-1/2 py-4 pl-6">
            <h1 className="text-5xl leading-tight mb-4">Listen to trending songs all the time</h1>
            <p className="text-sm w-1/2 text-gray-400 dark:text-gray-500">
              With music world you can get premium music for free anywhere and
              at any time
            </p>
          </div>
          <div className="w-1/3 relative">
            <img src="/person_listening_song.png" alt="" />
          </div>
        </div>

        <div className=" flex-row items-center mb-4 rounded">
          <h2 className="text-white mb-5">Top trending music</h2>

          <div className="flex justify-between gap-4">
            <CardItem />
            <CardItem />
            <CardItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export * from "./Main";
