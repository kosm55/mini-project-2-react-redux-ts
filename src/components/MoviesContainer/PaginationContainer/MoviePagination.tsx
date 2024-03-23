import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {movieAction} from "../../../store";
import css from "./MoviePagination.module.css"

const MoviePagination = () => {
    const {  page} = useAppSelector(state => state.movies);
    const [, setQuery] = useSearchParams();
    const dispatch = useAppDispatch();

    const prevPage = () => {
        setQuery(prevState => {
            const nextPage = (+page - 1).toString()
            dispatch(movieAction.setCurrentPage(nextPage))
            prevState.set('page', nextPage)
            return prevState
        })
    }
    const nextPage = () => {
        setQuery(prevState => {
            const nextPage = (+page + 1).toString()
            dispatch(movieAction.setCurrentPage(nextPage))
            prevState.set('page', nextPage)
            return prevState
        })
    }


    return (
        <div className={css.MoviePagination}>
            <button disabled={+page === 1} onClick={prevPage}>&#10094; prev</button>
            <div className={css.page}>{page? page: 1}</div>
            <button disabled={+page === 500} onClick={nextPage}>next &#10095;</button>
        </div>
    );
};

export {MoviePagination};

