const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

const mergeSort =(array, ref, animationSpeed)=>{
    let arr = [];
    
    let n = array.length;
    for(let i=0; i<n; i++){
      arr.push(array[i].value);
    }

    let animationsArray = [];
 
    mergeSortHelper(arr, 0, n-1, animationsArray);
    animateMergeSort(animationsArray, ref, animationSpeed);

  }
  const animateMergeSort = async(animationsArray, ref, animationSpeed)=>{
    for(let i=0; i<animationsArray.length; i += 2){
      await sleep(animationSpeed);

        const [l, r] = animationsArray[i]; 
        for(let j= 0; j<animationsArray[i+1].length; j++){
          if(l <= j && j<= r){
            await sleep(20);

              
              ref.current[j].style.height = `${animationsArray[i+1][j]}px`;

          }
        }

    }

  }
  const mergeSortHelper = (arr, i, j, animationsArray)=>{
    if(i >= j) return;

    let mid = Math.floor((i+j)/2);

     mergeSortHelper(arr, i, mid, animationsArray);
     mergeSortHelper(arr, mid+1, j, animationsArray);

    merge(arr, i, mid, j, animationsArray);
  }

  const merge = (arr, i, mid, j, animationsArray)=>{

    let left = [], right = [];
    for(let k=i; k<=mid; k++){
      left.push(arr[k]);
    }
    for(let k=mid+1; k<=j; k++){
      right.push(arr[k]);
    }

    let l=0, r=0;
    let curr = i;
    // console.log(right.toString())
    while(l < left.length && r < right.length){

       if(left[l]< right[r]){
         arr[curr] = left[l];

         curr++;
         l++;
        }
        else{
          arr[curr] = right[r];

          curr++;
          r++;
        }
      }
      while(l < left.length){
      // animationsArray.push([l+i, r+mid+1]);
        arr[curr] = left[l];
        curr++;
        l++;
      // animationsArray.push([curr, l+i]);
      }
      
      while(r < right.length){
      // animationsArray.push([l+i, r+mid+1])
        arr[curr] = right[r];
        curr++;
        r++;
      }
      
      let anim = arr.slice();
      animationsArray.push([i, j]);
      animationsArray.push(anim);
  }

  export default mergeSort;