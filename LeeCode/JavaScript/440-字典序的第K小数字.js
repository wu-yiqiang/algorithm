// 方法一：字典树思想
// 思路
// 题目要求找到字典序第 k 小的数字，可以将所有的数字都转换成字符串，然后排序找到第 k 小的数字即可，但显然时间复杂度不符合要求。我们利用字典树的特性将所有小于等于 n 的数字按照字典序的方式进行重建，可以得到如下：

var findKthNumber = function(n, k) {
    let curr = 1;
    k--;
    while (k > 0) {
        const steps = getSteps(curr, n);
        if (steps <= k) {
            k -= steps;
            curr++;
        } else {
            curr = curr * 10;
            k--;
        }
    }
    return curr;
}

const getSteps = (curr, n) => {
    let steps = 0;
    let first = curr;
    let last = curr;
    while (first <= n) {
        steps += Math.min(last, n) - first + 1;
        first = first * 10;
        last = last * 10 + 9;
    }
    return steps;
};
