import {FC, PropsWithChildren} from 'react';
import {useNavigate} from "react-router-dom";
import css from "./MoviesListCard.module.css"

import {IGenre, IMovie} from "../../../interfaces";
import {StarsRating} from "../../StarsRating";
import {useAppSelector} from "../../../hooks/reduxHooks";
import {GenreBadge} from "../../GenresContainer";

interface IProps extends PropsWithChildren {
    movie: IMovie
}

const MoviesListCard: FC<IProps> = ({movie}) => {
    const navigate = useNavigate();
    const {id, title,vote_average, poster_path,release_date, genre_ids} = movie;
    const {genres} = useAppSelector(state => state.genre);

    const showGenreOfMovie=(genres: IGenre[], genre_ids: number[])=>{
        return genre_ids.map((id_genre: number) => {
            const genre = genres.find(item => item.id === id_genre)
            return <GenreBadge key={id_genre} genre={genre}/>
        })
    }
    return (
        <div onClick={()=>navigate(`info/${id}`)}  className={css.MoviesListCard}>
            <div className={css.GenreBadge}>{showGenreOfMovie(genres, genre_ids)}</div>
            <div>
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/>
                <h3>{title} ({release_date.split('-')[0]})</h3>
                <StarsRating vote_average={vote_average}/>
            </div>

        </div>
    );
};

export {MoviesListCard};