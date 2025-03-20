import { ChevronRightIcon } from "lucide-react"
import ShinyButton from "./ui/ShinyButton"
import ProjectCards from "./ProjectCards"

const Projects = () => {
  return (
    <>
    <div className="pt-36  text-white">
        <div className=" w-full flex flex-col gap-4 sm:flex-row sm:justify-between">
           <h1 className="text-3xl md:text-5xl  font-bold text-white/85  tracking-normal">My Portfolio</h1>
           <ShinyButton icon={<ChevronRightIcon/>}>
           <span>All Projects</span>
           </ShinyButton>
        </div>
        <div className="grid pt-8 gap-4  grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            <ProjectCards/>
        </div>
    </div>
    </>
  )
}

export default Projects