import {Outlet} from "react-router-dom";

import {Genres, Header} from "../components";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Genres/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};