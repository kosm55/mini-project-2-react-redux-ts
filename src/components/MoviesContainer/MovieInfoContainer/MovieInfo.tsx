import {FC, PropsWithChildren} from 'react';
import {IMovie} from "../../../interfaces";

interface IProps extends PropsWithChildren {
    movie: IMovie
}

const MovieInfo: FC<IProps> = ({movie}) => {
    const {id,title,overview, genre_ids} = movie;
    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>overview: {overview}</div>
            <div>: {genre_ids}</div>
        </div>
    );
};

export {MovieInfo};