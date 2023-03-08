// 24. 两两交换链表中的节点
// 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
const l1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null
      }
    }
  }
}
var swapPairs = function (head) {
  const dummy = new ListNode(0)
  dummy.next = head
  let current = dummy
  while (current.next != null && current.next.next != null) {
    // 初始化双指针
    const first = current.next
    const second = current.next.next
    // 更新双指针和 current 指针 first.next = second.next; second.next = first; current.next = second;
    // 更新指针
    current = current.next.next
  }
  return dummy.next
}

console.log(swapPairs(l1))