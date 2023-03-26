/* 构造二叉树 */
class BiNode {
	data:any //节点内容
	key:number //key值
	isVisted:boolean //是否遍历过
	leftChild:BiNode //左孩子
	rightChild:BiNode // 右孩子
	constructor(key:number,data:any) {
		this.key = key;
		this.data = data;
    this.isVisted = false
    this.leftChild = null
    this.rightChild = null
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
    if (!this.root) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }
  /*  插入节点 */
  public insertNode(node: BiNode, newNode: BiNode ) {
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
  /* 搜索最小值 */
  public minValue() {
    const biNode = this.root
    return this.searchLeftChild(biNode)
  }
  /*搜索右子树*/
  private searchLeftChild(node: BiNode) {
    if (node.leftChild) return this.searchLeftChild(node.leftChild)
    if (!node.leftChild) return node.data
  }
  /* 搜索第N小的值 */
  public minNValue() {

  }


  /* 搜索最大值 */
  public maxValue() {
    const biNode = this.root
    return this.searchRightChild(biNode)
  }
  /*搜索右子树*/
  private searchRightChild(node: BiNode) {
    if (node.rightChild) return this.searchLeftChild(node.rightChild)
    if (!node.rightChild) return node.data
  }
  /* 搜索最N大的值 */
  public maxNValue() {}
  /* 删除一个节点 */
  public removeNode() {}
  /* 添加一个节点 */
  public addNode() {}
  /* 查找节点 */
  public searchNode() {}

  /* 中序遍历 */
  // 中序遍历所有节点（左根右）
  inOrderTraverse() {}
}


const binTree = new BinaryTree(77,77)
binTree.createBinaryTree(89, 89)
binTree.createBinaryTree(34, 34)
binTree.createBinaryTree(14, 14)
binTree.createBinaryTree(56, 56)
console.log(binTree.maxValue())