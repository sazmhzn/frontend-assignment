"use client";
import { CardItem } from "./CardItem";

export const Main = () => {
  return (
    <div className="p-2 bg-green mt-28">
      <div className="pb-4 rounded-lg dark:border-gray-700">
        <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
          <p className="text-2xl text-gray-400 dark:text-gray-500">
            <CardItem title={"Music Banner"} artist={""} url={""} />
          </p>
        </div>

        <div className="p-4 flex-row items-center mb-4 rounded bg-gray-50 dark:bg-gray-800">
          <h1>Top Tredning</h1>
          <div className="flex justify-between p-4">
            <CardItem title={"Hello"} artist={"yoyo"} url={""} />
            <CardItem title={"Hello"} artist={"yoyo"} url={""} />
            <CardItem title={"Hello"} artist={"yoyo"} url={""} />
            <CardItem title={"Hello"} artist={"yoyo"} url={""} />
          </div>
        </div>
      </div>
    </div>
  );
};

export * from "./Main";
