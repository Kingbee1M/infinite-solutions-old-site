"use client"
import Button from "../_ui/Button";
import Background from "./Background";
import Modal from "../_ui/Modal"
import { useState } from "react";
import LoginForm from "./LoginForm";

export default function HomeHero() {
  const [visible, setVisible] = useState(false)
  const toggle = () => {
    setVisible(false)
}
  return (
    <main className="relative flex flex-col items-center justify-center h-96 lg:h-[35rem]">
      <Background/>

      <div className="relative z-10 text-center text-white px-3">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold">
        Innovative Solutions for Web & App Development
        </h1>
        <p className="max-w-3xl mx-auto px-3 text-center text-xs md:text-sm my-2">We craft tailored web and app solutions designed to elevate your business. Our approach combines innovative design, robust development, and user-first experiences to deliver products that are both functional and visually engaging.</p>
      </div>
      <Button onClick={()=>setVisible(true)}>Get Started</Button>
       {visible && 
          <Modal visible={visible} onClose={toggle}><LoginForm/></Modal> }
    </main>
  )
}
