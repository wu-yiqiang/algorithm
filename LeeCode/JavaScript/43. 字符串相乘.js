/* 
  给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
  注意：不能使用任何内置的 BigInteger 库或直接将输入转换为整数。

示例 1:
输入: num1 = "2", num2 = "3"
输出: "6"

示例 2:
输入: num1 = "123", num2 = "456"
输出: "56088"
 

提示：
1 <= num1.length, num2.length <= 200
num1 和 num2 只能由数字组成。
num1 和 num2 都不包含任何前导零，除了数字0本身。

*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') return '0'
    let len1 = num1.length, len2 = num2.length, res = new Array(len1 + len2).fill(0)
    // 结果最多为 m + n 位数
    for (let i = len1 - 1; i >= 0; i--) {
        for (let j = len2 - 1; j >= 0; j--) {
            // 从个位数开始，逐步相乘
            const mul = num1[i] * num2[j]
            // 乘积在结果数组中对应的位置
            const p1 = i + j, p2 = i + j + 1
            // 对结果进行累加
            const sum = mul + res[p2]
            res[p1] += Math.floor(sum / 10)
            res[p2] = sum % 10
        }
    }
    if (res[0] === 0) res.shift()
    return res.join("")
};

console.log(String(multiply('123456789', '987654321')).length)