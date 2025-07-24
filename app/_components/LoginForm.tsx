"use client"
import SignupForm from "./SignupForm";
import Image from "next/image";
import { useState } from "react";

export const metadata = {
    title: "Login",
    description: "Login to your IGS account",
}
export default function LoginForm() {
    const [text, setText] = useState("")
    const [password, setPassword] = useState("")
   // eslint-disable-next-line
    const [Active, setActive] = useState("flex");
    // eslint-disable-next-line
    const [notActive, setNotActive] = useState("hidden");
    const [firstButton, setFirstButton] = useState(Active)
    const [secondButton, setsecondButton] = useState(notActive)
    const [logs, setLogs]  = useState(Active)
    const [sign, setSign]  = useState(notActive)
    const isDisabled = text.length <= 3
    const isLog = password.length <= 7
  return (
    <div>
      <div className={`${logs} flex-col items-center justify-center max-w-xl mx-auto p-3 lg:py-5 lg:px-7 xl:px-10 rounded-xl shadow-2xl space-y-3 lg:space-y-5 text-black`}>
      <h3 className="font-medium text-lg lg:text-xl">Sign up to continue</h3>
      <button className="flex items-center justify-center space-x-2 font-extrabold text-sm px-5 lg:px-10 py-2 border border-slate-300 rounded-full w-full">
       <Image src="/assets/google.png" height={15} width={15} alt="google logo"/>
       <p>Sign Up With Google </p>
      </button>
    <div className="text-center w-full font-bold">
    OR
    </div>
    
      <div className="flex flex-col w-full">
        <label htmlFor="name" className="font-bold">Email</label>
        <input type="email" required placeholder='info@infiniteSolution.com' className='py-2 px-3 rounded-full placeholder:italic bg-white focus:outline-none bg-transparent border border-slate-300' defaultValue={text} onChange={(e)=>setText(e.target.value)}/>
      </div>

      <div className={`${secondButton} flex-col w-full`}>
      <label htmlFor="password" className="font-bold">Password</label>
      <input type="password" placeholder='Enter Password' className='py-2 px-3 rounded-full placeholder:italic bg-white focus:outline-none bg-transparent border border-slate-300' defaultValue={password} onChange={(e)=>setPassword(e.target.value)}/>
      </div>

      <button className= {`${firstButton} items-center justify-center space-x-2 font-extrabold text-sm px-10 py-2 bg-primary disabled:bg-slate-200 disabled:cursor-not-allowed disabled:font-light rounded-full w-full`} disabled={isDisabled} onClick={() => {setFirstButton(notActive); setsecondButton(Active)}}>
       Continue
      </button>

      <button className={`${secondButton} items-center justify-center space-x-2 font-extrabold text-sm px-10 py-2 bg-primary disabled:bg-slate-200 disabled:cursor-not-allowed disabled:font-light rounded-full w-full`} disabled={isLog} >
       Continue
      </button>

      <div className="text-xs text-center">By Signing up,  you acknowledge that you have read and understood and agree to Novac <span className="text-primary underline hover:cursor-pointer">Terms</span> and <span className="text-primary underline hover:cursor-pointer">Privacy Policy.</span></div>

      <div className="text-xs text-center">Already have an account? <button onClick={() => {setLogs(notActive); setSign(Active)}}><span className="text-primary underline hover:cursor-pointer">Sign in</span></button></div>
    </div>
    <SignupForm  className={sign} />
    </div>
  )
}
