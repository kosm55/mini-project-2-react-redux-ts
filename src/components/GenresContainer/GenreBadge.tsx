import {FC, PropsWithChildren} from 'react';
import {NavLink} from "react-router-dom";

import {IGenre} from "../../interfaces";


interface IProps extends PropsWithChildren {
    genre: IGenre
}

const GenreBadge: FC<IProps> = ({genre}) => {
    const {id,name} = genre;
    return (
        <div>
            <NavLink to={`/movie?with_genres=${id}`}>{name}</NavLink>
        </div>
    );
};

export {GenreBadge};