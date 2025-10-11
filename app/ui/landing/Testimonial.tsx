import { testimonialData } from "../../lib/Placeholder";

export default function Testimonial() {
  return (
    <div className="px-50 text-gray-100 flex flex-col gap-10 py-20 max-sm:hidden">
        <div className="text-center flex flex-col gap-5">
            <div className="text-4xl">Dont just take our word for it</div>
            <div className="text-2xl text-gray-400">Hear what our customers have to say</div>
        </div>
        
        <div className="flex gap-10 justify-between">
            {
                testimonialData.map(item=>(
                    <div key={item.name} className="bg-gray-900 w-100 flex flex-col p-3 gap-3 rounded-xl">
                        <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-600" width={70} viewBox="0 0 640 640"><path d="M96 280C96 213.7 149.7 160 216 160L224 160C241.7 160 256 174.3 256 192C256 209.7 241.7 224 224 224L216 224C185.1 224 160 249.1 160 280L160 288L224 288C259.3 288 288 316.7 288 352L288 416C288 451.3 259.3 480 224 480L160 480C124.7 480 96 451.3 96 416L96 280zM352 280C352 213.7 405.7 160 472 160L480 160C497.7 160 512 174.3 512 192C512 209.7 497.7 224 480 224L472 224C441.1 224 416 249.1 416 280L416 288L480 288C515.3 288 544 316.7 544 352L544 416C544 451.3 515.3 480 480 480L416 480C380.7 480 352 451.3 352 416L352 280z"/></svg>
                        </div>

                        <div className="px-3 flex flex-col gap-5">
                            <div>{item.text}</div>
                            <div className="flex gap-5">
                                <div className="w-10 h-10 rounded-full overflow-hidden ">
                                    <img className="w-full h-full object-cover" src={item.imageUrl} alt="" />
                                </div>
                                <div>
                                    <div>{item.name}</div>
                                    <div className="text-gray-500">{item.role}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
