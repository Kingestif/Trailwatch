export default function Herosection() {
  return (
    <div className="HeroText text-white flex flex-col gap-15 justify-center flex-1 ">
       <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl flex flex-col gap-3">
            <div>Your Universe</div>
            <div>Of Movies &</div>
            <div>Shows</div>
        </div>

        <div className="text-xl text-gray-400">Discover trending films, latest trailers, and timeless classics.</div>

        <div className="flex gap-5 items-center">
            <button className="bg-primary px-6 py-3 text-white rounded-md font-bold text-lg">Start Watching</button>
            <button className="font-medium text-lg">Explore Movies</button>
        </div>
    </div>
  )
}