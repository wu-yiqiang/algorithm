/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    const len = s.length
    if (len === 1) return 0
    let instance = -1
    for(let i =0 ; i < len; i++) {
        let tmpInstance = -1
        for(let j= len-1; j > i; j--) {
            if (s[i] === s[j]) {
                tmpInstance = j - i -1
                if (tmpInstance >= instance) instance = tmpInstance
            }
        }
    }
    return instance
};


console.log(maxLengthBetweenEqualCharacters("mgntdygtxrvxjnwksqhxuxtrv"))