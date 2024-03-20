import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {movieAction} from "../../../store";

const MoviePagination = () => {
    const {page} = useAppSelector(state => state.movies);
    const [, setQuery] = useSearchParams({page: '1'});
    const dispatch = useAppDispatch();

    const prevPage=()=>{
        setQuery(prevState =>{
            const nextPage= (+prevState.get('page')-1).toString()
            dispatch(movieAction.setCurrentPage(nextPage))
            prevState.set('page', nextPage)
            return prevState
        } )
    }
    const nextPage=()=>{
        setQuery(prevState =>{
            const nextPage= (+prevState.get('page')+1).toString()
            dispatch(movieAction.setCurrentPage(nextPage))
            prevState.set('page', nextPage)
            return prevState
        } )

    }



    return (
        <div>
            <button onClick={prevPage}>prev</button>
            <div>{page}</div>
            <button onClick={nextPage}>next</button>
        </div>
    );
};

export {MoviePagination};