import Image from 'next/image'

export default function BriefHistory() {
  return (
<div className="max-w-xl px-2 mx-auto flex flex-col text-center items-center justify-center mt-2">
    <div className="flex space-x-3">
    <Image src="/assets/deployment-pattern.png" height={20} width={25} alt="pattern icon"/>
    <p className="text-primary font-bold text-base uppercase">Brief History</p>
    </div>
    <p className="capitalize font-bold text-2xl md:text-3xl mt-3">A Journey of Innovation and <span className="text-primary">Growth</span></p>
</div>
  )
}
