export interface IMovie {
    poster_path: string
    original_title: string
    id: number
}

export interface IDetail {
    backdrop_path: string
    poster_path: string
    original_title: string
    id: number
    title: string
    popularity: number
    overview: string
    release_date: string
    vote_average: number
    biography: string
    profile_path: string
}

export interface IActor {
    id: number
    backdrop_path: string
    profile_path: string
    name: string
    poster_path:string
}