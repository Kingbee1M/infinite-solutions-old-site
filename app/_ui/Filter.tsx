"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { FilterButtonProps } from "../_types/type"

function Filter() {
    const searchParams = useSearchParams()
    const active = searchParams?.get("filter") ?? "all"

    return (
        <div className="max-w-5xl mx-auto flex gap-5 items-center justify-center overflow-x-scroll custom-scrollbar pl-56 ">
        <FilterButton active={active} filter="all">All Positions</FilterButton>
        <FilterButton active={active} filter="dataAnalysis">Data Analytics</FilterButton>
        <FilterButton active={active} filter="projectManagement">Project Management</FilterButton>
        <FilterButton active={active} filter="marketing">Marketing</FilterButton>
        <FilterButton active={active} filter="design">Design</FilterButton>
        <FilterButton active={active} filter="softwareDevelopment">Software Development</FilterButton>
        <FilterButton active={active} filter="CyberSecurity">Cyber Security</FilterButton>
        <FilterButton active={active} filter="DataAnalysis">Data Analysis</FilterButton>
        <FilterButton active={active} filter="Design">Design</FilterButton>
        </div>
    )
}

const FilterButton = ({ children, filter, active }:FilterButtonProps) => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    function handleClick(filter:string){
        const params = new URLSearchParams(searchParams)
        params.set("filter", filter)
        router.replace(`${pathname}?${params.toString()}`, {scroll: false})
        }
    return (
        <button className={`px-2 md:px-3 text-nowrap py-1 border-2 text-xs md:text-sm hover:bg-primary hover:text-white rounded-full ${active === filter ? "border-primary text-primary" : "border-accent text-accent"}`} onClick={()=>handleClick(filter)}>
            {children}
        </button>
    )
}

export default Filter
