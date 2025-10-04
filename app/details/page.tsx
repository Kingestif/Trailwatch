import MovieDetail from "../ui/details/MovieDetail";
import Recommended from "../ui/details/Recommended";
import Trending from "../ui/home/Trending";
import Movies from "../ui/home/Movies";

export default function page() {
  return (
    <div className="bg-black text-gray-100 px-50 flex flex-col gap-10 pt-15">
      <MovieDetail/>
      <Recommended/>
      <Movies/>
    </div>
  )
}