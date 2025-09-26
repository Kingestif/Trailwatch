import MovieGallary from "../ui/home/MovieGallary";
import Movies from "../ui/home/Movies";
import Series from "../ui/home/Series";
import TopBanner from "../ui/home/topBanner";

export default function page() {
  return (
    <div className="bg-black text-white px-50 flex flex-col gap-10">
      <TopBanner/>
      <Movies/>
      <Series/>
      <MovieGallary/>
    </div>
  )
}