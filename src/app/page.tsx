"use client";
import { useState } from "react";
import NextJSIcon from "@/techs/nextjs.svg";
import ReactIcon from "@/techs/react.svg";
import TailwindIcon from "@/techs/tailwindcss.svg";
import FigmaIcon from "@/techs/figma.svg";
import PythonIcon from "@/techs/python.svg";
import PremiereProIcon from "@/techs/premiere.svg";
import DockerIcon from "@/techs/docker.svg";
import DebianIcon from "@/techs/debian.svg";
import MariaDbIcon from "@/techs/mariadb.svg";
import GimpIcon from "@/techs/gimp.svg";
import CSharpIcon from "@/techs/csharp.svg";
import BashIcon from "@/techs/bash.svg";

import { SkillsDescription, AboutMeEng } from "./data";

export default function Home() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <main>
      <nav></nav>
      <div className="grid place-items-center grid-flow-row-dense gap-5 grid-cols-3 auto-cols-min auto-rows-min grid-rows-16 bg-gray-500 w-screen h-[800vh]">
        <div
          className="flex justify-start items-center overflow-hidden relative bg-local bg-cover border-2 border-slate-800 col-span-3 row-span-1 aspect-[16/9] w-[1200px] max-w-[1200px] min-w-[800px]"
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

        <div className="col-span-3 aspect-square w-[600px]"></div>

        <div className="bg-white border-2 border-slate-800 col-span-3 aspect-[16/9] w-[1000px]">
          {AboutMeEng}
        </div>

        <div className="flex flex-row col-span-3 gap-5">
          <div className="bg-black border-2 border-slate-800 col-span-2 aspect-[16/9] w-[880px]">
            <p className="bg-white border-black border-b-2 border-r-2 text-black text-sm"></p>
          </div>
          <div className="bg-black border-2 border-slate-800 col-span-1 aspect-[9/16] w-[300px]">
            <h1>SKILLS</h1>
            <div className="bg-white grid grid-cols-5 grid-rows-6"></div>
          </div>
        </div>
        <div className="flex flex-row justify-center items-start col-span-2 row-span-1 gap-8">
          <div className="bg-black border-2 border-slate-800 aspect-square w-[400px]">
            EXPERIENCIA1
          </div>
          <div className="bg-black border-2 border-slate-800 aspect-[3/4] w-[300px]">
            EXPERIENCIA2
          </div>
        </div>
        <div className="bg-black border-2 border-slate-800 col-span-1 row-span-2 aspect-[9/16] w-[500px]">
          EXPERIENCIA3
        </div>
        <div className="bg-black border-2 border-slate-800 col-span-2 row-span-1 aspect-[16/9] w-[800px]">
          PROJETO1
        </div>
        <div className="bg-black border-2 border-slate-800 col-span-2 w-[50vw] h-[90vh]">
          PROJETO2
        </div>
        <div className="bg-black border-2 border-slate-800 col-span-1 w-[45vw] h-[85vh]">
          PROJETO3
        </div>
        <div className="bg-black border-2 border-slate-800 col-span-2 w-[70vw] h-[80vh]">
          PROJETO4
        </div>
        <div className="bg-black border-2 border-slate-800 col-span-1 w-[20vw] h-[75vh]">
          EXTRA
        </div>
        <div className="bg-black border-2 border-slate-800 col-span-3 w-[95vw] h-[60vh]">
          CONTATO
        </div>
      </div>
    </main>
  );
}

// landscape 1 = https://steamuserimages-a.akamaihd.net/ugc/929299608230076775/C82E83881837C5E420E53EFC1BA2CDAB689375A5/?imw=1024&imh=673&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true
