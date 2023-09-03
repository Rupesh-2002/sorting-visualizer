const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

const bubbleSort = async (array, ref, barWidth, margin, animationSpeed) => {
  let arr = [],
    ids = [];
  let n = array.length;

  for (let i = 0; i < n; i++) {
    arr.push(array[i].value);
  }

  for (let i = 0; i < n; i++) {
    ids.push(i);
  }

  let change = [];
  for (let i = 0; i < n; i++) {
    change.push(0);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      ref.current[ids[j]].style.backgroundColor = "blue";
      ref.current[ids[j + 1]].style.backgroundColor = "yellow";
      await sleep(animationSpeed);

      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        change[ids[j]] += barWidth + 2 * margin;
        change[ids[j + 1]] -= barWidth + 2 * margin;
        ref.current[ids[j]].style.transform = `translate(${change[ids[j]]}px)`;
        ref.current[ids[j + 1]].style.transform = `translate(${
          change[ids[j + 1]]
        }px)`;

        temp = ids[j];
        ids[j] = ids[j + 1];
        ids[j + 1] = temp;
      }

      ref.current[ids[j]].style.backgroundColor = "aquamarine";
      ref.current[ids[j + 1]].style.backgroundColor = "aquamarine";
    }
    ref.current[ids[n - i - 1]].style.backgroundColor = "green";
  }
};

export default bubbleSort;
