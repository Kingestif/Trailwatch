"use client"
import { CollectionType, videoDetail } from "@/app/lib/types";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Recommended from "./Recommended";

export default function MovieDetail() {
  const [movie, setMovie] = useState<CollectionType | null>(null);
  const [videoKey, setVideoKey] = useState("");
  const params = useParams();
  const searchParams = useSearchParams();
  const movieId = Array.isArray(params.id) ? params.id[0] : params.id;
  const mediaType = searchParams.get('type'); 
  const [openTrailer, setOpenTrailer] = useState(false);
  const [loading, setLoading] = useState(false);
  const [noVideo, setNoVideo] = useState(false);
  const [save, setSave] = useState(false);

  if (!movieId || !mediaType) return <div>No movie found</div>;

  useEffect(()=>{
    async function fetchData(){
      try{
        const res = await fetch(`/api/moviedetails?mediaType=${mediaType}&movieID=${movieId}`);
        if(!res.ok) throw new Error("Failed to fetch movie details");
        const data = await res.json();
        setMovie(data);

      }catch(error){
        console.error(error);
      }
    }

    fetchData();
  },[movieId, mediaType]);

  
  async function fetchVideo(){
    try{
      setLoading(true)
      setOpenTrailer(false)
      setNoVideo(false)
      const res = await fetch(`/api/video?mediaType=${mediaType}&movieId=${movieId}`);
      if(!res.ok) throw new Error("Can't fetch video trailer");
      const data = await res.json();
      const trailer:videoDetail = data.results?.find(
        (vid: videoDetail) => vid.site === "YouTube"
      );
      if(trailer && data.results.length > 0) {
        setVideoKey(trailer.key)
        setOpenTrailer(true)
      }else{
        setNoVideo(true)
      }
      
    }catch(error){
      console.error(error)
    }finally{
      setLoading(false);
    }
  }

  if (!movie) {
    return (
      <div className="relative w-full h-100 overflow-hidden rounded-lg bg-gray-900 max-sm:h-70">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#1f2937_25%,#374151_50%,#1f2937_75%)] 
                        bg-[length:1000px_100%] animate-[shimmer_2s_infinite]" />

        <div className="absolute bottom-10 left-10 flex flex-col gap-5 max-sm:top-3">
          <div className="h-10 w-2/3 bg-gray-700/60 rounded animate-pulse" />
          <div className="flex gap-3 items-center">
            <div className="h-5 w-24 bg-gray-700/60 rounded animate-pulse" />
            <div className="h-5 w-10 bg-gray-700/60 rounded animate-pulse" />
          </div>
          <div className="h-20 w-3/4 bg-gray-700/60 rounded animate-pulse" />

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
      <div className="relative h-100 w-full max-sm:h-70">
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={"movie title"}
          className="absolute inset-0 object-cover object-top w-full h-full rounded-lg max-sm:rounded-2xl"
          width={200}
          height={300}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center gap-10 px-10 max-sm:px-5 text-white">
          <div className="flex flex-col gap-5 max-w-2xl">
            <div className="text-5xl font-semibold max-sm:text-2xl [text-shadow:_0_2px_4px_rgba(0,0,0,0.3)]">{movie.name || movie.title}</div>
            <div className="flex gap-2 font-semibold items-center text-white">
              <div> {movie.genres && movie.genres.length > 0 ? movie.genres[0].name : "Unknown"}</div>•
              <div>{(movie.release_date || movie.first_air_date || "Unknown").split("-")[0]}</div>
            </div>
            <div className="text-white line-clamp-3 max-sm:line-clamp-2 [text-shadow:_0_2px_4px_rgba(0,0,0,0.3)]">
              {movie.overview}
            </div>
          </div>
          {/* Buttons */}
          <div className="flex gap-3">
            <button onClick={()=>{fetchVideo()}} className="flex items-center bg-white text-black px-5 py-2 max-sm:px-2 max-sm:py-1 rounded-full gap-2 font-bold hover:bg-gray-200 active:bg-gray-200 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="max-sm:w-5" width={30} viewBox="0 0 640 640"><path d="M187.2 100.9C174.8 94.1 159.8 94.4 147.6 101.6C135.4 108.8 128 121.9 128 136L128 504C128 518.1 135.5 531.2 147.6 538.4C159.7 545.6 174.8 545.9 187.2 539.1L523.2 355.1C536 348.1 544 334.6 544 320C544 305.4 536 291.9 523.2 284.9L187.2 100.9z"/></svg>
              Play
            </button>
            <button className="flex items-center bg-gray-600 hover:bg-gray-700 cursor-pointer text-white px-5 py-2 rounded-full gap-2 font-bold duration-200"
              onClick={()=>{setSave(true)}}

            >
              {
                !save?
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width={30} className="max-sm:w-5" fill="white" viewBox="0 0 640 640"><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>
                  Watchlist
                </> :
                <>
                  <svg width="30" height="30" viewBox="0 0 24 24" className="text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Saved!
                </>
              }
            </button>
          </div>
        </div>
      </div>

      {
        loading && 
        <div>
          <div className="fixed inset-0 bg-black/70 z-40"></div>
          <div className="fixed left-1/2 top-1/2 z-50 flex items-center justify-center"
              style={{ transform: "translate(-50%, -50%)" }}>
            <svg className="animate-spin h-30 w-30 max-sm:h-15 max-sm:w-15 text-white" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" fill="none"/>
              <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
            </svg>
          </div>
        </div>
      }

      {
        openTrailer &&
        <>
          <div className="fixed inset-0 bg-black/70 z-40"></div>

          <div className="w-300 h-200 max-sm:w-screen max-sm:h-100 text-black  fixed left-[50%] top-[50%] translate-[-50%] z-50">
            <button
              className="absolute top-2 right-2 bg-black/70 text-white rounded-full px-3 py-1 z-50"
              onClick={() => setOpenTrailer(false)}
            >
              <div className="text-xl font-bold">✕</div>
            </button>
            <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&loop=1&playlist=${videoKey}`} allow="autoplay; encrypted-media" allowFullScreen ></iframe>
          </div>
        </>
      }

      {
        noVideo && 
        <div>
          <div className="fixed inset-0 bg-black/70 z-40"></div>
          <div className="w-100 h-50 max-sm:w-screen max-sm:h-50 text-black bg-black fixed left-[50%] top-[50%] translate-[-50%] z-50 gap-5 flex flex-col justify-center items-center">
            <svg width="48" height="48" viewBox="0 0 24 24" className="mx-auto mb-2 text-red-500" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <line x1="12" y1="8" x2="12" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="12" cy="16" r="1" fill="currentColor"/>
            </svg>
            <div className="text-red-500">Sorry, we couldn't find a trailer for this movie.</div>
            <button
              className="absolute top-2 right-2 bg-black/70 text-white rounded-full px-3 py-1 z-50"
              onClick={() => setNoVideo(false)}
            >
              <div className="text-xl font-bold">✕</div>
            </button>
          </div>
        </div>
      }
      
      <Recommended id={movieId} media_type={mediaType} />
    </div>
  )
}
