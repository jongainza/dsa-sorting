function merge(arr1, arr2) {
  let copy1 = [...arr1];
  let copy2 = [...arr2];
  let results = [];
  let i = 0;
  let j = 0;
  while (i < copy1.length && j < copy2.length) {
    if (copy1[i] <= copy2[j]) {
      results.push(copy1[i]);
      i++;
    } else {
      results.push(copy2[j]);
      j++;
    }
  }
  while (i < copy1.length) {
    results.push(copy1[i]);
    i++;
  }
  while (j < copy2.length) {
    results.push(copy2[j]);
    j++;
  }
  return results;
}

function mergeSort() {}

module.exports = { merge, mergeSort };
