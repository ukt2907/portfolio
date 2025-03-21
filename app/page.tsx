import ContactMe from "@/components/ContactMe";
import HeroSection from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { ProjectOverview } from "@/components/ProjectOverview";

import Projects from "@/components/Projects";
import TechSkills from "@/components/TechSkills";
import { BriefcaseBusiness, ContactIcon, House, UserRound } from "lucide-react";

const navItems = [
  { name: "Home", link: "#home", icon: <House /> },
  { name: "Work", link: "#work", icon: <BriefcaseBusiness /> },
  { name: "About", link: "#about", icon: <UserRound /> },
  { name: "Contact", link: "#contact", icon: <ContactIcon /> },
];

export default function Home() {
  return (
    <main className="bg-[#0A0A0A] px-5 sm:px-10 relative  text-white min-h-screen  w-full">
      <div className=" w-full   mx-auto ">
        <Navbar navItems={navItems}/>
        <HeroSection/>
        <TechSkills/>
        <Projects/>
        <ContactMe/>
        <ProjectOverview/>
      </div>
    </main>
  );
}
