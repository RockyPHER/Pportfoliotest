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

export default function Home() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <main>
      <nav></nav>
      <div className="grid place-items-center grid-flow-row-dense gap-5 grid-cols-3 auto-cols-min auto-rows-min grid-rows-16 bg-black w-screen h-[800vh]">
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

        <div className="flex flex-row col-span-3 gap-5">
          <div className="bg-black border-2 border-slate-800 col-span-2 aspect-[16/9] w-[880px]">
            <p className="bg-white border-black border-b-2 border-r-2 text-black text-sm">
              Self taught programmer. Why me? I do because i love this. I can
              understand you. I get things done. About me I'm brazilian, started
              to code in the end of 2023, while i worked as a butcher. The part
              that i most like on coding is seeing the results of what im doing.
              I love mangas aesthetics, Gym, running, philosophy, psychology and
              self improvement. My favorite mangas are Vagabond and Vinland
              Saga.
            </p>
          </div>
          <div className="bg-black border-2 border-slate-800 col-span-1 aspect-[9/16] w-[300px]">
            <h1>SKILLS</h1>
            <div className="bg-white grid grid-cols-5 grid-rows-6">
              <div>
                <FigmaIcon className="w-10 h-10" />
                <p>
                  3/5 <br />
                  Can full implement a figma design into code, with css,
                  tailwind or blazor.
                </p>
              </div>
              <div>
                <PythonIcon className="w-10 h-10" />
                <p>
                  1/5 <br />
                  Still learning, not a problem if a need to learn in the
                  future. Python is not a hard language, i just don't used
                  python much yet. But i have some projects to do in the future
                  that uses python.
                </p>
              </div>
              <div>
                <PremiereProIcon className="w-10 h-10" />
                <p>
                  3/5 <br />I know everything i need to edit, already edited
                  some videos for me and for friends, but nothing too
                  professional. Can improve if needed.
                </p>
              </div>
              <div>
                <GimpIcon className="w-10 h-10" />
                <p>
                  3/5 <br />
                  Dont have advanced knowledge of gimp, but i can use it.
                  Normaly i do some basic edits, remove the background, add some
                  subtitles, change some icon, etc.
                </p>
              </div>
              <div>
                <DebianIcon className="w-10 h-10" />
                <p>
                  3/5 <br />
                  Suffered alot in the past, know i can most features of debian,
                  it helped me alot to understand operational system
                  archtecture.
                </p>
              </div>
              <div>
                <BashIcon className="w-10 h-10" />
                <p>
                  3/5 <br /> Thanks to debian i learn bash, i can do most
                  commands. Never needed to code something in it but i can do it
                  if necessary.
                </p>
              </div>
              <div>
                <TailwindIcon className="w-10 h-10" />
                <p>
                  5/5 <br />I am a fan of tailwind. At first glance i hated, but
                  thanks to NextJs i started learning and i learn to love it. I
                  can do everything with it.
                </p>
              </div>
              <div>
                <CSharpIcon className="w-10 h-10" />
                <p>
                  2/5 <br /> My first personal project was with C#, i wanted the
                  challenge of learning a hard language from zero. I made a
                  discord bot and a full backend with it. Still need to learn
                  much things, but i have the basics.
                </p>
              </div>
              <div>
                <MariaDbIcon className="w-10 h-10" />
                <p>
                  4/5 <br />
                  Every backend i made i used MariaDB, Dont use much of it
                  syntax, thanks to ORMs but i can use if necessary.
                </p>
              </div>
              <div>
                <DockerIcon className="w-10 h-10" />
                <p>
                  4/5 <br /> Have a great understanding of its functioning, used
                  on my backend projects. Still not an especialist.
                </p>
              </div>
              <div>
                <NextJSIcon className="w-10 h-10" />
                <p>
                  3/5 <br /> My favorite JS framework, every project that i can,
                  i use nextjs, don't know every feature, but have a greate
                  experience with it.
                </p>
              </div>
              <div>
                <ReactIcon className="w-10 h-10" />
                <p>
                  5/5 <br /> Core skill of my portfolio. Every frontend i do, i
                  use React. Know everything i need to code with it.
                </p>
              </div>
            </div>
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
