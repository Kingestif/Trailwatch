import MovieGallary from "../ui/home/MovieGallary";
import TopBanner from "../ui/home/topBanner";

export default function page() {
  return (
    <div className="bg-black text-white px-50 flex flex-col gap-10">
      <TopBanner/>
      <MovieGallary/>
    </div>
  )
}