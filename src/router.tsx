import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MovieInfoPage, MoviesPage, PosterPage} from "./pages";

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
            },
            {
                path: 'https://image.tmdb.org/t/p/w500', element: <PosterPage/>
            }
        ]
    }

])

export {
    router
}