import {FC, PropsWithChildren} from 'react';
import {useNavigate} from "react-router-dom";

import {IMovie} from "../../../interfaces";
import {StarsRating} from "../../StarsRating";

interface IProps extends PropsWithChildren {
    movie: IMovie
}

const MoviesListCard: FC<IProps> = ({movie}) => {
    const navigate = useNavigate();
    const {id, title,vote_average} = movie;
    return (
        <div onClick={()=>navigate(`info/${id}`)}>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <StarsRating vote_average={vote_average}/>
        </div>
    );
};

export {MoviesListCard};