import Link from "next/link";

export default function CTA() {
  return (
    <div className="flex px-50 items-center py-20 max-sm:px-10 max-sm:py-3">
      <div className="w-100 h-100 max-sm:w-50 max-sm:h-50 flex justify-center">
        <img src="/groot2crop.png" className="w-full h-full object-contain filter brightness-75" alt="" />
      </div>
      <div className="flex flex-col gap-7 max-sm:gap-3">
        <div className="flex flex-col gap-3">
          <div className=" text-4xl font-bold max-sm:text-sm max-sm:font-medium max-sm:text-gray-200">Join now to stream movies instantly on any device.</div>
          <div className="text-2xl text-gray-400 max-sm:text-sm max-sm:hidden">Thousands of Movies. One Click Away.</div>
        </div>
        <Link href={"/home"}>
          <div className="text-lg bg-primary w-fit rounded-full px-4 py-2 font-semibold max-sm:text-xs max-sm:px-2 max-sm:py-2 hover:bg-red-700 active:bg-red-700">Start watching</div>
        </Link>
      </div>
    </div>
  )
}