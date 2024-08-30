import "strconv"
// 超出时间限制
func sumDigitDifferences(nums []int) int64 {
	var account int64
	for i := 0; i < len(nums); i++ {
		for j := i + 1; j < len(nums); j++ {
			account += count(nums[i], nums[j])
		}
	}
	return account
}

func count(value1 int, value2 int) int64 {
	newvalue1 := strconv.Itoa(value1)
	newvalue2 := strconv.Itoa(value2)
	lens := len(newvalue1)
	var count int64
	for i := 0; i < lens; i++ {
		if newvalue1[i] != newvalue2[i] {
			count++
		}
	}
	return count
}
