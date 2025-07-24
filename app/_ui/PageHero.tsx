import Image from "next/image"
import { PageHeroProps } from "../_types/type"

export default function PageHero({children, bg}:PageHeroProps) {
  return (
    <header className="relative w-full h-56 flex items-center justify-center">
        <Image src={bg} alt="hero image" fill className="object-center"/>
        <div className="uppercase text-2xl sm:text-4xl font-bold z-10 text-white">{children}</div>
    </header>
  )
}
