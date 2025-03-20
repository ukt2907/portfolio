"use client"
import React from 'react'
import { motion } from "motion/react"
import TechCard from './TechCard'
import { techCardsItems } from '@/lib/constants'
function TechSkills() {
  return (
   <>
    <div className='lg:px-28 sm:pt-12 pb-6 md:max-w-full '>
        <motion.h1 
        initial={{ opacity: 0, x: -75 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className='text-3xl md:text-5xl   font-bold text-white/85  tracking-normal'>Current technologies</motion.h1>
        <motion.p
        initial={{ opacity: 0, x: -75 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className='text-[#a5a3a3] pt-5 leading-snug text-sm '>I'm proficient in a range of modern technologies that empower me to build highly functional solutions. These are some of my main technologies.</motion.p>
        <motion.div 
          initial={{opacity:0, y: 75}}
          whileInView={{opacity:1, y:0}}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className='grid grid-cols-1 pt-10 sm:grid-cols-2 lg:grid-cols-4
           items-center justify-between gap-4'>
             {techCardsItems.map((carditem)=>(
            <TechCard key={carditem.name} cardInfo={carditem}/>
            ))}
        </motion.div>
    </div>
   </>  
  )
}

export default TechSkills