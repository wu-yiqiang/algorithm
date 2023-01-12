// 方法一：线性查找
func nextGreatestLetter(letters []byte, target byte) byte {
    for _, letter := range letters {
        if letter > target {
            return letter
        }
    }
    return letters[0]
}
// 方法二：二分查找
func nextGreatestLetter(letters []byte, target byte) byte {
    if target >= letters[len(letters)-1] {
        return letters[0]
    }
    i := sort.Search(len(letters)-1, func(i int) bool { return letters[i] > target })
    return letters[i]
}