"use client";
import { useState } from "react";
import NextJSIcon from "@/icons/techs/nextjs.svg";
import ReactIcon from "@/icons/techs/react.svg";
import TailwindIcon from "@/icons/techs/tailwindcss.svg";
import FigmaIcon from "@/icons/techs/figma.svg";

export default function Home() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <main>
      <nav></nav>
      <div className="grid place-items-center grid-cols-3 auto-cols-min auto-rows-min grid-rows-16 gap-10 bg-gray-200 w-screen h-[800vh]">
        <div
          className="flex justify-start items-center overflow-hidden relative bg-local bg-cover border-2 border-black col-span-3 row-span-1 aspect-[16/9] w-[1200px] max-w-[1200px] min-w-[800px]"
          style={{
            backgroundImage:
              "url(https://steamuserimages-a.akamaihd.net/ugc/929299608230076775/C82E83881837C5E420E53EFC1BA2CDAB689375A5/?imw=1024&imh=673&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true)",
          }}
        >
          <div className="bg-gradient-radial rounded-full from-white to-transparent p-10 translate-x-40 -translate-y-10 flex flex-col">
            <h1 className="select-none col-span-4 row-span-1 text-8xl text-black">
              RockyPHER
            </h1>
            <div className="flex flex-row justify-end w-full">
              <NextJSIcon className=" w-14 h-14" />
              <ReactIcon className="w-14 h-14" />
              <TailwindIcon className="w-14 h-14" />
              <FigmaIcon className="w-14 h-14" />
            </div>
          </div>
          <div className="absolute bg-gradient-to-l from-[rgb(0,0,0,0.5)] to-transparent left-[50%] w-[50vw] h-[50vw]">
            <img src="https://iili.io/J7dikdJ.png" className="w-full h-full" />
          </div>
        </div>

        <div className="flex flex-row col-span-3 gap-5">
          <div className="bg-white border-2 border-black col-span-2 aspect-[16/9] w-[880px]">
            <p>Fullstack developer. </p>
          </div>
          <div className="bg-white border-2 border-black col-span-1 aspect-[9/16] w-[300px]">
            SKILLS
          </div>
        </div>
        <div className="flex flex-row justify-center items-start col-span-2 gap-8">
          <div className="bg-white border-2 border-black aspect-square w-[400px]">
            EXPERIENCIA1
          </div>
          <div className="bg-white border-2 border-black aspect-[3/4] w-[300px]">
            EXPERIENCIA2
          </div>
        </div>
        <div className="bg-white border-2 border-black col-span-1 row-span-2 aspect-[9/16] w-[500px]">
          EXPERIENCIA3
        </div>
        <div className="bg-white border-2 border-black col-span-2 row-span-1 aspect-[16/9] w-[800px]">
          PROJETO1
        </div>
        <div className="bg-white border-2 border-black col-span-2 w-[50vw] h-[90vh]">
          PROJETO2
        </div>
        <div className="bg-white border-2 border-black col-span-1 w-[45vw] h-[85vh]">
          PROJETO3
        </div>
        <div className="bg-white border-2 border-black col-span-2 w-[70vw] h-[80vh]">
          PROJETO4
        </div>
        <div className="bg-white border-2 border-black col-span-1 w-[20vw] h-[75vh]">
          EXTRA
        </div>
        <div className="bg-white border-2 border-black col-span-3 w-[95vw] h-[60vh]">
          CONTATO
        </div>
      </div>
    </main>
  );
}

// landscape 1 = https://steamuserimages-a.akamaihd.net/ugc/929299608230076775/C82E83881837C5E420E53EFC1BA2CDAB689375A5/?imw=1024&imh=673&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true
