// 哈希法
// 首先，是最容易想到的，利用哈希表来实现。
// 哈希表的Key和Value分别存储数出现的次数和数的值。
// 虽然这种方法是最易理解的，但是其时间开销非常高。

function singleNumber(array) {
    const obj = {}
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (obj[element]) obj[element]++
        if (!obj[element]) obj[element] = 1
    }
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            if (element === 1) return key 
        }
    }
}

// 位运算
// 1、任何数和0做异或运算，结果仍然是原来的数，即a⊕0=a。
// 2、任何数和其自身做异或运算，即a⊕a=0。
// 3、异或运算满足交换律和结合律，即 a⊕b⊕a=b⊕a⊕a=b⊕(a⊕a)=b⊕0=b。
function singleNumber2(array) {
    let signal = 0
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        signal ^= element
    }
    return signal
}

console.log(singleNumber2([2,2,1,4,4]))