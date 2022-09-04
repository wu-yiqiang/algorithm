/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const n = s.length
    if (n % 2 === 1) {
      return false
    }
  dic = { '{': '}', '[': ']', '(': ')'}
  const stack = []
  for (let index = 0; index < n; index++) {
    const element = s[index]
    const tar = stack[stack.length -1]
    if (dic[tar] === element  && tar) {
      stack.pop()
    } else {
      stack.push(element)
    }
  }
  return !stack.length
};

console.log(isValid('()[}'))



        