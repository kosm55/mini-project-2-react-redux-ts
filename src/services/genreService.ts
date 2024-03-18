import {apiService} from "./apiService";
import {urls} from "../constants";
import {IResp} from "../types";
import {IGenre} from "../interfaces";

const genreService = {
    getAll: (): IResp<{ genres: IGenre[] }> => apiService.get(urls.genres.base),
}

export {
    genreService
}