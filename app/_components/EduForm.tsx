
export default function EduForm() {
    return (
    <form className="flex flex-col p-3 space-y-3 text-sm lg:text-base mt-2">
        <h3 className="font-bold pb-2 border-b border-slate-200">Education:</h3>

        <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex flex-col w-full lg:w-1/2">
        <label className="text-sm" htmlFor="city">High School</label>
        <input type="text" placeholder="Name of high school attended" className='p-2 px-4 rounded-md bg-white focus:outline-none bg-transparent border border-slate-300'/>
        </div>
        <div className="flex flex-col w-full lg:w-1/2">
        <label className="text-sm" htmlFor="state">Year Graduated</label>
        <input type="text" placeholder="YYYY" className='p-2 px-4 rounded-md focus:outline-none bg-transparent border border-slate-300 bg-white'/>
        </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex flex-col w-full lg:w-1/2">
        <label className="text-sm" htmlFor="city">College</label>
        <input type="text" placeholder="Name of College or University attended" className='p-2 px-4 rounded-md bg-white focus:outline-none bg-transparent border border-slate-300'/>
        </div>
        <div className="flex flex-col w-full lg:w-1/2">
        <label className="text-sm" htmlFor="state">Year Graduated</label>
        <input type="text" placeholder="YYYY" className='p-2 px-4 rounded-md focus:outline-none bg-transparent border border-slate-300 bg-white'/>
        </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex flex-col w-full lg:w-1/2">
        <label className="text-sm" htmlFor="city">Area of Study or Degree</label>
        <input type="text" placeholder="Name of College or University attended" className='p-2 px-4 rounded-md bg-white focus:outline-none bg-transparent border border-slate-300'/>
        </div>
        <div className="flex flex-col w-full lg:w-1/2">
        <label className="text-sm" htmlFor="state">Year Graduated</label>
        <input type="text" placeholder="YYYY" className='p-2 px-4 rounded-md focus:outline-none bg-transparent border border-slate-300 bg-white'/>
        </div>
        </div>
        
        <div className="flex flex-col w-full">
        <label className="text-sm" htmlFor="dob">Graduated?</label>
        </div>
        <div className="flex space-x-3">
        <label>
            <input type="radio" name="graduated" value="yes" /> Yes 
        </label>
        <label>
            <input type="radio" name="graduated" value="no"/> No
        </label>
        </div>

        <h3 className="font-bold pb-2 border-b border-slate-200">Skills / Qualification</h3>
        
        <label className="text-sm" htmlFor="coverLetter">Skills</label>
        <textarea placeholder='Briefly describe your skills and experience relevant to the selected role(s)' className='p-2 px-4 rounded-md focus:outline-none bg-transparent border border-slate-300 bg-white' cols={20} rows={3}/>
        <label className="text-sm" htmlFor="coverLetter">Qualification</label>
        <textarea placeholder='List all your Qualifications and Certificate relevant to the selected role(s)' className='p-2 px-4 rounded-md focus:outline-none bg-transparent border border-slate-300 bg-white' cols={20} rows={3}/>
        
    </form>
    )
}