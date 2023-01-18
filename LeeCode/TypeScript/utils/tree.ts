/* 构造二叉树 */
class BiNode {
	data:any //节点内容
	key:number //key值
	isVisted:boolean //是否访问过
	leftChild:BiNode //左孩子
	rightChild:BiNode // 右孩子
	constructor(key:number,data:any) {
		this.key = key;
		this.data = data;
	}
};
class BinaryTree {
  root: BiNode
  constructor(key: number, data: any) {
    this.root = new BiNode(key, data)
  }
  /* 构造二叉树 */
  public createBinaryTree(key: number, data: any) {
    const newNode = new BiNode(key, data)
    // console.log(newNode)
    if (!this.root) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }
  /* 搜索最小值 */
  private minValue() {}
  /* 搜索第N小的值 */
  private minNValue() {}
  /* 搜索最大值 */
  private maxValue() {}
  /* 搜索最N大的值 */
  private maxNValue() {}
  /* 删除一个节点 */
  private removeNode() {}
  /* 添加一个节点 */
  private addNode() {}
  /* 查找节点 */
  private searchNode() {}
  /*  插入节点 */
  insertNode(node: BiNode, newNode: BiNode ) {
    console.log(node, newNode)
    if (newNode.data < node.data) {
      // 如果插入的节点值比父节点小则插入到左节点上反之则插入到右节点上
      if (node.leftChild === null) {
        node.leftChild = newNode
      } else {
        this.insertNode(node.leftChild, newNode) // 递归找下一层的左侧节点（重点）
      }
    } else {
      if (node.rightChild === null) {
        node.rightChild = newNode
      } else {
        this.insertNode(node.rightChild, newNode)
      }
    }
  }
  /* 中序遍历 */
  // 中序遍历所有节点（左根右）
  inOrderTraverse() {}
}


const binTree = new BinaryTree(1, 1)
binTree.createBinaryTree(2, 2)
binTree.createBinaryTree(3, 3)
binTree.createBinaryTree(4, 4)
binTree.createBinaryTree(5, 5)
console.log(binTree)