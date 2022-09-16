/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  // 排序
  candidates = bubbleSort(candidates)
  // 排除数值大的数
  const newArrays = []
  for (let i = 0; i < candidates.length; i++) {
    const element = candidates[i]
    if(element <= target) newArrays.push(element)
  }
  // 
  console.log(newArrays)
}


function bubbleSort(arr) {
  var len = arr.length
  for (var i = 0; i < len - 1; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // 相邻元素两两对比
        ;[arr[j + 1], arr[j]] = [arr[j], arr[j + 1]] // 元素交换
      }
    }
  }
  return arr
}

function dfs(pos, rest) {
  
}
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8))