import {IResp} from "../types";
import {IMovie, IMovieInfo} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const moviesService = {
    getAll: (page:string ,with_genres: string):IResp<{results: IMovie[]}> => apiService.get(urls.movies.base,{params: {page, with_genres}}),
    getById: (movie_id: number): IResp<IMovieInfo> => apiService.get(urls.movies.byId(movie_id)),
    getAllWithTitle: (page: string, query: string): IResp<{results: IMovie[] }> => apiService.get(urls.search.base, {params: {page, query}})
}

export {
    moviesService
}