import { StreamData } from "../lib/Placeholder";

export default function Streamers() {
  return (
    <div className="flex gap-20 text-white py-5">
        {StreamData.map((item,idx)=>(
            <div className="flex items-center gap-3"> 
                <div key={item.icon} className="w-15 h-15">
                    <img src={item.icon} className="w-full h-full object-cover filter" alt="Streaming apps" />
                </div>
                {idx < StreamData.length-1 && <div className="text-xl font-bold">+</div>}
            </div>
        ))}
    </div>
  )
}
