import {useEffect} from "react";
import {useParams} from "react-router-dom";

import {MovieInfo} from "../components";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {movieAction} from "../store";

const MovieInfoPage = () => {
    const dispatch = useAppDispatch();
    const {movie} = useAppSelector(state => state.movies);
    const {id}  = useParams();

    useEffect(() => {
        dispatch(movieAction.getById(+id))
    }, [id, dispatch]);

    return (
        <div>

            {movie && <MovieInfo movie={movie}/>}
        </div>
    );
};

export {MovieInfoPage};
