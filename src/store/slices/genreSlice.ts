import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IGenre} from "../../interfaces";
import {genreService} from "../../services";

interface IState {
    genres: IGenre[],
    error: { status_message: string }
}

const initialState: IState = {
    genres: [],
    error: null
};

const getAll = createAsyncThunk<IGenre[], void>(
    'genreSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getAll();
            return data.genres
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)
const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.genres = action.payload
                state.error = null
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload as { status_message: string }
            })
})

const {reducer: genreReducer, actions} = genreSlice;

const genreAction = {
    ...actions,
    getAll
}

export {
    genreAction,
    genreReducer
}