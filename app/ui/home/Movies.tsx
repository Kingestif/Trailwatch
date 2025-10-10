import { MoviesType, TrendingType } from "@/app/lib/types";
import Image from "next/image";
import Link from "next/link";

export default async function Movies() {
  const res = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", {
    cache: "no-store",
    method:"GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.TMDB_API_KEY}`
    }
  })
  const TopRatedMovies = await res.json();

  return (
    <div className="flex flex-col gap-5 pb-5">
      <div className="text-3xl font-semibold">Movies</div>
      <div className="flex gap-5 overflow-x-auto hide-scrollbar">
        {TopRatedMovies.results?.map((movie:MoviesType)=>(
          <Link key={movie.id} href={`/details/${movie.id}?type=movie`}>
            <div className="flex flex-col gap-2 font-bold">
              <div className="w-50 h-60 relative">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="object-cover w-full h-full rounded-lg"
                  width={200}
                  height={300}
                />
                <div className="hover:bg-black/30 absolute w-full h-full top-0 transition-all border-transparent hover:border hover:border-white rounded-lg duration-300"></div>

              </div>
              <div className="flex flex-col">
                <div className="text-xl">{movie.title}</div>
                <div className="flex justify-between text-gray-300">
                  <div>{movie.release_date.split("-")[0]}</div>
                  <div className="flex items-center gap-1">
                    <img src="/star.png" className="h-5 w-5" alt="Rating"/>
                    <div>{movie.vote_average}</div>
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
