import { MovieGallaryData } from "@/app/lib/Placeholder";

export default function MovieGallary() {
  return (
    <div className="flex flex-col gap-5 pb-10">
      <div className="text-3xl font-semibold">Popular Series</div>
      <div className="grid gap-2 grid-cols-3 gap-y-5">
        {MovieGallaryData.map(movie=>(
          <div key={movie.name} className="flex gap-2">
            <div className="w-30 h-40 rounded-lg bg-gray-500">
              <img
                src={movie.poster}
                alt={movie.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-50 h-40 flex flex-col justify-between">
              <div className="text-xl font-bold">{movie.name}</div>
              <div className="line-clamp-3">{movie.description}</div>
              <div className="flex justify-between">
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
