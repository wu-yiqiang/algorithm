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
  lists: BiNode[]
  constructor(key: number, data: any) {
    this.root = new BiNode(key, data)
    this.lists = []
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
  public minNValue(n :number) {
    this.lists = [];
    let biNode = this.root
    while (biNode != null || this.lists.length) {
      while (biNode != null) {
        this.lists.push(biNode);
        biNode = biNode.leftChild;
      }
      biNode = this.lists.pop();
      --n;
      if (n === 0) {
        break;
      }
      biNode = biNode.rightChild;
    }
    return biNode.data;
  }

  /* 搜索最大值 */
  public maxValue() {
    const biNode = this.root
    return this.searchRightChild(biNode)
  }

  /*搜索右子树*/
  private searchRightChild(node: BiNode) {
    this.lists.push(node.data)
    if (node.rightChild) return this.searchLeftChild(node.rightChild)
    if (!node.rightChild) return node.data
  }

  /* 搜索最N大的值 */
  public maxNValue(n: number) {
    this.lists = [];
    let biNode = this.root
    while (biNode != null || this.lists.length) {
      while (biNode != null) {
        this.lists.push(biNode);
        biNode = biNode.rightChild;
      }
      biNode = this.lists.pop();
      --n;
      if (n === 0) {
        break;
      }
      biNode = biNode.leftChild;
    }
    return biNode.data;
  }
  /* 删除一个节点 */
  public removeNode() {}
  /* 添加一个节点 */
  public addNode() {}
  /* 查找节点 */
  public searchNode(n: number) {
    const biNode = this.root
    return this.traverseChildrenTree(biNode, n)
  }

  private traverseChildrenTree(biNode: BiNode, n) {
    if (biNode.data === n) return true

    // 遍历右子树
    if (n > biNode.data && biNode.rightChild) this.traverseChildrenTree(biNode.rightChild, n)

    // 遍历左子树
    if (n < biNode.data && biNode.leftChild) this.traverseChildrenTree( biNode.leftChild, n)
    return false
  }

  /* 先序遍历(根左右) */
//  public  preOrderTraverseNode(callback) {
//    const biNode = this.root
//    if (biNode != null) {
//      callback(biNode.key);
//      this.preOrderTraverseNode(biNode.leftChild, callback);
//      this.preOrderTraverseNode(biNode.rightChild, callback);
//    }
//  }
//
//  // 中序遍历所有节点（左根右）
//  public  inOrderTraverseNode(callback) {
//    const biNode = this.root
//    if (biNode != null) {
//      this.inOrderTraverseNode(biNode.leftChild, callback);
//      callback(biNode.key);
//      this.inOrderTraverseNode(biNode.rightChild, callback);
//    }
//  }
//  //后序遍历所有节点（左右根）
//  public  postOrderTraverseNode(callback) {
//    const biNode = this.root
//    if (biNode != null) {
//      this.postOrderTraverseNode(biNode.leftChild, callback);
//      this.postOrderTraverseNode(biNode.rightChild, callback);
//      callback(biNode.key);
//    }
//  }
}


const binTree = new BinaryTree(77,77)
binTree.createBinaryTree(89, 89)
binTree.createBinaryTree(34, 34)
binTree.createBinaryTree(14, 14)
binTree.createBinaryTree(56, 56)
binTree.createBinaryTree(58, 58)
binTree.createBinaryTree(99, 99)
binTree.createBinaryTree(2, 2)
binTree.createBinaryTree(4, 4)
console.log(binTree.searchNode(0))