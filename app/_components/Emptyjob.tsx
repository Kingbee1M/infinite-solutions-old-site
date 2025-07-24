import { GiEmptyMetalBucket } from "react-icons/gi";

export default function EmptyJob ({ className }: { className?: string }) {
    
    return (
        <div className={`${className}w-full h-40 flex flex-col justify-between items-center`}>
            <div><GiEmptyMetalBucket color="grey" className="w-32 h-32" /></div>
            <p className="font-bold text-xl text-gray-500">Sorry it seems there are currently no available jobs</p>
        </div>
    )
}