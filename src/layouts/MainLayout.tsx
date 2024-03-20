import {Outlet} from "react-router-dom";

import {Genres, Header, SearchMovieForm} from "../components";

const MainLayout = () => {
    return (
        <div>
            <Header/>

            <Outlet/>
        </div>
    );
};

export {MainLayout};