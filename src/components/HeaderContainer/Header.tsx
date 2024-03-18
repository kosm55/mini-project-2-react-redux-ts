import {NavLink} from "react-router-dom";

import css from "./Header.module.css"
import icon from "./icon/icons8-account-50.png"

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={'movie'}>Movies</NavLink>
            <div className={css.addBlockOfbutt}>
                <div className={css.login}>
                    <p>UserName</p>
                    <img src={icon} alt="account"/>

                {/*    here must be switcher*/}

                </div>
            </div>
        </div>
    );
};

export {Header};