/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
  const len = text.length
  if (len === 1) return text
  // 计算空格数
  let blank = 0
  let word = ''
  let wordArray = []
  for (let i = 0; i < len; i++) {
    const element = text[i]
    if (element === ' ') {
      if (word) wordArray.push(word) 
      blank++
      word = ''
    } else {
      word += element
      if (i === len - 1) if (word) wordArray.push(word) 
    }
  }
  let words = wordArray.length
  // 单词之间的空格间隔数
  let count = parseInt(blank / (words - 1))
  let yushu = blank % (words - 1)
  let newStr = ''
  console.log(count, yushu)
  if (words === 1) {
    newStr = wordArray[0]
    for (let p = 0; p < blank; p++) {
      newStr += " "
    }
    return newStr
  }
  for (let j = 0; j < wordArray.length; j++) {
    const ele = wordArray[j];
    newStr += ele
    for (let k = 0; k < count; k++) {
      newStr += ' '
    }
  }
  // 去除末尾的空格
  newStr = newStr.trim()
  // 添加剩下的空格
  for (let l = 0; l < yushu; l++) {
    newStr += ' '
  }
  return newStr
};

console.log(reorderSpaces(" hello"))