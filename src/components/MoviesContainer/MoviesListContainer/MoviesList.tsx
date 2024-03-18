import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {MoviesListCard} from "../MoviesListCardContainer";
import {useEffect} from "react";
import {movieAction} from "../../../store";
import {useSearchParams} from "react-router-dom";

const MoviesList = () => {
    const {movies} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    const [query, setQuery] = useSearchParams();
    const with_genres=query.get('with_genres')

    useEffect(() => {
        dispatch(movieAction.getAll({with_genres}))
    }, [with_genres]);

    return (
        <div>
            {movies.map(movie=> <MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesList};