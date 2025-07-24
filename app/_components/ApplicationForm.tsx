"use client"

import { useState } from "react"
import PersonalForm from "./PersonalForm"
import EduForm from "./EduForm"
import FinalForm from "./FinalForm"

export default function ApplicationForm() {
  const [step, setStep] = useState(1)
  const next = ()=> {
    if (step > 2) return
    setStep(step + 1)
  }
  const prev = ()=> {
    if (step < 2) return
    setStep(step - 1)
  }
  
  return (
    <div className="w-full mb-10">
    <div className="max-w-4xl mx-auto">
      <div className="max-w-lg mx-auto text-center my-5">
        <p className="font-bold lg:text-xl xl:text-2xl my-2">Job <span className="text-primary">Application Form</span></p>
        <p className="text-xs lg:text-sm">Please Fill the Form Below to submit your job Application</p>
      </div>
      <div className="border-t border-slate-300">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between p-3">
          <div className="flex items-center justify-center space-x-2">
            <div className={`border-2 rounded-full h-10 w-10 flex items-center justify-center font-bold ${step === 1 ? "border-primary":"border-gray-200"} ${step > 1 ? "bg-primary text-white":""}`}>
              1
            </div>
            <div className="flex flex-col text-sm">
              <p className="font-bold">First Step</p>
              <p>Personal Details</p>
            </div>
          </div>

          <div className={`border-l-2 h-10 lg:hidden my-4 ${step > 1 ? "border-primary":"border-gray-200"}`}></div>
          <hr className={`hidden lg:block border w-40 border-t m-4 ${step > 1 ? "border-primary":"border-gray-200"}`} />
          
          <div className="flex items-center justify-center space-x-2">
          <div className={`border-2 rounded-full h-10 w-10 flex items-center justify-center font-bold ${step === 2 ? "border-primary bg-gray-50":"border-gray-200 "} ${step > 2 ? "bg-primary text-white":"bg-gray-400"}`}>
              2
            </div>
            <div className="flex flex-col text-sm">
              <p className="font-bold">Second Step</p>
              <p>Education</p>
            </div>
          </div>

          <div className={`border-l-2 h-10 lg:hidden my-4 ${step > 2 ? "border-primary":"border-gray-200"}`}></div>
          <hr className={`hidden lg:block border w-40 border-t m-4 ${step > 2 ? "border-primary":"border-gray-200"}`} />

          <div className="flex items-center justify-center space-x-2">
          <div className={`border-2 rounded-full h-10 w-10 flex items-center justify-center font-bold ${step === 3 ? "border-primary":"border-gray-200 bg-gray-400"}`}>
              3
            </div>
            <div className="flex flex-col text-sm">
              <p className="font-bold">Final Step</p>
              <p>Application</p>
            </div>
          </div>
        </div>

        {step === 1 && <PersonalForm/>}
        {step === 2 && <EduForm/>}
        {step === 3 && <FinalForm/>}

        <div className="flex justify-center items-center space-x-10">
          <button className={`px-5 py-3 border border-primary text-primary hover:scale-95 transition-all duration-200 rounded-md disabled:cursor-not-allowed`}
          disabled={step===1}
          onClick={prev}>Previous</button>
          <button className={`px-7 py-3 bg-primary text-white hover:scale-105 transition-all duration-200 rounded-md ${step===3 ? "hidden":""}`}
          onClick={next}>Next</button>
          <button className={`px-7 py-3 bg-primary text-white hover:scale-105 transition-all duration-200 rounded-md ${step===3 ? "block":"hidden"}`}
          onClick={next}>Submit</button>
        </div>
      </div>
    </div>
    </div>
  )
}
