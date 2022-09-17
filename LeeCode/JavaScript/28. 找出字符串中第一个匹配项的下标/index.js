/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  const st1Len = haystack.length
  const st2Len = needle.length
  if (st1Len < st2Len) return -1
  for (let i = 0; i < st1Len; i++) {
    const element = haystack[i];
     let count = 0
    if (element=== needle[0]) {
      // 循环
      for (let j= i, k = 0; j < st1Len, k < st2Len; j++, k++) {
          if (haystack[j] === needle[k]) count++
      }
    }
      if(count === st2Len) return i
  }
    return -1
};
console.log(strStr('mississippi', 'sipp'))