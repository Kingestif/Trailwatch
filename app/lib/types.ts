export type TrendingType = {
    id: string
    title: string,
    name: string,
    poster_path: string,
    vote_average: string,
    release_date: string,
    first_air_date: string,
    media_type:string
}

export type MoviesType = {
    id: string
    title: string,
    poster_path: string,
    vote_average: string,
    release_date: string,
    backdrop_path:string,
    overview:string
}

export type SeriesType = {
    id: string
    name: string,
    overview:string,
    poster_path: string,
    vote_average: string,
    first_air_date: string
}

export type CollectionType = {
    id: string
    title: string,
    name: string,
    poster_path: string,
    vote_average: string,
    release_date: string,
    first_air_date: string,
    overview:string,
    backdrop_path:string,
    genres:{
        id:number,
        name:string
    }[]
}

export type recommendedType = {
    id:string,
    media_type:string
}