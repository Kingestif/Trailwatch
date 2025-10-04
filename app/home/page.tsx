import Series from "../ui/home/Series";
import Trending from "../ui/home/Trending";
import Movies from "../ui/home/Movies";
import Featured from "../ui/home/Featured";

export default function page() {
  return (
    <div className="bg-black text-gray-100 px-50 flex flex-col gap-10 pt-15">
      <Featured/>
      <Trending/>
      <Movies/>
      <Series/>
    </div>
  )
}