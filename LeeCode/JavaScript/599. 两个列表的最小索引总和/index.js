/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  const list1Len = list1.length
  const list2Len = list2.length
  if (list1Len > list2Len) {
    [list1, list2] = [list2, list1]
  }
  const map = new Map()
  for (let index = 0; index < list1.length; index++) {
    map.set(list1[index], index)
  }
  const arrays = []
  let indexSum = Number.MAX_VALUE
  for (let j = 0; j < list2.length; j++) {
    const ele = list2[j];
    if (map.has(ele)) {
      const sum = map.has(ele) + j
      if (sum <= indexSum) {
        arrays.length = 0
        arrays.push(ele)
        indexSum = sum
      }
    }
  }
  return arrays
}


console.log(findRestaurant(['happy', 'sad', 'good'], ['sad', 'happy', 'good']))