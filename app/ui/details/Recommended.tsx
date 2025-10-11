"use client"
import { CollectionType, recommendedType } from "@/app/lib/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Recommended({id, media_type}:recommendedType) {
  const [movie, setMovie] = useState<{results:CollectionType[]}>({ results: [] });
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    async function fetchData(){
      setLoading(true);
    
      const res = await fetch(`/api/recommended?mediaType=${media_type}&id=${id}`);
      const data = await res.json();
      setMovie(data);
      setLoading(false);
    }
  
    fetchData();
  },[id, media_type]);

  if (!movie || !Array.isArray(movie.results) || movie.results.length < 1) {
    return null;
  }

  return (
    <div className="flex flex-col gap-5 py-5">
      <div className="text-3xl font-semibold max-sm:text-xl">Recommended</div>
      <div className="flex gap-5 overflow-x-auto hide-scrollbar">
        {movie.results?.map((movie:CollectionType)=>(
          <Link key={movie.id} href={`/details/${movie.id}?type=${media_type}`}>
            <div className="flex flex-col gap-2 font-bold focus:text-yellow-400" tabIndex={0}>
              <div className="w-50 h-60 max-sm:w-40 max-sm:h-50 rounded-lg bg-gray-500 relative">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title || movie.name}
                  className="object-cover w-full h-full rounded-lg"
                  width={200}
                  height={300}
                />
                <div className="hover:bg-black/30 absolute w-full h-full top-0 transition-all border-transparent hover:border hover:border-white rounded-lg duration-300"></div>
                
              </div>
              <div className="flex flex-col max-sm:text-sm">
                  <div className="text-xl max-sm:text-base">{movie.name || movie.title}</div>
                  <div className="flex justify-between text-gray-300">
                  <div>{(movie.release_date || movie.first_air_date || "Unknown").split("-")[0]}</div>
                  <div className="flex items-center gap-1">
                      <img src="/star.png" className="h-5 w-5 max-sm:h-3 max-sm:w-3" alt="Rating"/>
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