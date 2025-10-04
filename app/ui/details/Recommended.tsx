"use client"
import { CollectionType, recommendedType } from "@/app/lib/types";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Recommended({id, media_type}:recommendedType) {
    const [movie, setMovie] = useState<{results:CollectionType[] | null}>({ results: null });

    useEffect(()=>{
        async function fetchData(){
          let url = ""
          if(media_type === "movie"){
            url = `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`
          }else{
            url = `https://api.themoviedb.org/3/tv/${id}/recommendations?language=en-US&page=1`
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
    
        fetchData();
    },[id, media_type]);

    return (
        <div className="flex flex-col gap-5 py-5">
            <div className="text-3xl font-semibold">Recommended</div>
            <div className="flex gap-5 overflow-x-auto hide-scrollbar">
                {movie.results?.map((movie:CollectionType)=>(
                    <div key={movie.id} className="flex flex-col gap-2 font-bold">
                    <div className="w-50 h-60 rounded-lg bg-gray-500">
                        <Image
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title || movie.name}
                            className="object-cover w-full h-full rounded-lg"
                            width={200}
                            height={300}
                        />
                    </div>
                    <div className="flex flex-col">
                        <div className="text-xl">{movie.name || movie.title}</div>
                        <div className="flex justify-between text-gray-300">
                        <div>{(movie.release_date || movie.first_air_date).split("-")[0]}</div>
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