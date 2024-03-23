import {Outlet} from "react-router-dom";

import {Header, Loading} from "../components";
import {useAppSelector} from "../hooks/reduxHooks";
import css from './MainLayout.module.css'

const MainLayout = () => {
    const {isLoading} = useAppSelector(state => state.loading);
    const {error} = useAppSelector(state => state.genre);
    const {error: errorMovie} = useAppSelector(state => state.movies);
    const {darkMode} = useAppSelector(state => state.darkMode);
    return (
        <div className={darkMode? css.mainDark : css.mainLight}>
            <Header/>
            <div className={css.loading}>
                {isLoading&& <Loading/>}
            </div>
            <div className={css.error}>
                {error && <h5>ERROR GENRE : {error.status_message}</h5>}
                {errorMovie && <h5>ERROR MOVIE: {errorMovie.status_message}</h5>}
            </div>

            <Outlet/>

        </div>
    );
};

export {MainLayout};