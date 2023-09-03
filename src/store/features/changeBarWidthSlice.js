import { createSlice } from "@reduxjs/toolkit";


export const changeBarWidthSlice = createSlice({
    name : 'change-bar-length',
    initialState : {
        barWidth : 15,
        margin : 1
    },
    reducers : {
        changeBarWidth : (state, action)=>{
            state.barWidth = action.payload;
        },
        updateMargin : (state, action)=>{
            state.margin = action.payload;
        }
    }
})

export default changeBarWidthSlice.reducer;

export const {changeBarWidth, updateMargin} = changeBarWidthSlice.actions;

export const getBarWidth = (state) => state.bar.barWidth;
export const getMargin = (state) => state.bar.margin;
