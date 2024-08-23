/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    const length = nums.length
    if (length < 4) return []

};


let arr = [1, 2, 3, 4]; //M个数
let path = []; //每次组合的集合
let res = []; //全部组合的结果
let n = 2; //要选n个数
function backTracking(startIndex) {
    //递归
    if (path.length == n) {
        //选出n个数，结束递归
        res.push([...path]);
        return;
    }
    //单次递归逻辑
    for (let i = startIndex; i < arr.length; i++) {
        path.push(arr[i]);
        backTracking(i + 1);
        path.pop(); //回溯
    }
}
backTracking(0);
console.log(res);


// getAllCombo([1,2,3,4,5,6,7,8], 4)