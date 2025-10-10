import { MovieGallaryData } from "@/app/lib/Placeholder";
import { SeriesType } from "@/app/lib/types";
import Image from "next/image";
import Link from "next/link";

export default async function Series() {
  const res = await fetch("https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",{
    cache:"no-store",
    method:"GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.TMDB_API_KEY}`
    }
  });
  const SeriesData = await res.json();

  return (
    <div className="flex flex-col gap-5 pb-10">
      <div className="text-3xl font-semibold">Popular Series</div>
      <div className="grid gap-2 grid-cols-3 gap-y-5">
        {SeriesData.results?.map((movie:SeriesType)=>(
          <Link key={movie.id} href={`/details/${movie.id}?type=tv`}>
            <div className="flex gap-2 focus:text-yellow-400" tabIndex={0}>
              <div className="w-30 h-40 relative">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.name}
                  width={200}
                  height={300}
                  className="object-cover w-full h-full rounded-lg"
                />
                <div className="hover:bg-black/30 absolute w-full h-full top-0 transition-all border-transparent hover:border hover:border-white rounded-lg duration-300"></div>

              </div>
              <div className="w-50 h-40 flex flex-col justify-between">
                <div className="text-xl font-bold">{movie.name}</div>
                <div className="line-clamp-3 text-white">{movie.overview}</div>
                <div className="flex justify-between">
                  <div className="text-white">{movie.first_air_date.split("-")[0]}</div>
                  <div className="flex items-center gap-1">
                    <img src="/star.png" className="h-5 w-5" alt="Rating"/>
                    <div className="text-white">{movie.vote_average}</div>
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
