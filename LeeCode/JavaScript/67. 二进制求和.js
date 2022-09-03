/* 
给你两个二进制字符串，返回它们的和（用二进制表示）。

输入为 非空 字符串且只包含数字 1 和 0。

 

示例 1:

输入: a = "11", b = "1"
输出: "100"
示例 2:

输入: a = "1010", b = "1011"
输出: "10101"
 

提示：

每个字符串仅由字符 '0' 或 '1' 组成。
1 <= a.length, b.length <= 10^4
字符串如果不是 "0" ，就都不含前导零。

*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let aLen = a.length
  let bLen = b.length
  let len = aLen > bLen ? aLen : bLen
  if (a === '0') return b
  if (b === '0') return a
  const aArray = a.split('')
  const bArray = b.split('')
  // 补0操作
  while (aArray.length !== len) {
    aArray.unshift(0)
  }
  while (bArray.length !== len) {
    bArray.unshift(0)
  }
  let bite = 0
  let str = []
  let sum= 0
  // 反转字符串
  for (let index = len - 1; index >= 0; index--) {
    sum = Number(aArray[index]) + Number(bArray[index]) + bite
    debugger
    if ((sum <= 1)) {
      str.unshift(sum)
      bite = 0
    } 
    if (sum === 2) { 
      str.unshift(0)
      bite = 1
    }
    if (sum > 2) {
      str.unshift(1)
      bite = 1
    }
  }
  if (bite === 1) {
    str.unshift(1)
  }
  return str.join('')
};

console.log(addBinary('11', '1'))