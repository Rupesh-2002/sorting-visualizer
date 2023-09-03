const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

const insertionSort = async (array, ref, barWidth, margin, animationSpeed)=>{
    let arr = [],
      ids = [];
    let n = array.length;
    for (let i = 0; i < n; i++) {
      arr.push(array[i].value);
    }
    for (let i = 0; i < n; i++) {
      ids.push(i);
    }
    let change=new Array(n).fill(0);
    

    for(let i=0; i<n; i++){
      ref.current[i].style.backgroundColor = 'green';
      for(let j=i-1; j>=0; j--){
        if(arr[j]>arr[j+1]){
           let temp = arr[j];
           arr[j] = arr[j+1];
           arr[j+1] = temp; 

           change[ids[j]] += (barWidth+(2*margin));
           change[ids[j+1]] += -(barWidth+(2*margin));
           
           await sleep(animationSpeed);

           ref.current[ids[j]].style.transform = `translateX(${change[ids[j]]}px)`;
           ref.current[ids[j+1]].style.transform = `translateX(${change[ids[j+1]]}px)`;

           temp = ids[j];
           ids[j] = ids[j+1];
           ids[j+1] = temp;
        }
        else{
          break;
        }
      }
      ref.current[i].style.backgroundColor = 'aquamarine';
    }
    for(let i=0; i<n; i++){
      ref.current[i].style.backgroundColor = 'pink';
    }
  }

  export default insertionSort;