"use client"
import { MoveUpRight } from "lucide-react"
import ProjectTechnologies from "./ProjectTechnologies"
import Link from "next/link"
import {motion} from "motion/react"

const ProjectCards = () => {
  return (
    <>
     <motion.div
      initial={{opacity:0, y: 75}}
      whileInView={{opacity:1, y:0}}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.25 }} 
      className="w-full p-4 md:p-8  rounded-lg bg-[#1A1A1A]">
        <div className="imgdiv rounded-lg w-full h-[280px] sm:h-[430px] bg-red-800"></div>
        <h2 className="text-2xl pt-8 sm:text-3xl sm:font-semibold">Shoptidy</h2>
        <div className="flex gap-5 justify-between flex-col sm:flex-row pt-3">
            <ProjectTechnologies />
            <Link
            className="p-3 bg-primary rounded-lg self-start sm:self-end"
            href={`/work/`}>
               <MoveUpRight className="size-5  text-black sm:size-8"/>
            </Link>
        </div>
     </motion.div>
     
     
    </>
  )
}

export default ProjectCards