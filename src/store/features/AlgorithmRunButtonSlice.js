import { createSlice } from "@reduxjs/toolkit";

export const runAlgorithmButtonSlice = createSlice({
    name : 'algorithm-run-button',
    initialState : {
        runButton : false,
    },
    reducers : {
        changeRunAlgorithmButtonState : (state, action)=>{
            state.runButton = action.payload;
        }
    }
})

export default runAlgorithmButtonSlice.reducer;

export const {changeRunAlgorithmButtonState} = runAlgorithmButtonSlice.actions;

export const getAlgoRunButtonState = (state)=>state.algoRun.runButton;