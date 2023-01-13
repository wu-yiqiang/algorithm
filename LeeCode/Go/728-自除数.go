// 方法一：直接判断
// 遍历范围[left,right] 内的所有整数，分别判断每个整数是否为自除数。
// 根据自除数的定义，如果一个整数不包含 0 且能被它包含的每一位数整除，则该整数是自除数。判断一个整数是否为自除数的方法是遍历整数的每一位，判断每一位数是否为 0 以及是否可以整除该整数。
// 遍历整数的每一位的方法是，每次将当前整数对 10 取模即可得到当前整数的最后一位，然后将整数除以 10。重复该操作，直到当前整数变成 0 时即遍历了整数的每一位。


func isSelfDividing(num int) bool {
    for x := num; x > 0; x /= 10 {
        if d := x % 10; d == 0 || num%d != 0 {
            return false
        }
    }
    return true
}

func selfDividingNumbers(left, right int) (ans []int) {
    for i := left; i <= right; i++ {
        if isSelfDividing(i) {
            ans = append(ans, i)
        }
    }
    return
}
