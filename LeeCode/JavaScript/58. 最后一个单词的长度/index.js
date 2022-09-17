/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim()
    let end = s.length - 1
    let start = 0
    for (let i= s.length; i >= 0; i--) {
        if (s[i] === ' ') {
            start = i
            return  end - start
        }

    }
    return  s.length
};

console.log(lengthOfLastWord("   day"))