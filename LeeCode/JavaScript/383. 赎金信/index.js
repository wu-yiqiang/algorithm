/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
  var canConstruct = function (ransomNote, magazine) {
    const aLen = ransomNote.length
    const bLen = magazine.length
    if (aLen > bLen) return false
    const aObj = {}
    const bObj ={}
    for (let i = 0; i < aLen; i++) {
      const ranEle = ransomNote[i]
      debugger
      if (Object.hasOwnProperty.call(aObj,ranEle)) {
        aObj[ranEle]++
      } else {
        aObj[ranEle] = 1
      }
      console.log(aObj, Object.hasOwnProperty.call(aObj, ranEle))
    }


    for (let j = 0; j < bLen; j++) {
      const magEle = magazine[j]
      if (Object.hasOwnProperty.call(bObj, magEle)) {
        bObj[magEle] += 1
      } else {
        bObj[magEle] = 1
      }
    }
    
    for (const key in aObj) {
      if (Object.hasOwnProperty.call(aObj, key)) {
        const count = aObj[key]
        if (!bObj[key]) return false
        if (count > bObj[key]) return false
      }
    }
    return true
  }


  console.log(canConstruct('aa', 'aab'))