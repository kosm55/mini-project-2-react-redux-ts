import {IResp} from "../types";
import {IMovie} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const moviesService = {
    getAll: (with_genres: string):IResp<{results: IMovie[]}> => apiService.get(urls.movies.base,{params: {with_genres}}),
    getById: (movie_id: number): IResp<IMovie> => apiService.get(urls.movies.byId(movie_id))
}

export {
    moviesService
}