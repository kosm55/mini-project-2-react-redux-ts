import {configureStore} from "@reduxjs/toolkit";

import {movieReducer, genreReducer, loadingReducer} from "./slices";
import {switchModeReducer} from "./slices/switchModeSlice";

const store=configureStore({
    reducer: {
        movies: movieReducer,
        genre: genreReducer,
        loading: loadingReducer,
        darkMode: switchModeReducer
    }
})

export {
    store
}