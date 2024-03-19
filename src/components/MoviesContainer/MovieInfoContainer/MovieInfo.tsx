import {FC, PropsWithChildren} from 'react';

import {IMovieInfo} from "../../../interfaces";
import {GenreBadge} from "../../GenresContainer";

interface IProps extends PropsWithChildren {
    movie: IMovieInfo
}

const MovieInfo: FC<IProps> = ({movie}) => {
    const {id,title,overview, genres} = movie;

    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>overview: {overview}</div>
            <div>{genres.map(genre=> <GenreBadge key={genre.id} genre={genre}/>)}</div>
        </div>
    );
};

export {MovieInfo};