import {FC, PropsWithChildren} from 'react';
import {IGenre} from "../../interfaces";
import {Navigate, NavLink} from "react-router-dom";

interface IProps extends PropsWithChildren {
    genre: IGenre
}

const GenreBadge: FC<IProps> = ({genre}) => {
    const {id,name} = genre;
    return (
        <div>
            <NavLink to={`movie?with_genres=${id}`}>{name}</NavLink>
        </div>
    );
};

export {GenreBadge};