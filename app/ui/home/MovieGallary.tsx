import { MovieGallaryData } from "@/app/lib/Placeholder";
import Image from "next/image";

export default function MovieGallary() {
  return (
    <div className="flex flex-col gap-5">
      <div className="text-3xl font-semibold">Recommended</div>
      <div className="grid gap-2 grid-cols-3 gap-y-5">
        {MovieGallaryData.map(movie=>(
          <div key={movie.name} className="flex gap-2">
            <div className="w-30 h-40 bg-gray-500"></div>
            <div className="w-50 h-40 flex flex-col justify-between">
              <div className="text-xl">{movie.name}</div>
              <div className="line-clamp-3">{movie.description}</div>
              <div className="flex justify-between">
                <div>{movie.year}</div>
                <div className="flex">
                  <Image src="/star.png" width={20} height={20} alt="Rating"/>
                  <div>{movie.rating}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
