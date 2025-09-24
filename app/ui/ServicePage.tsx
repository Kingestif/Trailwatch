import { ServiceData } from "../lib/Placeholder";

export default function ServicePage() {
  return (
    <div className="flex flex-col gap-15 text-white px-50 py-20 ">
        <div className="text-center font-semibold text-4xl">Services</div>
        <div className="flex justify-around ">
            {ServiceData.map(item=>(
                <div key={item.title} className="text-center flex flex-col gap-3">
                    <div className="w-100 h-100">
                        <img className="w-full h-full object-cover rounded-4xl" src={item.image} alt="" />
                    </div>
                    <div className="text-2xl font-semibold">{item.title}</div>
                    <div className="text-xl w-100 text-gray-500">{item.description}</div>
                </div>
            ))}
        </div>
    </div>
  )
}
