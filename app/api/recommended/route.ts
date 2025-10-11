export async function GET(request:Request){
    const {searchParams} = new URL(request.url);
    const media_type = searchParams.get('mediaType');
    const id = searchParams.get('id');

    let url = ""
    if(media_type === "movie"){
        url = `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`
    }else{
        url = `https://api.themoviedb.org/3/tv/${id}/recommendations?language=en-US&page=1`
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