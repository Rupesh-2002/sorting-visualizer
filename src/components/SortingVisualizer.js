import React, { useRef, useState, useEffect} from 'react'
import Sort from './Sort'

export default function SortingVisualizer() {
  const arrayRef = useRef(null);
  const style = {
    height: '80%',
    width: '80%',
    margin: 'auto',
    marginTop : '1vh',
    border: '2px solid #9A8B4F',
    borderRadius: '10px',
    boxShadow: '0.25vw 1vh 3px rgb(185, 182, 182)',
  };

  const [arrayContainerHeight, setArrayContainerHeight] = useState(0);
  const [arrayContainerWidth, setArrayContainerWidth] = useState(0);
  
  useEffect(() => {
    if (arrayRef.current) {
      const height = arrayRef.current.offsetHeight;
      const width = arrayRef.current.offsetWidth;
      setArrayContainerHeight(height);
      setArrayContainerWidth(width);
    }
  }, []);

  return (
    <div style={style} ref={arrayRef}>
      <Sort arrayContainerHeight={arrayContainerHeight} arrayContainerWidth={arrayContainerWidth}/>
    </div>
  );
}
