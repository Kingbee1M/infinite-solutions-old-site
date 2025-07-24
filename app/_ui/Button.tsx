"use client"

import Link from "next/link"
import { ButtonProp } from "../_types/type"

function Button({children, link, classname, onClick}:ButtonProp) {
  return (
    <Link href={link ? link : "#"}>
    <div className={`px-3 py-2 bg-primary text-center text-white rounded-md tracking-widest hover:scale-90 transition-all duration-200 cursor-pointer group-hover:bg-white group-hover:text-primary hover:bg-hover hover:text-newPrimary w-fit ${classname}`} onClick={onClick}>
      {children}
    </div>
    </Link>
  )
}

export default Button
