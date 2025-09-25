import { StreamData } from "../../lib/Placeholder";

export default function Streamers() {
  return (
    <div className="flex gap-10 text-white py-5 max-sm:flex-wrap max-sm:gap-2 max-sm:hidden">
        {StreamData.map((item,idx)=>(
          <div key={item.icon} className="flex items-center gap-5 max-sm:gap-2"> 
            <div className="w-15 h-15 max-sm:w-8 max-sm:h-8">
                <img src={item.icon} className="w-full h-full object-cover filter" alt="Streaming apps" />
            </div>
            {idx < StreamData.length-1 && <div className="text-3xl font-semibold max-sm:text-2xl">+</div>}
          </div>
        ))}
    </div>
  )
}
