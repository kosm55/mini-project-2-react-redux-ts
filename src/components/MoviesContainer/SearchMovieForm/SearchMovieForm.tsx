import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

import {useAppDispatch} from "../../../hooks/reduxHooks";
import {movieAction} from "../../../store";
import css from "./SearchMovieForm.module.css"



const SearchMovieForm = () => {
    const {register, handleSubmit, reset} = useForm();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const search:SubmitHandler<any> =(query)=>{
        dispatch(movieAction.updateSearchTitle(query.title))
        navigate(`/movie?query=${query.title}&page=1`)
        reset()
    }
    return (
        <form onSubmit={handleSubmit(search)} className={css.SearchMovieForm}>
            <input type="text" placeholder={'enter title of movie'} {...register('title')}/>
            <button>search</button>
        </form>
    );
};

export {SearchMovieForm};