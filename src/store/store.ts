import {configureStore} from "@reduxjs/toolkit";

import {movieReducer, genreReducer} from "./slices";

const store=configureStore({
    reducer: {
        movies: movieReducer,
        genre: genreReducer
    }
})

export {
    store
}