import { MovieGallaryData } from "@/app/lib/Placeholder";
import { TrendingMovies } from "@/app/lib/types";
import Image from "next/image";

export default async function Movies() {
  const res = await fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US", {
    cache:"no-cache",
    method:"GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.TMDB_API_KEY}`
    }
  });

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
    <div className="flex flex-col gap-5">
      <div className="text-3xl font-semibold">Trending</div>
      <div className="flex gap-5 overflow-x-auto hide-scrollbar">
        {trendingMovies.results?.map((movie:TrendingMovies)=>(
          <div key={movie.id} className="flex flex-col gap-2 font-bold">
            <div className="w-50 h-60 rounded-lg bg-gray-500">
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="object-cover w-full h-full"
                width={200}
                height={300}
              />
            </div>
            <div className="flex flex-col">
              <div className="text-xl">{movie.title || movie.name}</div>
              <div className="flex justify-between text-gray-300">
                <div>{(movie.release_date || movie.first_air_date)?.split("-")[0]}</div>
                <div className="flex items-center gap-1">
                  <img src="/star.png" className="h-5 w-5" alt="Rating"/>
                  <div>{movie.vote_average}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}