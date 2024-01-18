"use client";

import DarkTheme from "@/icons/darkTheme.svg";
import LightTheme from "@/icons/lightTheme.svg";
import { useState } from "react";

export default function Home() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <main>
      <nav></nav>
      <div className="grid place-items-center grid-cols-3 auto-cols-min auto-rows-min grid-rows-16 gap-10 bg-gray-200 w-screen h-[800vh]">
        <div
          className="overflow-hidden relative bg-local bg-auto border-2 border-black col-span-3 row-span-1 w-[97vw] h-[95vh]"
          style={{
            backgroundImage:
              "url(https://steamuserimages-a.akamaihd.net/ugc/929299608230076775/C82E83881837C5E420E53EFC1BA2CDAB689375A5/?imw=1024&imh=673&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true)",
          }}
        >
          <div className="absolute bg-gradient-to-l from-[rgb(0,0,0,0.5)] to-transparent left-[50%] w-[50vw] h-[50vw]">
            <img src="https://iili.io/J7dikdJ.png" className="w-full h-full" />
          </div>
        </div>
        <div className="grid place-items-center grid-cols-2 grid-rows-1 gap-10 col-span-3">
          <div className="bg-white border-2 border-black col-span-1 w-[47vw] h-[47vh]">
            RESUMO
          </div>
          <div className="bg-white border-2 border-black col-span-1 w-[47vw] h-[47vh]">
            SKILLS
          </div>
        </div>
        <div className="bg-white border-2 border-black col-span-1 w-[30vw] h-[30vh]">
          EXPERIENCIA1
        </div>
        <div className="bg-white border-2 border-black col-span-1 w-[30vw] h-[35vh]">
          EXPERIENCIA2
        </div>
        <div className="bg-white border-2 border-black col-span-1 w-[30vw] h-[40vh]">
          EXPERIENCIA3
        </div>
        <div className="bg-white border-2 border-black col-span-3 w-[95vw] h-[95vh]">
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
