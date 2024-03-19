import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IMovie, IMovieInfo} from "../../interfaces";
import {moviesService} from "../../services";


interface IState {
    movies: IMovie[],
    movie: IMovieInfo,
    searchTitle: string
}

const initialState: IState = {
    movies: [],
    movie: null,
    searchTitle: ''
};

const getAll= createAsyncThunk<IMovie[], {with_genres: string}>(
    'movieSlice/getAll',
    async ({ with_genres}, {rejectWithValue})=>{
        try {
            const {data}= await moviesService.getAll(with_genres)
            return data.results
        }catch (e) {
            const err= e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)
const getById= createAsyncThunk<IMovieInfo, number>(
    'movieSlice/getById',
    async (movie_id, {rejectWithValue})=>{
        try {
            const {data} = await moviesService.getById(movie_id);
            return data
        }catch (e) {
            const err= e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)
const getAllWithTitle= createAsyncThunk<IMovie[], string>(
    'movieSlice/getAllWithTitle',
    async (title, {rejectWithValue})=>{
        try {
            const {data} = await moviesService.getAllWithTitle(title)
            return data.results
        }catch (e) {
            const err= e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)
const movieSlice= createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        updateSearchTitle: (state, action) => {
            state.searchTitle = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action)=>{
                state.movies=action.payload
            })
            .addCase(getById.fulfilled, (state, action)=>{
                state.movie=action.payload
            })
            .addCase(getAllWithTitle.fulfilled, (state, action)=>{
                state.movies=action.payload
            })

})

const {reducer: movieReducer, actions} = movieSlice;

const movieAction={
    ...actions,
    getAll,
    getById,
    getAllWithTitle
}

export {
    movieAction,
    movieReducer
}