function insertionSort(arr) {
  let sortedArr = []
  for (let i = 0; i < arr.length; i++) {
    let currentEl = arr[i] //unsorted array element
    if (sortedArr.length === 0) {
      sortedArr.push(currentEl)
    } else {
      for (let j = sortedArr.length - 1; j >= 0; j--) {
        let compareEl = sortedArr[j]
        if (currentEl > compareEl) {
          sortedArr.splice(j + 1, 0, currentEl)
          break
        }
        else if (j === 0) {
          sortedArr.splice(j, 0, currentEl)
          break
        }
      }
    }
  }
  return sortedArr
}
