const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

const selectionSort = async(array, ref, barWidth, margin, animationSpeed)=>{
    
    let arr = [],
      ids = [];
    let n = array.length;

    for (let i = 0; i < n; i++) {
      arr.push(array[i].value);
    }
   
    for (let i = 0; i < n; i++) {
      ids.push(i);
    }
    let change=[]
    for (let i = 0; i < n; i++) {
      change.push(0);
    }

    for(let i=0; i<n; i++){
      let maxIdx = 0;
      for(let j=0; j<n-i; j++){
        ref.current[ids[j]].style.backgroundColor = 'red';
        if(arr[j]>arr[maxIdx]){
          maxIdx = j;
        }
        await sleep(animationSpeed);
        ref.current[ids[j]].style.backgroundColor = 'aquamarine';

      }
      
      ref.current[ids[maxIdx]].style.backgroundColor = 'green';
      ref.current[ids[n-1-i]].style.backgroundColor = 'green';
      
      let temp=arr[maxIdx];
      arr[maxIdx] = arr[n-1-i];
      arr[n-1-i] = temp;
      
      change[ids[maxIdx]] += (n-1-i-maxIdx)*(barWidth+(2*margin));
      change[ids[n-1-i]] += (maxIdx-(n-1-i))*(barWidth+(2*margin));

      ref.current[ids[maxIdx]].style.transition = '0.3s';
      ref.current[ids[n-1-i]].style.transition = '0.3s';

      ref.current[ids[maxIdx]].style.transform = `translateX(${change[ids[maxIdx]]}px)`
      ref.current[ids[n-1-i]].style.transform = `translateX(${change[ids[n-1-i]]}px)`

      await sleep(300);

      ref.current[ids[n-1-i]].style.removeProperty('transition')
      ref.current[ids[maxIdx]].style.removeProperty('transition')
      
      temp = ids[maxIdx];
      ids[maxIdx] = ids[n-1-i];
      ids[n-1-i] = temp;

      ref.current[ids[maxIdx]].style.backgroundColor = 'aquamarine';
      ref.current[ids[n-1-i]].style.backgroundColor = 'pink';
      
    }

  }

  export default selectionSort;