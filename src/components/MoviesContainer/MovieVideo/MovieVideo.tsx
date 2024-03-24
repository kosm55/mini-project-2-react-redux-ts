import {FC, PropsWithChildren, useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {movieAction} from "../../../store";
import css from "./MovieVideo.module.css"

interface IProps extends PropsWithChildren {
    movie_id: number
}
const MovieVideo: FC<IProps> = ({movie_id}) => {
    const {video, movie} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieAction.getVideoOfMovie(movie_id))
    }, [movie_id, dispatch]);
    return (
        <div className={css.VideoMain}>
            <h1>Trailer "{movie.title}": </h1>
            <div  className={css.Video}>
                {video.map(item=> {
                    if (item.type==="Trailer"){
                        return (
                            <iframe
                                key={item.key}
                                width="560"
                                height="315"
                                src={`https://www.youtube.com/embed/${item.key}`}
                                title={item.name}></iframe>)
                    }
                    return null
                    }
                )}
            </div>

        </div>
    );
};

export {MovieVideo};