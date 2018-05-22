// function selectionSort(arr) {
//   let halfArr = arr;
//   let half = halfArr.length / 2;
//   first = halfArr.slice(0, half);
//   second = halfArr.slice(half, halfArr.length);
//   first.sort((a, b) => a > b);
//   second.sort((a, b) => a > b);
//   insertionSort(halfArr);
//   return [...first, ...second];
// }

function selectionSort(arr) {
  for (j = 0; j < arr.length; j++) {
    let min = j;
    for (i = j + 1; i < arr.length; i++) {
      if (arr[i] < arr[min]) {
        min = i;
      }
    }
    if (min != j) {
      let temp1 = arr[min];
      let temp2 = arr[j];
      arr[min] = temp2;
      arr[j] = temp1;
    }
  }
}
