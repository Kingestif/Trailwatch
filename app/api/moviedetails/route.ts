export async function GET(request:Request){
    const {searchParams} = new URL(request.url);
    const mediaType = searchParams.get("mediaType");
    const movieId = searchParams.get("movieID");
    
    let url = "";
    
    if(mediaType === "movie"){
        url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`
    }else{
        url = `https://api.themoviedb.org/3/tv/${movieId}?language=en-US`
    }

    const res = await fetch(url,{
        cache:"no-store",
        method:"GET",
        headers: {
            "Content-Type":"application/json",
            "Authorization": `Bearer ${process.env.TMDB_API_KEY}`
        }
    })
    const data = await res.json();
    return Response.json(data);
}