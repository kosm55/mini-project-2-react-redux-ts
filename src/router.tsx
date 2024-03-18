import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MovieInfoPage, MoviesPage} from "./pages";

const router=createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children:[
            {
                index: true, element: <Navigate to={'/movie'}/>
            },
            {
                path: 'movie', element: <MoviesPage/>
            },
            {
                path: 'movie/info/:id', element: <MovieInfoPage/>
            }
        ]
    }

])

export {
    router
}