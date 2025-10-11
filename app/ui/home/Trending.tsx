import { TrendingType } from "@/app/lib/types";
import Image from "next/image";
import Link from "next/link";

export default async function Trending() {
  const res = await fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US", {
    cache:"no-store",
    method:"GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.TMDB_API_KEY}`
    }
  });

  //! Replace this with pulse suspense
  if (!res.ok) {
    return (
      <div className="flex flex-col gap-5">
        <div className="text-3xl font-semibold">Trending</div>
        <div className="text-red-500">Failed to load movies.</div>
      </div>
    );
  }

  const trendingMovies = await res.json()

  return (
    <div className="flex flex-col gap-5 ">
      <div className="text-3xl font-semibold max-sm:text-xl">Trending</div>
      <div className="flex gap-5 overflow-x-auto hide-scrollbar">
        {trendingMovies.results?.map((movie:TrendingType)=>(
          <Link key={movie.id} href={`/details/${movie.id}?type=${movie.media_type}`}>
            <div className="flex flex-col gap-2 font-bold focus:text-yellow-400" tabIndex={0}>
              <div className="w-50 h-60 max-sm:w-40 max-sm:h-50 relative">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title || movie.name}
                  className="object-cover w-full h-full rounded-lg"
                  width={200}
                  height={300}
                />
                <div className="hover:bg-black/30 absolute w-full h-full top-0 transition-all border-transparent hover:border hover:border-white rounded-lg duration-300"></div>

              </div>
              <div className="flex flex-col">
                <div className="text-xl max-sm:text-base">{movie.title || movie.name}</div>
                <div className="flex justify-between text-gray-300">
                  <div className="max-sm:text-sm">{(movie.release_date || movie.first_air_date)?.split("-")[0]}</div>
                  <div className="flex items-center gap-1">
                    <img src="/star.png" className="h-5 w-5 max-sm:h-3 max-sm:w-3" alt="Rating"/>
                    <div className="max-sm:text-sm">{movie.vote_average}</div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}