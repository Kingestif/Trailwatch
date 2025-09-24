export default function Navbar() {
  return (
    <div className="Navbar text-white flex justify-between text-2xl py-3">
        <div>Trailwatch</div>
            <div className="flex gap-10">
            <div>Search</div>
            <div>Home</div>
            <div>Movies</div>
            <div>Series</div>
            </div>
        <div className="bg-primary text-lg font-semibold rounded-md px-3 py-1">Get Started</div>
    </div>
  )
}