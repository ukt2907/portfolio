import { cn } from "@/lib/utils";
import { Code, Globe, MoveDown } from "lucide-react";
import Link from "next/link";
import React from "react";
import ProjectTechnologies from "./ProjectTechnologies";
import ShinyButton from "./ui/ShinyButton";
import ContactMe from "./ContactMe";

export function ProjectOverview() {
  return (
    <div className="relative min-h-[300vh] flex flex-col justify-center h-[50rem] w-full bg-[#0A0A0A]">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:30px_30px]",
          "[background-image:linear-gradient(to_right,#151515_1px,transparent_1px),linear-gradient(to_bottom,#151515_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#0A0A0A] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="z-20 pt-24 flex flex-col items-center">
        <h1 className="text-[40px] sm:text-7xl uppercase font-extrabold">shoptidy</h1>
        <h2 className="font-light sm:font-normal max-w-6xl uppercase pt-3 text-center text-4xl sm:text-7xl leading-snug sm:leading-18">
          a modern e-commerce website
        </h2>
        <Link className="my-24" href="#image">
          <MoveDown className="size-16" strokeWidth={1} />
        </Link>
      </div>

      <div className="sm:px-28 z-20">
        <div className="z-20 imagediv sm:h-[800px] bg-red-400 w-full h-[400px] rounded-lg overflow-hidden"></div>
       <div className="sm:flex justify-between">
       <div className="pt-8">
          <h1 className="text-3xl sm:text-5xl font-normal text-stone-200">Project Overview</h1>
          <div className="projecttech flex mt-6 flex-wrap items-center gap-3 max-w-sm">
            <div className="py-2 border border-white/10 px-5 hover:bg-white/10 bg-[#2a2929] rounded-sm">
              <p className="text-xs font-light">Tailwind CSS</p>
            </div>
          </div>
          <div className="flex mt-10 gap-4">
            <ShinyButton icon={<Globe />}>View Demo</ShinyButton>
            <ShinyButton icon={<Code />}>Source Code</ShinyButton>
          </div>
        </div>

        <p className="flex-1 pt-8 font-normal z-20 max-w-xl text-stone-200">
          A modern website with all ecommerce functionalities. It includes features like product browsing, shopping cart, user authentication, ordering a
          product... The application is developed with react + typescript for frontend part, and Supabase as backend.
        </p>
       </div>
      </div>
      <ContactMe />
    </div>
  );
}
