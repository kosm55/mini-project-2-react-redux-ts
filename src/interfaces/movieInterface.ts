import {IGenre} from "./genreInterface";

export interface IMovie{
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}


export interface IMovieInfo{
    genres: IGenre[],
    id: number,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    backdrop_path: string,
    release_date: string,
    runtime: number,
    vote_average: number,
    vote_count: number,
    title: string
}