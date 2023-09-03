const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

const quickSort = async (array, ref, barWidth, margin, animationSpeed) => {
    let animationsArray = [];
    let arr = [],
      ids = [];
    let n = array.length;
    
    
    let pivotIndices = [];
    for (let i = 0; i < n; i++) {
      arr.push(array[i].value);
    }
    for (let i = 0; i < n; i++) {
      ids.push(i);
    }

    quickSortHelper(
      arr,
      0,
      n - 1,
      animationsArray,
      ids,
      pivotIndices
    );
    
   visualizeQuickSort(animationsArray, pivotIndices, ref, barWidth, margin, animationSpeed);
  };
  
  const visualizeQuickSort =async (animationsArray, pivotIndices, ref, barWidth, margin, animationSpeed)=>{
    let change = Array(pivotIndices.length).fill(0);

    for (let i = 0; i < animationsArray.length; i++) {
   
    ref.current[pivotIndices[i]].style.backgroundColor = "red";
    for (let j = 0; j < animationsArray[i].length; j++) {
      
        const {idx1, idx1Change, idx2, idx2Change} = animationsArray[i][j];
        await sleep(animationSpeed);
        
        change[idx1] += idx1Change*(barWidth + (2*margin));
        change[idx2] += idx2Change*(barWidth + (2*margin));

        ref.current[idx1].style.transition = "0.1s";
        ref.current[idx2].style.transition = "0.1s";

        ref.current[idx1].style.transform = `translateX(${change[idx1]}px)`;
        ref.current[
          idx2
        ].style.transform = `translateX(${change[idx2]}px)`;
        await sleep(100);
        ref.current[idx1].style.removeProperty("transition");
        ref.current[idx2].style.removeProperty("transition");

    }
    ref.current[pivotIndices[i]].style.backgroundColor = "pink"
   }

  }
  

  const quickSortHelper = (
    arr,
    start,
    end,
    animationsArray,
    ids,
    pivotIndices
  ) => {
    if (start > end) return;

    let animation = [];
    pivotIndices.push(ids[end]);

    let index = partition(arr, start, end, animation, ids);

    animationsArray.push(animation);

    quickSortHelper(
      arr,
      start,
      index - 1,
      animationsArray,
      ids,
      pivotIndices
    );
    quickSortHelper(
      arr,
      index + 1,
      end,
      animationsArray,
      ids,
      pivotIndices
    );
  };
  const partition = (arr, start, end, animation, ids) => {
    let partitionIndex = start;
    let partitionValue = arr[end];

    for (let i = start; i <= end; i++) {
      if (arr[i] < partitionValue) {
        let temp = arr[i];
        arr[i] = arr[partitionIndex];
        arr[partitionIndex] = temp;
        let swap = {
          idx1 : ids[i],
           idx1Change : (partitionIndex - i),
          idx2 : ids[partitionIndex],
          idx2Change : (i - partitionIndex),
        };
        animation.push(swap);

        temp = ids[i];
        ids[i] = ids[partitionIndex];
        ids[partitionIndex] = temp;

        partitionIndex++;
      } 
    }

    let temp = arr[partitionIndex];
    arr[partitionIndex] = arr[end];
    arr[end] = temp;
    let swap = {
      idx1 : ids[end],
      idx1Change : (partitionIndex - end),
      idx2 : ids[partitionIndex],
      idx2Change : (end - partitionIndex),
    };

    animation.push(swap);

    temp = ids[partitionIndex];
    ids[partitionIndex] = ids[end];
    ids[end] = temp;

    return partitionIndex;
  };

  export default quickSort;