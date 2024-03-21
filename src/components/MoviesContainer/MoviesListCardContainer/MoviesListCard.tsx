import {FC, PropsWithChildren} from 'react';
import {useNavigate} from "react-router-dom";
import css from "./MoviesListCard.module.css"

import {IMovie} from "../../../interfaces";
import {StarsRating} from "../../StarsRating";

interface IProps extends PropsWithChildren {
    movie: IMovie
}

const MoviesListCard: FC<IProps> = ({movie}) => {
    const navigate = useNavigate();
    const {id, title,vote_average, poster_path,release_date} = movie;
    return (
        <div onClick={()=>navigate(`info/${id}`)}  className={css.MoviesListCard}>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/>
            <h3>{title} ({release_date.split('-')[0]})</h3>
            <StarsRating vote_average={vote_average}/>
        </div>
    );
};

export {MoviesListCard};