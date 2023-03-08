//  数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。 示例:
// 输入:n = 3 输出:[
//        "((()))",
//        "(()())",
//        "(())()",
//   "()(())",
// "()()

const generateParenthesis = function (n) {
  const res = []
  function dfs(l, r, str) {
    if (l == n && r == n) return res.push(str)
    // l 小于 r 时不满足条件 剪枝
    if (l < r) return
    // l 小于 n 时可以插入左括号，最多可以插入 n 个
    if (l < n) dfs(l + 1, r, str + '(')
    // r < l 时 可以插入右括号
    if (r < l) dfs(l, r + 1, str + ')')
  }
  dfs(0, 0, '')
  return res
}
console.log(generateParenthesis(3))