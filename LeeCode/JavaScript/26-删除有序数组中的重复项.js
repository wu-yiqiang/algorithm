function merge(nums1, m, nums2, n) {
    const maxLen = nums1.length
    let nums1Len = m
    let nums2Len = n
    nums2--
    nums1--
    cur = maxLen - 1
    while (nums2Len >= 0) {
        if (nums1Len >= 0 && nums2[nums2Len] > nums1[nums1Len]) {
            nums1[cur] = nums2[nums2Len]
            cur--
            nums2Len--
        } else {
            nums1[cur] = nums1[nums1Len]
            cur--
            nums1Len--
        }
    }
    console.log(nums1)
}


var removeDuplicates = function (nums) {
  const size = nums.length
  if (size == 0) return 0
  let slowP = 0
  for (let fastP = 0; fastP < size; fastP++) {
    if (nums[fastP] !== nums[slowP]) {
      slowP++
      nums[slowP] = nums[fastP]
    }
  }
  return slowP + 1
}
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))