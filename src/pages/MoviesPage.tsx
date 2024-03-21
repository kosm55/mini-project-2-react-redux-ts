import {Genres, MoviePagination, MoviesList, SearchMovieForm} from "../components";
import css from "./MoviesPage.module.css"

const MoviesPage = () => {
    return (
        <div className={css.MoviePage}>
            <Genres/>
            <SearchMovieForm/>
            <MoviePagination/>
            <MoviesList/>
        </div>
    );
};

export {MoviesPage};