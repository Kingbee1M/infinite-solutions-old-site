import { SlLocationPin } from "react-icons/sl";
import { FiClock } from "react-icons/fi";
import Button from "../_ui/Button";

export type jobProps = {
    job: {
    title: string,
    location: string,
    type: string,
    description: string
}
className?: string;
}

export default function JobComponent({className, job}:jobProps) {
    const {title, location, type, description} = job
  return (
    <div className={`w-full px-5 lg:px-7 xl:px-16 ${className}`}>
    <div className="max-w-4xl border-b border-slate-300 py-4 lg:py-8 mx-auto flex items-center justify-between">
    <div className="w-full mx-auto flex flex-col items-start space-y-2">
       <h4 className="font-bold text-base lg:text-lg">{title}</h4>
       <p className="text-xs lg:text-sm">{description}</p>
       <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
       <div className="flex items-center justify-center px-2 md:px-3 py-1 border-2 text-xs md:text-sm rounded-full border-accent text-accent">
       <SlLocationPin /> <span className="ml-1">{location}</span>
        </div>
       <div className="flex items-center justify-center px-2 md:px-3 py-1 border-2 text-xs md:text-sm rounded-full border-accent text-accent">
       <FiClock /> <span className="ml-1">{type}</span>
        </div>
        </div>
    </div>

    <Button link="/apply">Apply</Button>

    </div>
    </div>
  )
}
