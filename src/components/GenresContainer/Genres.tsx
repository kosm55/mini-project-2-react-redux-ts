import {useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {GenreBadge} from "./GenreBadge";
import {genreAction} from "../../store";
import css from "./Genres.module.css"

const Genres = () => {
    const {genres} = useAppSelector(state => state.genre);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genreAction.getAll())
    }, []);
    return (
        <div className={css.Genres}>
            {genres.map(genre=> <GenreBadge key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {Genres};