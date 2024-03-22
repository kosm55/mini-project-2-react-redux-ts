import {Genres, MoviePagination, MoviesList, SearchMovieForm} from "../components";

import css from "./MoviesPage.module.css"

const MoviesPage = () => {
    return (
        <div className={css.MoviePage}>
            <SearchMovieForm/>
            <Genres/>
            <MoviePagination/>
            <MoviesList/>
        </div>
    );
};

export {MoviesPage};