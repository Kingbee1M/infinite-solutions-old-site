"use client"

import Link from "next/link"
import { useState } from "react"
import Modal from "../_ui/Modal"
import LoginForm from "./LoginForm"

function Navbar() {
    const [active, setActive] = useState(false)
    const [visible, setVisible] = useState(false)
    const toggle = () => {
        setVisible(false)
    }

    return (
<>
    <div className="flex relative w-full pb-7 bg-blue-100 items-center justify-center bg-opacity-70 z-20">
    <button className={`hamburg z-40 ${active ? "active": ""}`} onClick={()=>setActive(!active)}>
        <span className="hamburg-top"></span>
        <span className="hamburg-mid"></span>
        <span className="hamburg-bot"></span>
    </button>
</div>
      {active && <div className="h-full bg-white w-full absolute top-14 left-0 z-20 flex flex-col justify-start items-center text-black">
        <Link href="/" className="hover:text-primary font-bold border w-full  p-3 border-slate-200" onClick={()=>setActive(false)}>Home</Link>
        <Link href="/career" className="hover:text-primary font-bold border w-full  p-3 border-slate-200" onClick={()=>setActive(false)}>Careers</Link>
        <Link href="/about" className="hover:text-primary font-bold border w-full  p-3 border-slate-200" onClick={()=>setActive(false)}>About Us</Link>
        <Link href="/contact" className="hover:text-primary font-bold border w-full  p-3 border-slate-200" onClick={()=>setActive(false)}>Contact Us</Link>
        <div className="hover:text-primary font-bold border w-full  p-3 border-slate-200" onClick={()=>{setActive(false)
         setVisible(true)}}>Login</div>
      </div>}
      {visible && 
    <Modal visible={visible} onClose={toggle}><LoginForm/></Modal>
    }
</>
    )
}

export default Navbar
