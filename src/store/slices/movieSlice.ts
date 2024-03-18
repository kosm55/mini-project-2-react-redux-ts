import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IMovie} from "../../interfaces";
import {moviesService} from "../../services";


interface IState {
    movies: IMovie[],
    movie: IMovie | null
}

const initialState: IState = {
    movies: [],
    movie: null
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
const getById= createAsyncThunk<IMovie, number>(
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
const movieSlice= createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setMovie: (state, action)=>{
            state.movie=action.payload
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
})

const {reducer: movieReducer, actions} = movieSlice;

const movieAction={
    ...actions,
    getAll,
    getById
}

export {
    movieAction,
    movieReducer
}