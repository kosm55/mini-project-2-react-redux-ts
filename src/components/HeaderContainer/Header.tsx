import {NavLink} from "react-router-dom";

import css from "./Header.module.css"
import icon from "./icon/icons8-account-50.png"
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {movieAction} from "../../store";
import {UserInfo} from "../UserContainer";
import {SwitchMode} from "../SwitchContainer";

const Header = () => {
    const dispatch = useAppDispatch();
    const {darkMode} = useAppSelector(state => state.darkMode);

    const clearSearch= ():void =>{
        dispatch(movieAction.updateSearchTitle(''))
        dispatch(movieAction.setCurrentPage('1'))
    }

    return (
        <div className={darkMode? css.HeaderDark : css.Header}>
            <NavLink to={'/movie'} onClick={clearSearch}>Movies</NavLink>
            <div className={css.addBlockOfbutt}>
                <div className={css.login}>
                    <UserInfo/>
                    <img src={icon} alt="account"/>
                </div>
                <div>
                    <SwitchMode/>
                </div>
            </div>
        </div>
    );
};

export {Header};