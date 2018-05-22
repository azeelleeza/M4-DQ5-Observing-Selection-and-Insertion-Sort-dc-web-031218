function insertionSort(arr) {
  let i = 1;
  while (i < arr.length) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      let temp1 = arr[j];
      let temp2 = arr[j - 1];
      arr[j] = temp2;
      arr[j - 1] = temp1;
      j = j - 1;
    }
    i = 1 + i;
  }
}
