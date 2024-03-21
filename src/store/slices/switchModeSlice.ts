import {createSlice} from "@reduxjs/toolkit";

let initialState={
    darkMode: false
};
const switchModeSlice= createSlice({
    name: 'switchModeSlice',
    initialState,
    reducers: {
        setDarkMode: (state, action)=>{
            state.darkMode=!state.darkMode
        }
    }
})

const {reducer: switchModeReducer,actions} = switchModeSlice;

const switchModeActions = {
    ...actions
};

export {
    switchModeActions,
    switchModeReducer
}