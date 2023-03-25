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

func main() {
	// arr := []int{50, 23, 9, 46, 81, 102, 99, 43, 32, 14}
	// countSort(arr)
	arr2 := []int{101,109,107,103,108,102,103,110,107,103}
	countSort2(arr2)
}