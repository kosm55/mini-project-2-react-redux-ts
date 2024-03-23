import {useNavigate, useParams} from "react-router-dom";

import css from "./PosterPage.module.css"

const PosterPage = () => {
    const navigate = useNavigate();
    const {poster_path} = useParams();
    return (
        <div className={css.PosterPage}>
            <button onClick={() => navigate(-1)}>back</button>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt='poster'/>
        </div>
    );
};

export {PosterPage};