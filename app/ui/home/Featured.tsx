"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import { Autoplay } from "swiper/modules"   
import { useEffect, useState } from "react";
import { MoviesType } from "@/app/lib/types";

export default function Featured() {
  const [movie, setMovie] = useState<{results:MoviesType[] | null}>({results:null});

  useEffect(()=> {
    async function fetchPopularMovie(){
      const res = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", {
        cache:"no-store",
        method:"GET",
        headers:{
          "Content-Type":"application/json",
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
        }
      })
      const data = await res.json();
      setMovie(data);
    }

    fetchPopularMovie();
  })

  if(!movie){
    return <div className="">Loading...</div>
  }

  return (
    <div className="overflow-hidden">
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000 }}
        modules={[Autoplay]}  
      >
        {movie.results?.slice(0,3).map((item,i)=>(
          <SwiperSlide key={i}>
            <div className="relative h-100 w-full">
              <img
                src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                alt="Backdrop"
                className="absolute inset-0 object-top w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="relative z-10 h-full flex flex-col justify-center gap-10 px-10 text-white">
                <div className="flex flex-col gap-5 max-w-2xl">
                  <div className="text-5xl font-semibold">{item.title}</div>
                  
                  <div className="flex font-semibold items-center text-white">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1">
                        <img src="/star.png" className="h-5 w-5" alt="Rating"/>
                        <div>{item.vote_average}</div>
                      </div>•
                      <div>{item.release_date.split("-")[0]}</div>
                    </div>
                  </div>

                  <div className="text-white line-clamp-3">
                    {item.overview}
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
