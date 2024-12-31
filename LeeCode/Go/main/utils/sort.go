package main

import (
	"fmt"
)
func getMax(arr []int) (max int) {
	max = arr[0]
	for _, v := range arr {
		if max < v {
			max = v
		}
	}
	return
}

func getMin(arr []int) (min int) {
	min = arr[0]
	for _,v:=range arr {
		if min > v {
			min = v
		}
	}
	return
}

func countSort(arr []int) []int {
	var lens = len(arr)
	if lens <= 0 {
		return arr
	}
	var maxMax = getMax(arr)
	var newArray = make([]int, maxMax +1)
	//
	for _, v :=range arr {
		newArray[v] += 1
	}
	var result []int
	for k, _ := range newArray {
		for num := newArray[k]; num > 0; num-- {
			result = append(result , k)
		}
	}
	for _, str := range result {
		fmt.Println(str)
	}
	return result
}
func countSort2(arr []int) []int {
	var lens = len(arr)
	if lens <= 0 {
		return arr
	}
	var maxNum = getMax(arr)
	var minNum = getMin(arr)
	var newArray = make([]int, maxNum - minNum +1)
	//
	for _, v :=range arr {
		newArray[v-minNum] += 1
	}
	var result []int
	for k, _ := range newArray {
		for num := newArray[k]; num > 0; num-- {
			result = append(result , k+minNum)
		}
	}
	for _, str := range result {
		fmt.Println(str)
	}
	return result
}

// 数组去重
func RemoveRepByMap(slc []int) []int {
    result := []int{}
    tempMap := map[int]byte{}
    for _, e := range slc {
        l := len(tempMap)
        tempMap[e] = 0
        if len(tempMap) != l{
            result = append(result, e)
        }
    }
    return result
}
func longestConsecutive(nums []int) int {
	length := len(nums)
	if length == 0 {
		return 0
	}
	if length == 1 {
		return 1
	}
	// 排序
	newNums := countSort(nums)
	// 去重
	newNum := RemoveRepByMap(newNums)
	collections := []int{0};
    max := 0;
	i := 0
	for i < length {
		j := i + 1
		fmt.Println("111111", i)
		if j < length {
			if newNum[i] + 1 !=  newNum[j] || j == length {
				collections = append(collections, j)
				i = j;
			} else {
				i++
			}
		}
		if (i >= length) {
			break
		}
		fmt.Println("撒大苏打", i)
	}
	cLen := len(collections)
	for k2, _ := range collections {
		 k3 := k2 + 1
		 if k3 < cLen {
			data := collections[k3] - collections[k2]
			if max < data {
				max = data
			}
		 }
		 k2++
	}
	return max
}

func lru(array []int,limit int, data int) {
	len := len(array)
	if limit > len {
		if (array) {

		} else {

		}
	} else {

	}
}

func main() {

	// arr := []int{50, 23, 9, 46, 81, 102, 99, 43, 32, 14}
	// countSort(arr)
	// arr2 := []int{101,109,107,103,108,102,103,110,107,103}
	// countSort2(arr2)
	type dataStru struct  {
		pre <T>s
		data int
		next string
	}
	as := []int{}
	data := dataStru{
		pre: nil,
		data: 12,
		next: nil,
	}
	// longestConsecutive(as)
	lru(as,12, 12)
}