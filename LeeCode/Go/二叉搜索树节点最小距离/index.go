/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 // 解法一
func minDiffInBST(root *TreeNode) int {
    _,diff:=bst(root,-100001,100001)
    return diff
}

func bst(root*TreeNode,pre,diff int)(int,int){
    if root==nil{
        return pre,diff
    }
    pre,diff=bst(root.Left,pre,diff)
    if root.Val-pre<diff{
          diff=root.Val-pre
    }
    pre=root.Val
      pre,diff=bst(root.Right,pre,diff)
    return pre,diff
}

// 解法二
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
  var a[]int
func minDiffInBST(root *TreeNode) int {
    a=nil
    visit(root)
    min:=100
    for i:=0;i<len(a)-1;i++{
        if min>a[i+1]-a[i]{
            min=a[i+1]-a[i]
        }
    }
    return min
}

func visit(root *TreeNode){
    if root==nil{
        return
    }
    visit(root.Left)
    a=append(a,root.Val)
    visit(root.Right)
}