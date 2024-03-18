import {FC, PropsWithChildren} from 'react';
import {IMovie} from "../../../interfaces";
import {useNavigate} from "react-router-dom";

interface IProps extends PropsWithChildren {
    movie: IMovie
}

const MoviesListCard: FC<IProps> = ({movie}) => {
    const navigate = useNavigate();
    const {id, title} = movie;
    return (
        <div onClick={()=>navigate(`info/${id}`, {state: movie})}>
            <div>id: {id}</div>
            <div>title: {title}</div>
        </div>
    );
};

export {MoviesListCard};