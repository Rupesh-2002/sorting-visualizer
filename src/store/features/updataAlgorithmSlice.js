import { createSlice } from "@reduxjs/toolkit";


export const updateAlgorithmSlice = createSlice({
    name : 'update-algorithm',
    initialState : {
        algorithm : 'bubble'
    },
    reducers : {
        changeAlgo : (state, action)=>{
            console.log(action)
            state.algorithm = action.payload;
        }
    }
})
export default updateAlgorithmSlice.reducer;

export const {changeAlgo} = updateAlgorithmSlice.actions;

export const getAlgo = (state)=> state.algo.algorithm;