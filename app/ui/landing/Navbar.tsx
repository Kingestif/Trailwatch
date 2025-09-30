export default function Navbar() {
  return (
    <div className="Navbar z-50 text-white flex justify-between text-2xl py-3 fixed w-full left-0 px-50 max-sm:text-sm max-sm:px-2 max-sm:static items-center backdrop-blur-md bg-black">
      <div className="text-4xl font-semibold max-sm:text-xl text-primary">Trailwatch</div>
      <div className="flex gap-10 max-sm:hidden">
        <div>Search</div>
        <div>Home</div>
        <div>Movies</div>
        <div>Series</div>
      </div>
      <div className="bg-primary text-lg font-semibold rounded-md px-3 py-1 max-sm:text-sm max-sm:px-2 max-sm:py-1 flex items-center">Get Started</div>
    </div>
  )
}