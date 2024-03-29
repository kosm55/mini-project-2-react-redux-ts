const baseURL= 'https://api.themoviedb.org/3'

const movies= '/discover/movie'
const search = '/search/movie'
const genres= '/genre/movie/list'


const urls={
    movies: {
        base: movies,
        byId: (movie_id: number): string => `/movie/${movie_id}}`,
        video: (movie_id: number): string=> `/movie/${movie_id}/videos`

    },
    genres: {
        base: genres
    },
    search: {
        base: search
    }
}

export {
    baseURL,
    urls
}