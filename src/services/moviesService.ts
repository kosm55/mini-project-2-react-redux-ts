import {IResp} from "../types";
import {IMovie, IMovieInfo, IVideo} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const moviesService = {
    getAll: (page:string ,with_genres: string):IResp<{results: IMovie[], page: string, total_pages: number}> => apiService.get(urls.movies.base,{params: {page, with_genres}}),
    getById: (movie_id: number): IResp<IMovieInfo> => apiService.get(urls.movies.byId(movie_id)),
    getAllWithTitle: (page: string, query: string): IResp<{results: IMovie[],page: string, total_pages: number }> => apiService.get(urls.search.base, {params: {page, query}}),
    getVideo: (movie_id: number): IResp<{ results: IVideo[]}>=> apiService.get(urls.movies.video(movie_id))
}

export {
    moviesService
}