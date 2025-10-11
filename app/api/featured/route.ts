export async function GET(){
  const res = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", {
    cache:"no-store",
    method:"GET",
    headers:{
      "Content-Type":"application/json",
      "Authorization": `Bearer ${process.env.TMDB_API_KEY}`
    }
  })
  const data = await res.json();
  return Response.json(data);
}