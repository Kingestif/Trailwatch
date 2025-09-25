import { ServiceData } from "../../lib/Placeholder";

export default function ServicePage() {
  return (
    <div className="flex flex-col gap-15 text-white px-50 py-20 max-sm:px-10 max-sm:py-10 max-sm:gap-5">
        <div className="text-center text-4xl max-sm:text-3xl max-sm:font-medium">What We Offer</div>
        <div className="flex justify-around max-sm:flex-wrap max-sm:gap-10">
            {ServiceData.map(item=>(
                <div key={item.title} className="text-center flex flex-col gap-3 max-sm:gap-2">
                    <div className="w-100 h-100 max-sm:w-50 max-sm:h-50 ">
                        <img className="w-full h-full object-cover rounded-4xl" src={item.image} alt="" />
                    </div>
                    <div className="text-2xl font-semibold max-sm:text-xl">{item.title}</div>
                    <div className="text-xl w-100 text-gray-500 max-sm:w-50 max-sm:text-sm">{item.description}</div>
                </div>
            ))}
        </div>
    </div>
  )
}
