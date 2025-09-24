export default function Herosection() {
  return (
    <div className="HeroText text-white py-30 flex flex-col gap-10">
        <div className="text-7xl flex flex-col gap-3">
            <div>Your Universe</div>
            <div>Of movies &</div>
            <div>Shows</div>
        </div>
        <div className="text-xl text-gray-400">Discover trending films, latest trailers, and timeless classics.</div>
        <div className="flex gap-5 items-center">
            <div className="bg-red-600 w-fit text-white p-2 rounded-sm font-bold">Start Watching</div>
            <div className="font-medium">Browse Trailers</div>
        </div>
    </div>
  )
}