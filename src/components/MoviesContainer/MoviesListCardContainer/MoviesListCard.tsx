import {FC, PropsWithChildren} from 'react';
import {useNavigate} from "react-router-dom";

import {IMovie} from "../../../interfaces";

interface IProps extends PropsWithChildren {
    movie: IMovie
}

const MoviesListCard: FC<IProps> = ({movie}) => {
    const navigate = useNavigate();
    const {id, title} = movie;
    return (
        <div onClick={()=>navigate(`info/${id}`)}>
            <div>id: {id}</div>
            <div>title: {title}</div>
        </div>
    );
};

export {MoviesListCard};