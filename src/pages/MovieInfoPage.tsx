import {useEffect} from "react";
import {useParams} from "react-router-dom";

import {MovieInfo} from "../components";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {movieAction} from "../store";
import {useAppLocation} from "../hooks/useAppLocation";
import {IMovie} from "../interfaces";

const MovieInfoPage = () => {
    const {state} = useAppLocation<{movie: IMovie}>();
    const dispatch = useAppDispatch();
    const {movie} = useAppSelector(state1 => state1.movies);
    const {id}  = useParams();


    useEffect(() => {
        if (!state.movie) {
            dispatch(movieAction.getById(+id))
            console.log(id)
        }
    }, [id]);

    return (
        <div>
            {movie && <MovieInfo movie={movie}/>}
        </div>
    );
};

export {MovieInfoPage};