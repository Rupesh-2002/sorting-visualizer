import { createSlice } from "@reduxjs/toolkit";

export const animationSpeedSlice = createSlice({
    name : 'animation-speed',
    initialState : {
        animationSpeed : 20
    },
    reducers : {
        updateAnimationSpeed : (state, action)=>{
            state.animationSpeed = action.payload;
        }
    }

})

export default animationSpeedSlice.reducer;
export const {updateAnimationSpeed} = animationSpeedSlice.actions;

export const getAnimationSpeed = (state) => state.animation.animationSpeed;