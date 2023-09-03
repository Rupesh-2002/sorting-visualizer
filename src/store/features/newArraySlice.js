import { createSlice } from "@reduxjs/toolkit";


export const newArraySlice = createSlice({
    name : 'new-array',
    initialState : {
        newArray : false,
    },
    reducers : {
        setNewArray : (state, action)=>{
            state.newArray = action.payload;
        }
    }
})

export default newArraySlice.reducer;

export const {setNewArray} = newArraySlice.actions;

export const getNewArray = (state)=>state.array.newArray;