import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {MoviesListCard} from "../MoviesListCardContainer";
import {movieAction} from "../../../store";
import css from "./MovieList.module.css"


const MoviesList = () => {
    const {movies, searchTitle,page } = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    const [query] = useSearchParams();
    const with_genres=query.get('with_genres')

    useEffect(() => {
        if (searchTitle){
            dispatch(movieAction.getAllWithTitle({page, searchTitle}))
        }else{
            dispatch(movieAction.getAll({page, with_genres}))
        }
    }, [with_genres, searchTitle,dispatch, page]);


    return (
        <div className={css.MoviesListMain}>
            {movies.map(movie=> <MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesList};