"use client";

import Image from "next/image";
import DarkTheme from "@/icons/darkTheme.svg";
import LightTheme from "@/icons/lightTheme.svg";
import { useState } from "react";

export default function Home() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <main
      className="h-[500vh] w-[100vw] bg-contain bg-gray-300"
      style={{
        backgroundImage:
          "url(https://steamuserimages-a.akamaihd.net/ugc/929299608230076775/C82E83881837C5E420E53EFC1BA2CDAB689375A5/?imw=1024&imh=673&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true)",
      }}
    >
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
      <div className="relative flex justify-center items-center w-full h-[70vh]">
        <img
          className="absolute right-0 translate-y-[10%] w-[50vw] h-[50vw]"
          src="https://iili.io/J7dikdJ.png"
        />
        <div className="w-full flex justify-center items-center flex-row">
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
      <div className="w-full h-[10vh] bg-black"></div>
    </main>
  );
}

// landscape 1 = https://steamuserimages-a.akamaihd.net/ugc/929299608230076775/C82E83881837C5E420E53EFC1BA2CDAB689375A5/?imw=1024&imh=673&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true
