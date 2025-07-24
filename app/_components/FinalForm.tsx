import Button from "../_ui/Button";
import DragDropFileInput from "../_ui/DragDropFileInput";

export default function FinalForm() {
  return (
    <form className="flex flex-col p-3 space-y-3 text-sm lg:text-base mt-2">
        <h3 className="font-bold pb-2 border-b border-slate-200">Employment Desired:</h3>

        <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex flex-col w-full lg:w-1/2">
        <label className="text-sm" htmlFor="city">Applied Position<span className="text-red-500">*</span></label>
        <input type="text" placeholder="Applied Position" className='p-2 px-4 rounded-md bg-white focus:outline-none bg-transparent border border-slate-300'/>
        </div>
        <div className="flex flex-col w-full lg:w-1/2">
        <label className="text-sm" htmlFor="state">Date you can start</label>
        <input type="text" placeholder="DD-MM-YYYY" className='p-2 px-4 rounded-md focus:outline-none bg-transparent border border-slate-300 bg-white'/>
        </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex flex-col w-full lg:w-1/2">
        <label className="text-sm" htmlFor="city">Salary Desired</label>
        <input type="text" placeholder="$0" className='p-2 px-4 rounded-md bg-white focus:outline-none bg-transparent border border-slate-300'/>
        </div>
        </div>
        
        <div className="flex flex-col w-full">
        <label className="text-sm" htmlFor="dob">Have you Applied here before?</label>
        </div>
        <div className="flex space-x-3">
        <label>
            <input type="radio" name="applied" value="yes" /> Yes 
        </label>
        <label>
            <input type="radio" name="applied" value="no"/> No
        </label>
        </div>

        <h3 className="font-bold  pb-2 border-b border-slate-200">Current Employment:</h3>
        <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex flex-col w-full lg:w-1/2">
        <label className="text-sm" htmlFor="city">Current Employer</label>
        <input type="text" placeholder="Name of Current Employer or None if not Employed" className='p-2 px-4 rounded-md bg-white focus:outline-none bg-transparent border border-slate-300'/>
        </div>
        <div className="flex flex-col w-full lg:w-1/2">
        <label className="text-sm" htmlFor="state">Position</label>
        <input type="text" placeholder="Role/Position" className='p-2 px-4 rounded-md focus:outline-none bg-transparent border border-slate-300 bg-white'/>
        </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex flex-col w-full lg:w-1/2">
        <label className="text-sm" htmlFor="city">Current Salary</label>
        <input type="text" placeholder="$0" className='p-2 px-4 rounded-md bg-white focus:outline-none bg-transparent border border-slate-300'/>
        </div>
        <div className="flex flex-col w-full lg:w-1/2">
        <label className="text-sm" htmlFor="state">Start Date</label>
        <input type="text" placeholder="DD-MM-YYYY" className='p-2 px-4 rounded-md focus:outline-none bg-transparent border border-slate-300 bg-white'/>
        </div>
        </div>

        <div className="flex flex-col w-full">
        <label className="text-sm" htmlFor="dob">Reason for Leaving</label>
        <input type="text" placeholder='Reason for Leaving' className='p-2 px-4 rounded-md focus:outline-none bg-transparent border border-slate-300 bg-white'/>
        </div>

        <h3 className="font-bold  pb-2 border-b border-slate-200">Previous Employment:</h3>
        <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex flex-col w-full lg:w-1/2">
        <label className="text-sm" htmlFor="city">Current Employer</label>
        <input type="text" placeholder="Name of Current Employer or None if not Employed" className='p-2 px-4 rounded-md bg-white focus:outline-none bg-transparent border border-slate-300'/>
        </div>
        <div className="flex flex-col w-full lg:w-1/2">
        <label className="text-sm" htmlFor="state">Position</label>
        <input type="text" placeholder="Role/Position" className='p-2 px-4 rounded-md focus:outline-none bg-transparent border border-slate-300 bg-white'/>
        </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex flex-col w-full lg:w-1/2">
        <label className="text-sm" htmlFor="city">Current Salary</label>
        <input type="text" placeholder="$0" className='p-2 px-4 rounded-md bg-white focus:outline-none bg-transparent border border-slate-300'/>
        </div>
        <div className="flex flex-col w-full lg:w-1/2">
        <label className="text-sm" htmlFor="state">Start Date</label>
        <input type="text" placeholder="DD-MM-YYYY" className='p-2 px-4 rounded-md focus:outline-none bg-transparent border border-slate-300 bg-white'/>
        </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex flex-col w-full lg:w-1/2">
        <label className="text-sm" htmlFor="city">Reason for Leaving</label>
        <input type="text" placeholder="Reason for Leaving" className='p-2 px-4 rounded-md bg-white focus:outline-none bg-transparent border border-slate-300'/>
        </div>
        <div className="flex flex-col w-full lg:w-1/2">
        <label className="text-sm" htmlFor="state">End Date</label>
        <input type="text" placeholder="DD-MM-YYYY" className='p-2 px-4 rounded-md focus:outline-none bg-transparent border border-slate-300 bg-white'/>
        </div>
        </div>

        <label className="text-sm" htmlFor="coverLetter">Cover Letter<span className="text-red-500">*</span></label>
        <textarea placeholder='Please do not exceed 200 words' className='p-2 px-4 rounded-md focus:outline-none bg-transparent border border-slate-300 bg-white' cols={20} rows={3}/>
        <input type="file" />
        <div className="w-fit"><Button classname="py-1 px-2">Upload</Button></div>
        <label className="text-sm font-bold" htmlFor="resume">Upload Resume<span className="text-red-500">*</span></label>
        {/* <input type="file" /> */}
        <DragDropFileInput/>
        
        <label className="text-sm" htmlFor="coverLetter">Any Additional Documents</label>
        {/* <input type="file" /> */}
        <DragDropFileInput/>
        <p className="text-xs text-justify">By Clicking the <span className="text-primary">Submit</span> button below, i certify that all the information provided by me on this Application  is True and Complete and i understand that if any false information, omissions, or misinterpretation are discovered my application may be rejected and, if I am employed, my employement may be terminated at any time.  </p>
        

    </form>
  )
}
