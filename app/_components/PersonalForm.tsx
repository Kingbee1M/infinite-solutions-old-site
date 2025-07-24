
export default function PersonalForm() {
    return (
    <form className="flex flex-col p-3 space-y-3 text-sm lg:text-base mt-2">
        <h3 className="font-bold">Personal information:</h3>

        {/* Required inputs */}
        <div className="">
        <label className="text-sm" htmlFor="name">Name<span className="text-red-500">*</span></label>
        <div className="flex flex-col lg:flex-row gap-5 w-full">
        <div className="flex flex-col w-full lg:w-1/2">
        <input type="text" placeholder='First Name' className='p-2 px-4 rounded-md bg-white focus:outline-none bg-transparent border border-slate-300'/>
        </div>
        
        <div className="flex flex-col w-full lg:w-1/2">
        <input type="text" placeholder='Last Name' className='p-2 px-4 rounded-md focus:outline-none bg-transparent border border-slate-300 bg-white'/>
        </div>
        </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex flex-col w-full lg:w-1/2">
        <label className="text-sm" htmlFor="email">Email<span className="text-red-500">*</span></label>
        <input type="text" placeholder='info@infiniteSolution.com' className='p-2 px-4 rounded-md bg-white focus:outline-none bg-transparent border border-slate-300'/>
        </div>
        <div className="flex flex-col w-full lg:w-1/2">
        <label className="text-sm" htmlFor="dob">Date of Birth<span className="text-red-500">*</span></label>
        <input type="text" placeholder='DD-MM-YYYY' className='p-2 px-4 rounded-md focus:outline-none bg-transparent border border-slate-300 bg-white'/>
        </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex flex-col w-full lg:w-1/2">
        <label className="text-sm" htmlFor="number">Phone Number<span className="text-red-500">*</span></label>
        <input type="text" placeholder='(0) 000 0000 000' className='p-2 px-4 rounded-md focus:outline-none bg-transparent border border-slate-300 bg-white'/>
        </div>
        <div className="flex flex-col w-full lg:w-1/2">
        <label className="text-sm" htmlFor="number2">Mobile Number<span className="text-red-500">*</span></label>
        <input type="text" placeholder='(0) 000 0000 000' className='p-2 px-4 rounded-md focus:outline-none bg-transparent border border-slate-300 bg-white'/>
        </div>
        </div>
        
        <div className="flex flex-col w-full">
        <label className="text-sm" htmlFor="dob">Street Address<span className="text-red-500">*</span></label>
        <input type="text" placeholder='Street Address' className='p-2 px-4 rounded-md focus:outline-none bg-transparent border border-slate-300 bg-white'/>
        </div>

        {/* Optional inputs */}
        <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex flex-col w-full lg:w-1/2">
        <label className="text-sm" htmlFor="city">City</label>
        <input type="text" className='p-2 px-4 rounded-md bg-white focus:outline-none bg-transparent border border-slate-300'/>
        </div>
        <div className="flex flex-col w-full lg:w-1/2">
        <label className="text-sm" htmlFor="state">State/Province</label>
        <input type="text" className='p-2 px-4 rounded-md focus:outline-none bg-transparent border border-slate-300 bg-white'/>
        </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex flex-col w-full lg:w-1/2">
        <label className="text-sm" htmlFor="zipCode">Zip/Postal Code</label>
        <input type="text" className='p-2 px-4 rounded-md bg-white focus:outline-none bg-transparent border border-slate-300'/>
        </div>
        <div className="flex flex-col w-full lg:w-1/2">
        <label className="text-sm" htmlFor="country">Country</label>
        <input type="text" placeholder="United State" className='p-2 px-4 rounded-md focus:outline-none bg-transparent border border-slate-300 bg-white'/>
        </div>
        </div>
        <div className="flex flex-col w-full">
        <label className="text-sm" htmlFor="dob">Are you a Nigerian Citizen?</label>
        </div>
        <div className="flex space-x-3">
        <label>
            <input type="radio" name="citizen" value="yes" /> Yes 
        </label>
        <label>
            <input type="radio" name="citizen" value="no"/> No
        </label>
        </div>
    </form>
    )
}