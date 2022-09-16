
var permute = function (nums) {
  if (!nums.length) return
  let res = []
  let backTrack = (path) => {
    //长度满足条件，加入结果
    if (path.length === nums.length) {
      res.push(path)
      return
    }
    nums.forEach((item) => {
      if (path.includes(item)) return //不包含重复的数字
      backTrack([...path, item]) //加入路径，继续递归选择
    })
  }
  backTrack([])
  return res
}

// console.log(permute([1, 2, 3]))



const subsets = (nums) => {
  const res = []
  const backTracing = (index, list) => {
    res.push(list.slice()) // 调用子递归前，加入解集
    for (let i = index; i < nums.length; i++) {
      // 枚举出所有可选的数
      list.push(nums[i]) // 选这个数
      backTracing(i + 1, list) // 基于选这个数，继续递归
      list.pop() // 撤销选这个数
    }
  }
  backTracing(0, [])
  return res
}

console.log(subsets([1, 2, 3]))
