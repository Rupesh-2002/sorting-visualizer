import { configureStore } from "@reduxjs/toolkit";
import algorithmReducer from "./features/updataAlgorithmSlice";
import changeBarWidthReducer from "./features/changeBarWidthSlice";
import newArrayReducer from "./features/newArraySlice";
import runAlgorithmButtonReducer from "./features/AlgorithmRunButtonSlice";
import animationSpeedReducer from "./features/animationSpeedSlice";

const store = configureStore({
 reducer : {
    'algo' : algorithmReducer,
    'bar' : changeBarWidthReducer,
    'array' : newArrayReducer,
    'algoRun' : runAlgorithmButtonReducer,
    'animation' : animationSpeedReducer,
 }   
})

export default store;