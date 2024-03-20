import {NavLink} from "react-router-dom";

import css from "./Header.module.css"
import icon from "./icon/icons8-account-50.png"
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {movieAction} from "../../store";
import {UserInfo} from "../UserContainer";

const Header = () => {
    const dispatch = useAppDispatch();
    const {page} = useAppSelector(state => state.movies);

    const clearSearch= ():void =>{
        dispatch(movieAction.updateSearchTitle(''))
        dispatch(movieAction.setCurrentPage('1'))
    }

    return (
        <div className={css.Header}>
            <NavLink to={'movie'} onClick={clearSearch}>Movies</NavLink>
            <div className={css.addBlockOfbutt}>
                <div className={css.login}>
                    <UserInfo/>
                    <img src={icon} alt="account"/>

                {/*    here must be switcher*/}

                </div>
            </div>
        </div>
    );
};

export {Header};