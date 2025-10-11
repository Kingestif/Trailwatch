export async function GET(request:Request){
  const {searchParams} = new URL(request.url);
  const movieName = searchParams.get("movieName");
  const res = await fetch(`https://api.themoviedb.org/3/search/multi?query=${movieName}&include_adult=false&language=en-US&page=1`, {
    cache: "no-store",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.TMDB_API_KEY}`
    }
  });

  const data = await res.json();
  return Response.json(data);
}