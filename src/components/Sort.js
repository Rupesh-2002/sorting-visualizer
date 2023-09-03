import React, { useEffect, useState, useRef, createRef} from "react";
import ArrayBar from "./ArrayBar";
import bubbleSort from "../Algorithms/bubbleSort";
import selectionSort from "../Algorithms/selectionSort";
import quickSort from "../Algorithms/quickort";
import insertionSort from "../Algorithms/insertionSort";
import mergeSort from "../Algorithms/mergeSort";
import { useDispatch, useSelector } from "react-redux";
import { getAlgo } from "../store/features/updataAlgorithmSlice";
import { getBarWidth, getMargin, updateMargin } from "../store/features/changeBarWidthSlice";
import {changeRunAlgorithmButtonState, getAlgoRunButtonState} from "../store/features/AlgorithmRunButtonSlice"; 
import { getNewArray, setNewArray } from "../store/features/newArraySlice";
import { getAnimationSpeed } from "../store/features/animationSpeedSlice";

export default function Sort({arrayContainerHeight, arrayContainerWidth}) {
  const [array, setArray] = useState([]);
  
  const arrayContainerRef = useRef(null);
  const dispatch = useDispatch();
  const barWidth = useSelector(getBarWidth);
  const algorithm = useSelector(getAlgo);
  const algoRunButtonState = useSelector(getAlgoRunButtonState);
  const margin = useSelector(getMargin); 
  const ref = useRef([])
  const isNewArray = useSelector(getNewArray);
  const animationSpeed = useSelector(getAnimationSpeed);



  useEffect(() => {
    if(isNewArray === true){
      createArray();  
      dispatch(setNewArray(false));
    }
     // eslint-disable-next-line
  }, [isNewArray]);

  useEffect(() => {
    createArray(); 
     // eslint-disable-next-line 
  },  [barWidth, arrayContainerHeight]);


  const createArray = () => {
    let newArray = [];
    
    let margin;
    if (barWidth < 10){
      margin  = 1;
      dispatch(updateMargin(margin));
    }
    else if (barWidth < 30){
      margin=2;
      dispatch(updateMargin(margin));
    }
    else{
      margin = 3;
      dispatch(updateMargin(margin));
    }

    // let arrayContainerWidth = arrayContainerRef.current.offsetWidth;
    // arrayContainerWidth -= 15;
    
   
    let n =Math.floor((arrayContainerWidth-15) /  (barWidth + (2*margin)));
   
    for (let i = 0; i < n; i++) {
      let value = getRandomInt(50, arrayContainerHeight-15);
      let bar = createBar(value, margin);
      newArray.push(bar);
    }
    setArray(newArray)

    ref.current = newArray.map(()=>createRef())

  };

  const createBar = (value, margin) => {
    const bar = {
      ref : ref,
      value,
      margin,
     barWidth
    };
    return bar;
  };
  
  if(algoRunButtonState === true){
    switch (algorithm) {
      case "bubble":
        bubbleSort(array, ref, barWidth, margin, animationSpeed);
        break;
      case "selection":
        selectionSort(array, ref, barWidth, margin, animationSpeed);
        break;
      case "quick":
        quickSort(array, ref, barWidth, margin, animationSpeed);
        break;
      case "insertion":
        insertionSort(array, ref, barWidth, margin, animationSpeed);
        break;
      case "merge" :
        mergeSort(array, ref, animationSpeed);
        break;
      default :
        break;
    }
    dispatch(changeRunAlgorithmButtonState(false));
  }
  
  const arrayContainerStyle = {
    display : 'flex',
    justifyContent : 'center',
    
  }
  return (

      <div style={arrayContainerStyle} ref={arrayContainerRef}>
        {array.map((bar, ind) => {
           return <ArrayBar key={ind} bar={bar} idx={ind} />;
         })}
      </div>
  );
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
