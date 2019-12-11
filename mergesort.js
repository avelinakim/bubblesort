function mergeSort(arr) {
  if (arr.length < 2) return arr

  const splitArr = split(arr)
  let left = mergeSort(splitArr[0])
  let right = mergeSort(splitArr[1])

  let mergedArr = []
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      let leftNum = left.shift()
      mergedArr.push(leftNum)
    } else {
      let rightNum = right.shift()
      mergedArr.push(rightNum)
    }
  }
  return [...mergedArr, ...left, ...right]
}

function split(arr) {
  const halfPT = Math.floor(arr.length / 2)
  const firstHalf = arr.slice(0, halfPT)
  const secondHalf = arr.slice(halfPT)
  return [firstHalf, secondHalf]
}


