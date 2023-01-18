/* 
  构造二叉树
*/
class Node {
  // 创建节点
  constructor(data) {
    this.root = this
    this.data = data
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null //初始化根节点
  }
  // 插入节点
  insert(data) {
    const newNode = new Node(data)
    const insertNode = (node, newNode) => {
      if (newNode.data < node.data) {
        // 如果插入的节点值比父节点小则插入到左节点上反之则插入到右节点上
        if (node.left === null) {
          node.left = newNode
        } else {
          insertNode(node.left, newNode) // 递归找下一层的左侧节点（重点）
        }
      } else {
        if (node.right === null) {
          node.right = newNode
        } else {
          insertNode(node.right, newNode)
        }
      }
    }
    if (!this.root) {
      this.root = newNode
    } else {
      insertNode(this.root, newNode)
    }
  }
  // 中序遍历所有节点（左根右）
  inOrderTraverse() {
    let backs = []
    const callback = (data) => {
      return data
    }
    const inOrderNode = (node, callback) => {
      if (node !== null) {
        inOrderNode(node.left, callback) // 递归遍历出左节点
        backs.push(callback(node.data)) // 将值push到数组里
        inOrderNode(node.right, callback) // 递归遍历出右节点
      }
    }
    inOrderNode(this.root, callback)
    return backs
  }
  // 先序遍历所有节点（根左右）
  preOrderTraverse() {
    let backs = []
    const callback = (data) => {
      return data
    }
    const inOrderNode = (node, callback) => {
      if (node !== null) {
        backs.push(callback(node.data)) // 将值push到数组里
        inOrderNode(node.left, callback) // 递归遍历出左节点
        inOrderNode(node.right, callback) // 递归遍历出右节点
      }
    }
    inOrderNode(this.root, callback)
    return backs
  }
  // 后序遍历所有节点（左右根）
  postOrderTraverse() {
    let backs = []
    const callback = (data) => {
      return data
    }
    const inOrderNode = (node, callback) => {
      if (node !== null) {
        inOrderNode(node.left, callback) // 递归遍历出左节点
        inOrderNode(node.right, callback) // 递归遍历出右节点
        backs.push(callback(node.data)) // 将值push到数组里
      }
    }
    inOrderNode(this.root, callback)
    return backs
  }
  //查找最小值
  // 这里可以利用search 查找指定节点下面的最小值
  min(node) {
    const minNode = (node) => {
      return node ? (node.left ? minNode(node.left) : node) : null
    }
    return minNode(node || this.root)
  }
  // 查找最大值
  max(node) {
    const maxNode = (node) => {
      return node ? (node.right ? maxNode(node.right) : node) : null
    }
    return maxNode(node || this.root)
  }
  //查找特定值
  search(data) {
    const searchNode = (node) => {
      if (node === null) return false
      if (node.data === data) {
        return node
      }
      return searchNode(data < node.data ? node.left : node.right, data)
    }
    return searchNode(this.root, data)
  }
  //从树中移除某个键
  remove(data) {
    // 删除节点复杂之处在于每次删除节点时候二叉树要根据不同情况改变结构 同样也需要递归
    const removeNode = (node, data) => {
      if (node === null) return null
      if (node.data === data) {
        if (node.left === null && node.right === null) return null
        if (node.left === null) return node.right
        if (node.right === null) return node.left
        if (node.left !== null && node.right !== null) {
          let _node = this.min(node.right)
          node.data = _node.data
          node.right = removeNode(node.right, data)
          return node
        }
      } else if (data < node.data) {
        node.left = removeNode(node.left, data)
        return node
      } else {
        node.right = removeNode(node.right, data)
        return node
      }
    }
    return removeNode(this.root, data)
  }
}

const tree = new BinarySearchTree()
tree.insert(11)
tree.insert(7)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
console.log(tree)

