import { MovieGallaryData } from "@/app/lib/Placeholder";

export default function Series() {
    return (
        <div className="flex flex-col gap-5 pb-5">
          <div className="text-3xl font-semibold">Movies</div>
          <div className="flex gap-5 overflow-x-auto hide-scrollbar">
            {MovieGallaryData.map(movie=>(
              <div key={movie.name} className="flex flex-col gap-2 font-bold">
                <div className="w-50 h-60 rounded-lg bg-gray-500">
                  <img
                    src={movie.poster}
                    alt={movie.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-xl">{movie.name}</div>
                  <div className="flex justify-between text-gray-300">
                    <div>{movie.year}</div>
                    <div className="flex items-center gap-1">
                      <img src="/star.png" className="h-5 w-5" alt="Rating"/>
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
