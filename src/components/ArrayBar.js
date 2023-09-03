import React, {createRef, useEffect} from "react";

export default function ArrayBar(props) {
  const { value, ref, margin, barWidth } = props.bar;
  const {idx} = props;
  const barRef = createRef();
  
  const arrayBarStyle={
    height: `${value}px`,
    margin: `0 ${margin}px`,
    width: `${barWidth}px`,
    backgroundColor : 'aquamarine',

  }
  
  useEffect(()=>{
    ref.current[idx] = barRef.current;
    // eslint-disable-next-line 
  })
    
  return (
    <div
    key={barWidth+value*0.1}
      ref={barRef}
      style={arrayBarStyle}
      id={idx}
    ></div>
    
  );
}
