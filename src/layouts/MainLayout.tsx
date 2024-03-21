import {Outlet} from "react-router-dom";
import css from './MainLayout.module.css'

import {Header} from "../components";
import {useAppSelector} from "../hooks/reduxHooks";

const MainLayout = () => {
    const {isLoading} = useAppSelector(state => state.loading);
    const {error} = useAppSelector(state => state.genre);
    const {error: errorMovie} = useAppSelector(state => state.movies);
    const {darkMode} = useAppSelector(state => state.darkMode);
    return (
        <div className={darkMode? css.mainDark : css.mainLight}>
            <Header/>
            {/*{isLoading&& <h6>Loading...</h6>}*/}
            {/*{error && <h1>ERROR GENRE : {error.status_message}</h1>}*/}
            {/*{errorMovie && <h1>ERROR MOVIE: {errorMovie.status_message}</h1>}*/}
            <Outlet/>

        </div>
    );
};

export {MainLayout};