import {Genres, MoviePagination, MoviesList, SearchMovieForm} from "../components";

const MoviesPage = () => {
    return (
        <div>
            <Genres/>
            <SearchMovieForm/>
            <MoviePagination/>
            <MoviesList/>
        </div>
    );
};

export {MoviesPage};