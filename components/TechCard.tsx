import { div } from 'motion/react-client'
import Image from 'next/image'
import React from 'react'

interface TechCardProps {
    cardInfo: {
      name: string;
      description: string;
      imageUrl: string;
      bgColor: string;
    };
  }


const TechCard: React.FC<TechCardProps> = ({cardInfo}) => {
  return (
    <>
        <div className='card hover:bg-white/10 border border-transparent  hover:border-white/10 transition ease-in-out duration-75 cursor-pointer flex gap-5 items-center  p-2.5 rounded-xl bg-[#181818]  text-white '>
            <div className={`p-3 rounded-lg ${cardInfo.bgColor}`}>
            <Image
             src={cardInfo.imageUrl}
             alt={cardInfo.name}
             width={1000}
             height={1000}
             className={`size-8`}  
             />
            </div>
            <div>
            <h3 className='text-lg font-light'>{cardInfo.name}</h3>
            <p className='text-sm text-[#a5a3a3]'>{cardInfo.description}</p>
            </div>
        </div>   
            </>
  )
}

export default TechCard