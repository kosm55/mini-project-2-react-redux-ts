import {FC, PropsWithChildren} from 'react';
import {useNavigate} from "react-router-dom";

import {IMovieInfo} from "../../../interfaces";
import {GenreBadge} from "../../GenresContainer";
import {StarsRating} from "../../StarsRating";
import css from "./MovieInfo.module.css"


interface IProps extends PropsWithChildren {
    movie: IMovieInfo
}

const MovieInfo: FC<IProps> = ({movie}) => {
    const {
        title,
        overview,
        genres,
        vote_average,
        poster_path,
        backdrop_path,
        release_date,
        original_title,
        vote_count
    } = movie;
    const navigate = useNavigate();

    return (
        <div className={css.main} style={{backgroundImage: `url('https://image.tmdb.org/t/p/w500/${backdrop_path}')`}}>
            <button onClick={() => navigate(-1)}>back</button>
            <div className={css.MovieInfoMain}>
                <div onClick={() => navigate(`/image.tmdb.org/t/p/w500${poster_path}`, {state: movie})}>
                    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/>
                </div>
                <div className={css.GenreBadge}>{genres.map(genre=> <GenreBadge key={genre.id} genre={genre}/>)}</div>

                <div className={css.MovieInfo}>
                    <h1>{title} ({release_date.split('-')[0]})</h1>
                    <h4>({original_title})</h4>
                    <StarsRating vote_average={vote_average}/>
                    <div>rating from users: {vote_average} ({vote_count} voices)</div>
                    <p>{overview}</p>
                </div>
            </div>
        </div>
    );
};

export {MovieInfo};