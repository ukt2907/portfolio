"use client";
import ShinyText from "@/Reactbits/ShinyText/ShinyText";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import ShinyButton from "./ui/ShinyButton";
import Link from "next/link";
import { ChevronRight, Download } from "lucide-react";

 

const HeroSection = () => {
  return (
    <>
    <div className="bg-grid">
      <div className="">
        <h2 className="uppercase font-semibold tracking-wider text-base  text-zinc-200">based in india</h2>
      </div>
      <div>
        <TextGenerateEffect 
        words={`Quality Design & Web Development Synergy`}
        className="text-[40px] md:text-6xl lg:text-7xl font-bold text-center max-w-5xl md:leading-none leading-snug  tracking-wide"   />
      </div>
      <div className="pt-5 text-center">
        <p className="text-white/60 text-lg">Hi, I'm Umesh, I create intuitive, visually stunning and highly functional web applications.</p>
      </div>
      <div className="pt-8 flex flex-col gap-4 sm:flex-row sm:gap-4 sm:items-center items-center">
         <ShinyButton icon={<ChevronRight />}>
              <Link href="#work">See My Work</Link>
         </ShinyButton>
         <a 
         href=""
         className="flex gap-3  group items-center">
            <Download className="text-primary"/>
            <span className="group-hover:text-white/70 transition-colors duration-200 font-normal">
                Download CV
              </span>
         </a>
      </div>
      </div>
    </>
  )
}

export default HeroSection