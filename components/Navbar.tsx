import Link from "next/link"
import { JSX } from "react"



const Navbar = ({navitems, classname}: {navitems:{
    name:string,
    link: string,
    icon: JSX.Element
}[], classname?: string}) => {
  return (
    <>
     <div className="border px-8 py-4 absolute top-9 left-1/2 -translate-x-1/2   bg-[#1A1A1A] gap-4  rounded-lg flex justify-center border-zinc-600 ">
        {navitems.map((navitem, id)=> (
            <Link 
             key={`Link=${id}`}
             href={navitem.link}>
                <div className="flex ">
                  <span className="sm:hidden">{navitem.icon}</span>
                  <span className="hidden sm:block">{navitem.name}</span>
                </div>
            </Link>
        ))}
     </div>
    </>
  )
}

export default Navbar