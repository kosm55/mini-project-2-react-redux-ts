const baseURL= 'https://api.themoviedb.org/3'

const movies= '/discover/movie'
const search = '/search/movie'
const genres= '/genre/movie/list'


const urls={
    movies: {
        base: movies,
        byId: (movie_id: number): string => `/movie/${movie_id}}`,

    },
    genres: {
        base: genres,
        byId: (genre_id: number): string => `/genre/${genre_id}`
    },
    search: {
        base: search
    }
}

export {
    baseURL,
    urls
}