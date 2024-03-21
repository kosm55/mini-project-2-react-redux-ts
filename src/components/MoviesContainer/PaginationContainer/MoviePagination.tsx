import {useSearchParams} from "react-router-dom";
import css from "./MoviePagination.module.css"

import {useAppDispatch} from "../../../hooks/reduxHooks";
import {movieAction} from "../../../store";

const MoviePagination = () => {
    // const {  total_pages} = useAppSelector(state => state.movies);
    const [query, setQuery] = useSearchParams({page: '1'});
    const dispatch = useAppDispatch();
    const page = query.get('page')

    const prevPage = () => {
        setQuery(prevState => {
            const nextPage = (+prevState.get('page') - 1).toString()
            dispatch(movieAction.setCurrentPage(nextPage))
            prevState.set('page', nextPage)
            return prevState
        })
    }
    const nextPage = () => {
        setQuery(prevState => {
            const nextPage = (+prevState.get('page') + 1).toString()
            dispatch(movieAction.setCurrentPage(nextPage))
            prevState.set('page', nextPage)
            return prevState
        })

    }


    return (
        <div className={css.MoviePagination}>
            <button disabled={+page === 1} onClick={prevPage}>prev</button>
            <div className={css.page}>{page}</div>
            <button disabled={+page === 500} onClick={nextPage}>next</button>
        </div>
    );
};

export {MoviePagination};