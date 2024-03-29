/* 
* 冒泡排序
*/
function bubbleSort(arr) {
  var len = arr.length
  for (var i = 0; i < len - 1; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // 相邻元素两两对比
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]] // 元素交换
      }
    }
  }
  return arr
}

/* 
* 选择排序
*/
function selectionSort(arr) {
  var len = arr.length
  var minIndex, temp
  for (var i = 0; i < len - 1; i++) {
    minIndex = i
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        // 寻找最小的数
        minIndex = j // 将最小数的索引保存
      }
    }
    temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  return arr
}

/* 
*  插入排序
*/
function insertionSort(arr) {
  var len = arr.length
  var preIndex, current
  for (var i = 1; i < len; i++) {
    preIndex = i - 1
    current = arr[i]
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }
    arr[preIndex + 1] = current
  }
  return arr
}

/* 
*  希尔排序
*/
function shellSort(arr) {
  var len = arr.length,
    temp,
    gap = 1
  while (gap < len / 3) {
    //动态定义间隔序列
    gap = gap * 3 + 1
  }
  for (gap; gap > 0; gap = Math.floor(gap / 3)) {
    for (var i = gap; i < len; i++) {
      temp = arr[i]
      for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j]
      }
      arr[j + gap] = temp
    }
  }
  return arr
}

/* 计数排序 */
function countSort(arr) {
  const lens = arr.length
  if (!lens) return arr
  const maxNum  = Math.max(...arr)
  const newArray = new Array(maxNum +1).fill(0)
  console.log('newArray', newArray)
  for (const item of arr) {
    newArray[item] += 1
  }
  const result = new Array(lens)
  for (const i in newArray) {
    if (newArray[i]) {
      let num = newArray[i]
      while(num > 0) {
        result.push(i)
        num--
      }
    }
  }
  return result
}
/* 计数排序 优化版 */
function countSort2(arr) {
  const lens = arr.length
  if (!lens) return arr
  const maxNum  = Math.max(...arr)
  const minNum  = Math.min(...arr)
  const newArray = new Array(maxNum-minNum +1).fill(0)
  for (const item of arr) {
    newArray[item-minNum] += 1
  }
  const result = new Array(lens)
  for (const i in newArray) {
    if (newArray[i]) {
      let num = newArray[i]
      while(num > 0) {
        result.push(+i+minNum)
        num--
      }
    }
  }
  console.log('sadsa', result)
  return result
}


/*归并排序*/
function mergeSort(arr) {  // 采用自上而下的递归方法
  var len = arr.length;
  if(len < 2)  return arr;
  function merge(left, right) {
    var result = [];
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

    return result;
  }
  var middle = Math.floor(len / 2),
      left = arr.slice(0, middle),
      right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}


console.log(mergeSort([101,109,107,103,108,102,103,110,107,103]))
module.exports = {
  bubbleSort,
  selectionSort,
  insertionSort,
  shellSort
}

