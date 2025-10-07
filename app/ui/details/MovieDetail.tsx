"use client"

import { CollectionType } from "@/app/lib/types";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Recommended from "./Recommended";

export default function MovieDetail() {
  const [movie, setMovie] = useState<CollectionType | null>(null);
  const params = useParams();
  const searchParams = useSearchParams();
  const movieId = Array.isArray(params.id) ? params.id[0] : params.id;
  const mediaType = searchParams.get('type'); 

  if (!movieId || !mediaType) return <div>No movie found</div>;

  useEffect(()=>{
    async function fetchData(){
      let url = ""
      if(mediaType === "movie"){
        url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`
      }else{
        url = `https://api.themoviedb.org/3/tv/${movieId}?language=en-US`
      }

      const res = await fetch(url,{
        cache:"no-store",
        method:"GET",
        headers: {
          "Content-Type":"application/json",
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
        }
      })
      const data = await res.json();
      setMovie(data);
    }

    if (movieId && mediaType) {
      fetchData();
    }
  },[movieId, mediaType]);

  if (!movie) {
    return (
      <div className="relative w-full h-100 overflow-hidden rounded-lg bg-gray-900">
        {/* Background shimmer */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#1f2937_25%,#374151_50%,#1f2937_75%)] 
                        bg-[length:1000px_100%] animate-[shimmer_2s_infinite]" />

        {/* Foreground skeleton layout */}
        <div className="absolute bottom-10 left-10 flex flex-col gap-5">
          <div className="h-10 w-2/3 bg-gray-700/60 rounded animate-pulse" />
          <div className="flex gap-3 items-center">
            <div className="h-5 w-24 bg-gray-700/60 rounded animate-pulse" />
            <div className="h-5 w-10 bg-gray-700/60 rounded animate-pulse" />
          </div>
          <div className="h-20 w-3/4 bg-gray-700/60 rounded animate-pulse" />

          {/* Buttons */}
          <div className="flex gap-3 mt-5">
            <div className="h-10 w-32 bg-gray-600/70 rounded-full animate-pulse" />
            <div className="h-10 w-32 bg-gray-700/70 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="relative h-100 w-full">
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={"movie title"}
          className="absolute inset-0 object-cover object-top w-full h-full rounded-lg"
          width={200}
          height={300}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center gap-10 px-10 text-white">
          <div className="flex flex-col gap-5 max-w-2xl">
            <div className="text-5xl font-semibold">{movie.name || movie.title}</div>
            <div className="flex gap-2 font-semibold items-center text-white">
              <div> {movie.genres && movie.genres.length > 0 ? movie.genres[0].name : "Unknown"}</div>•
              <div>{(movie.release_date || movie.first_air_date).split("-")[0]}</div>
            </div>
            <div className="text-white line-clamp-3 ">
              {movie.overview}
            </div>
          </div>
          {/* Buttons */}
          <div className="flex gap-3">
            <button className="flex items-center bg-white text-black px-5 py-2 rounded-full gap-2 font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 640 640"><path d="M187.2 100.9C174.8 94.1 159.8 94.4 147.6 101.6C135.4 108.8 128 121.9 128 136L128 504C128 518.1 135.5 531.2 147.6 538.4C159.7 545.6 174.8 545.9 187.2 539.1L523.2 355.1C536 348.1 544 334.6 544 320C544 305.4 536 291.9 523.2 284.9L187.2 100.9z"/></svg>
              Play
            </button>
            <button className="flex items-center bg-gray-600 text-white px-5 py-2 rounded-full gap-2 font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" width={30} fill="white" viewBox="0 0 640 640"><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>
              Watchlist
            </button>
          </div>
        </div>
      </div>
      
      <Recommended id={movieId} media_type={mediaType} />
    </div>
  )
}
