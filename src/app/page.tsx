"use client";

import Image from "next/image";
import DarkTheme from "@/icons/darkTheme.svg";
import LightTheme from "@/icons/lightTheme.svg";
import { useState } from "react";

export default function Home() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <main className="h-[500vh] w-[100vw] bg-gray-300">
      <div className="flex justify-between items-center fixed w-full h-[10vh] bg-white">
        <div className="h-full w-[10vw]"></div>
        <div className="flex justify-evenly items-center h-full w-[10vw] bg-gray-500">
          {isDarkTheme ? (
            <DarkTheme
              onClick={() => setIsDarkTheme(!isDarkTheme)}
              className="cursor-pointer w-12 h-12"
            />
          ) : (
            <LightTheme
              onClick={() => setIsDarkTheme(!isDarkTheme)}
              className="cursor-pointer w-14 h-14"
            />
          )}
        </div>
      </div>
      <div className="h-[10vh]" />
      <div className="flex justify-center items-centerw-full h-[70vh]">
        <div className="w-full flex justify-center items-center flex-row">
          <img
            className="w-[200px] h-[200px] rounded-full"
            src={
              "https://avatars.githubusercontent.com/u/132969260?s=400&u=c62b7e37170664e4bca89cc8f9096e8aba252bf3&v=4"
            }
          />
          <div className="ml-10">
            <h1 className="text-5xl">Rocky</h1>
            <ul>
              <li className="text-3xl">FullStack Developer</li>
              <li className="text-xl">Designer</li>
              <li className="text-xl">UX/UI</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </main>
  );
}
