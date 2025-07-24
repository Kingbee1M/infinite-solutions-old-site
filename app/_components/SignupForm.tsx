import { useState } from "react";

interface SignupFormProps {
    className: string;
  }
  
  export default function SignupForm({ className }: SignupFormProps) { 
    const [text, setText] = useState("")
    const [password, setPassword] = useState("")
    const isLog = password.length <= 7
    return (
      <div className={`${className} flex-col items-center justify-center max-w-full mx-auto p-3 lg:py-5 lg:px-7 xl:px-32 xl:py-20 rounded-xl shadow-2xl space-y-3 lg:space-y-5 text-black`}>
      <div className="text-primary font-bold text-4xl">Sign Up</div>
      <div className="flex flex-col w-full">
        <label htmlFor="name" className="font-bold">Email</label>
        <input type="email" required placeholder='info@infiniteSolution.com' className='py-2 px-3 rounded-full placeholder:italic bg-white focus:outline-none bg-transparent border border-slate-300' defaultValue={text} onChange={(e)=>setText(e.target.value)}/>
      </div>

      <div className={`flex flex-col w-full`}>
      <label htmlFor="password" className="font-bold">Password</label>
      <input type="password" placeholder='Enter Password' className='py-2 px-3 rounded-full placeholder:italic bg-white focus:outline-none bg-transparent border border-slate-300' defaultValue={password} onChange={(e)=>setPassword(e.target.value)}/>
      </div>

      <button className={`flex items-center justify-center space-x-2 font-extrabold text-sm px-10 py-2 bg-primary disabled:bg-slate-200 disabled:cursor-not-allowed disabled:font-light rounded-full w-full`} disabled={isLog} >
       Continue
      </button>

      </div>
    );
  }