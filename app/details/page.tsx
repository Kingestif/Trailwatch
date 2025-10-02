import MovieDetail from "../ui/details/MovieDetail";
import Recommended from "../ui/details/Recommended";
import Movies from "../ui/home/Movies";
import Series from "../ui/home/Series";

export default function page() {
  return (
    <div className="bg-black text-gray-100 px-50 flex flex-col gap-10 pt-15">
        <MovieDetail/>
        <Recommended/>
        <Series/>
    </div>
  )
}