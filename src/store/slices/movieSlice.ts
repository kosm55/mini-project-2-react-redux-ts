import {createAsyncThunk, createSlice, isFulfilled, isRejected} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IMovie, IMovieInfo} from "../../interfaces";
import {moviesService} from "../../services";


interface IState {
    movies: IMovie[],
    movie: IMovieInfo,
    searchTitle: string,
    page: string,
    total_pages: number,
    error: {status_message: string}
}

const initialState: IState = {
    movies: [],
    movie: null,
    searchTitle: '',
    page: '1',
    total_pages: null,
    error: null
};

const getAll= createAsyncThunk<{results: IMovie[], page: string, total_pages: number}, {with_genres: string, page: string}>(
    'movieSlice/getAll',
    async ({page,  with_genres}, {rejectWithValue})=>{
        try {
            const {data}= await moviesService.getAll(page, with_genres)
            return data
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
const getAllWithTitle= createAsyncThunk<{results: IMovie[], page: string, total_pages: number}, { searchTitle: string, page: string }>(
    'movieSlice/getAllWithTitle',
    async ({ page,searchTitle}, {rejectWithValue})=>{
        try {
            const {data} = await moviesService.getAllWithTitle(page, searchTitle)
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
        updateSearchTitle: (state, action) => {
            state.searchTitle = action.payload;
        },
        setCurrentPage: (state,action)=>{
            state.page= action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getById.fulfilled, (state,action)=>{
                state.movie=action.payload
                state.error=null
            })
            .addMatcher(isFulfilled(getAll, getAllWithTitle), (state, action)=>{
                const {results, page, total_pages}= action.payload
                state.page=page
                state.total_pages=total_pages
                state.movies=results
                state.error=null
            })
            .addMatcher(isRejected(), (state, action)=>{
                state.error = action.payload as { status_message: string }
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