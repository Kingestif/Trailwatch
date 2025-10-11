export async function GET(request:Request){
  const { searchParams } = new URL(request.url);
  const movieID = searchParams.get("movieID");
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`, {
    cache:"no-store",
    method:"GET",
    headers:{
      "Content-Type":"application/json",
      "Authorization":`Bearer ${process.env.TMDB_API_KEY}`
    }
  })
  const data = await res.json();
  return Response.json(data);
}