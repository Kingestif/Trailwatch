"use client"
import { CollectionType } from "@/app/lib/types"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"

export default function Navbar() {
  const currentPath = usePathname()
  const [movie,setMovie] = useState<{results:CollectionType[]}>({results:[]})
  const [value,setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [focused, setFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  async function fetchData(movieName:string) {
    setLoading(true);
    setSearched(false);
    setMovie({results:[]})
    

    const res = await fetch(`/api/search?movieName=${movieName}`);

    const data = await res.json();
    setMovie(data)
    setSearched(true);
    setLoading(false);
  }

  useEffect(()=>{
    setFocused(false)
    setMovie({results:[]})
    setSearched(false);
  },[currentPath])

  return (
    <div className="Navbar z-50 text-white flex justify-between text-2xl py-3 fixed w-full left-0 px-50 max-sm:text-sm max-sm:px-5 max-sm:static items-center backdrop-blur-md bg-black">
      <Link href={"/"}>
        <div className="text-4xl font-semibold max-sm:text-xl text-primary duration-200">Trailwatch</div>
      </Link>
      <div className="flex gap-10 max-sm:hidden items-center">
        <Link href={"/home"}>
          <div className="hover:text-primary active:text-primary duration-200">Home</div>
        </Link>
        <Link href={"/home"}>
          <div className="hover:text-primary active:text-primary duration-200">Browse</div>
        </Link>
        {currentPath === "/" && 
          <nav>
            <a href="/#about" className="hover:text-primary active:text-primary duration-200">About</a>
          </nav>
        }
        {currentPath !== "/" &&
          <div 
            ref={containerRef}
            className="SEARCH flex bg-gray-600/50  items-center rounded-full p-2 relative"
            onFocus={() => setFocused(true)}
            onBlur={(e) => {
              if (!containerRef.current?.contains(e.relatedTarget)) {
                setFocused(false);
                setMovie({ results: [] });
                setSearched(false);
              }
            }}
            tabIndex={-1} 
            >
              <input type="text" className="w-80 h-8 text-lg p-5 focus:outline-0 " 
                ref={inputRef}
                placeholder="Search"
                value={value}
                onChange={(e)=>{
                  setValue(e.target.value);
                  if (e.target.value === "") {
                    setMovie({ results: [] });
                    setSearched(false);
                  }
                }}
                onKeyDown={(e) => e.key === "Enter" && fetchData(value)}
              >
              </input>
            <button 
              onMouseDown={(e) => { 
                e.preventDefault();         
                fetchData(value) 
                inputRef.current?.focus()
              }}
              >
              <svg className="fill-gray-300 hover:fill-white cursor-pointer" width={30} height={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"/></svg>
            </button>
            
            {focused && value.trim() !== "" && 
              <>
                {loading &&
                  <div className="rounded-2xl h-20 w-full bg-black absolute left-1/2 top-15 translate-x-[-50%] overflow-y-auto hide-scrollbar flex justify-center items-center">
                    <svg className="animate-spin h-10 w-10  text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" fill="none"/>
                      <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
                    </svg>
                  </div>
                }
    
                {searched && movie.results.length < 1 &&
                  <div className="rounded-2xl h-20 w-full bg-black absolute left-1/2 top-15 translate-x-[-50%] overflow-y-auto hide-scrollbar flex justify-center items-center">
                    <div className="text-lg">No results found.</div>
                  </div>
                }
    
                
                {movie.results.length > 0 && 
                  <div className="rounded-2xl h-100 w-full bg-black absolute left-1/2 top-15 translate-x-[-50%] overflow-y-auto hide-scrollbar">
                    {
                      movie.results?.map((movie:CollectionType)=>(
                        <Link key={movie.id} href={`/details/${movie.id}?type=${movie.media_type}`}>
                          <div key={movie.id} className="p-5 text-white flex gap-2 hover:bg-blue-500/30">
                            <div className="w-23 h-25">
                              <Image
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.name || movie.title}
                                className="object-cover w-full h-full rounded-lg"
                                width={23}
                                height={25}
                              />
                            </div>
                            <div className="flex flex-col justify-between">
                              <div className="flex flex-col">
                                <div className="text-lg w-50 line-clamp-2">{movie.name || movie.title}</div>
                                <div className="text-sm w-50">{movie.release_date || movie.first_air_date}</div>
                              </div>
                              <div className="flex items-center gap-1">
                                <img src="/star.png" className="h-5 w-5" alt="Rating"/>
                                <div className="text-sm">{movie.vote_average}</div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))
                    }
                  </div>
                }
              </>
            }
          </div>
        }
      </div>

      {
        currentPath === "/"? 
        <Link href={"/home"}>
          <div className="bg-primary text-lg font-semibold rounded-md px-3 py-1 max-sm:text-sm max-sm:px-2 max-sm:py-1 flex items-center hover:bg-red-700 active:bg-red-700 duration-200">Get Started</div>
        </Link>
        :
        <div className=" rounded-full bg-gray-500 p-1 max-sm:px-1 max-sm:py-1 flex items-center hover:bg-gray-600 active:bg-gray-600 duration-200 cursor-pointer">
          <svg width="40" height="40" viewBox="0 0 24 24" className="text-white max-sm:w-7 max-sm:h-7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
            <path d="M4 20c0-2.21 3.58-4 8-4s8 1.79 8 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      }
    </div>
  )
}