import {FC, PropsWithChildren} from 'react';
import {NavLink} from "react-router-dom";

import css from "./GanreBadge.module.css"
import {IGenre} from "../../interfaces";
import {movieAction} from "../../store";
import {useAppDispatch} from "../../hooks/reduxHooks";


interface IProps extends PropsWithChildren {
    genre: IGenre
}

const GenreBadge: FC<IProps> = ({genre}) => {
    const {id,name} = genre;
    const dispatch = useAppDispatch();

    const clearSearch= ():void =>{
        dispatch(movieAction.setCurrentPage('1'))
        dispatch(movieAction.updateSearchTitle(''))
    }
    return (
        <div className={css.GenreBadge}>
            <NavLink to={`/movie?with_genres=${id}&page=1`} onClick={clearSearch}><span className={css.Badge}>{name}</span></NavLink>
        </div>
    );
};

export {GenreBadge};