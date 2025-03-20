"use client";
import ShinyText from "@/Reactbits/ShinyText/ShinyText";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import ShinyButton from "./ui/ShinyButton";
import Link from "next/link";
import { ChevronRight, Download } from "lucide-react";
import { cn } from "@/lib/utils";

 

const HeroSection = () => {
  return (
    <>
     <div className="relative  flex flex-col h-[50rem] w-full items-center justify-center bg-[#0A0A0A]">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:30px_30px]",
          "[background-image:linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)]",

        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#0A0A0A] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)] dark:bg-black"></div>
      <div className="z-20">
        <h2 className="uppercase  font-semibold tracking-wider text-base  text-zinc-200">based in india</h2>
      </div>
      <div>
        <TextGenerateEffect 
        words={`Quality Design & Web Development Synergy`}
        className="text-[40px] md:text-6xl lg:text-7xl font-bold text-center max-w-5xl md:leading-none leading-snug  tracking-wide"   />
      </div>
      <div className="pt-5 text-center z-20">
        <p className="text-white/60 text-lg">Hi, I'm Umesh, I create intuitive, visually stunning and highly functional web applications.</p>
      </div>
      <div className="pt-8 flex flex-col gap-4 sm:flex-row sm:gap-4 sm:items-center items-center">
         <ShinyButton icon={<ChevronRight />}>
              <Link href="#work">See My Work</Link>
         </ShinyButton>
         <a 
         href=""
         className="flex gap-3 z-20 group items-center">
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