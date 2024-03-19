import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

import {useAppDispatch} from "../../../hooks/reduxHooks";
import {movieAction} from "../../../store";



const SearchMovieForm = () => {
    const {register, handleSubmit, reset} = useForm();
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const search:SubmitHandler<any> =(query)=>{
        dispatch(movieAction.updateSearchTitle(query.title))
        navigate(`/movie?query=${query.title}`)
        reset()
    }
    return (
        <form onSubmit={handleSubmit(search)}>
            <input type="text" placeholder={'enter title of movie'} {...register('title')}/>
            <button>search</button>
        </form>
    );
};

export {SearchMovieForm};