import Link from "next/link";

export default function Herosection() {
  return (
    <div className="HeroText text-white flex flex-col gap-15 justify-center flex-1 max-sm:gap-10 max-sm:justify-start max-sm:pb-5">
       <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl flex flex-col gap-3 max-sm:text-4xl max-sm:text-center">
            <div>Your Universe</div>
            <div>Of Movies &</div>
            <div>Shows</div>
        </div>

        <div className="text-xl text-gray-400 max-sm:text-center max-sm:text-lg">Discover trending films, latest trailers, and timeless classics.</div>

        <div className="flex gap-5 items-center max-sm:m-auto">
            <Link href={"/home"}><button className="bg-primary hover:bg-red-700 active:bg-red-700 cursor-pointer px-6 py-3 text-white rounded-md font-bold text-lg max-sm:px-3 max-sm:py-2 max-sm:text-sm">Start Watching</button></Link>
            <Link href={"/home"}><button className="font-medium text-lg max-sm:text-sm text-white/70 hover:text-white active:text-white duration-200 cursor-pointer">Explore Movies</button></Link>
        </div>
    </div>
  )
}