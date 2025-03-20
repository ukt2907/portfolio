"use client"
import { div } from "motion/react-client"
import { BackgroundBeams } from "./ui/ackground-beams"
import ShinyButton from "./ui/ShinyButton"

const ContactMe = () => {
  return (
    <div className="sm:px-28">
      <div className="border relative mt-12 py-12 border-white/10 rounded-lg ">
        <div className=" px-8 pb-28">
          <h1 className="text-5xl sm:max-w-3xl leading-none sm:leading-13 pb-9 font-bold  tracking-wide leading-tighter">Like what you see? Reach <br /> out <span className="text-primary  border-b-3 text-center border-primary">via email </span>
            to collaborate!</h1>
          <ShinyButton>
              <span>Contact Me</span>
          </ShinyButton>
        </div>
        <div className="border border-white/10 w-full"/>
        <div className="px-8 pt-12">
          <h1 className="text-lg font-semibold">Umesh Thakur</h1>
          <p className="text-white/60 mt-1">@ 2025 | All rights reserved</p>
        </div>
        <div>
          {/* <Footer /> */}
        </div>
          <BackgroundBeams className="hidden sm:flex"/>
    </div>
    </div>
  )
}

export default ContactMe