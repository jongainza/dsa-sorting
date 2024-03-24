function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let swaped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        swaped = true;
      }
    }
    if (swaped) break;
  }
  return arr;
}

module.exports = bubbleSort;
