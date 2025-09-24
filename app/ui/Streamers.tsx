import { StreamData } from "../lib/Placeholder";

export default function Streamers() {
  return (
    <div className="flex gap-10 text-white py-5">
        {StreamData.map((item,idx)=>(
            <div className="flex items-center gap-5"> 
              <div key={item.icon} className="w-15 h-15">
                  <img src={item.icon} className="w-full h-full object-cover filter" alt="Streaming apps" />
              </div>
              {idx < StreamData.length-1 && <div className="text-3xl font-semibold">+</div>}
            </div>
        ))}
    </div>
  )
}
