/* 构造二叉树 */
var BiNode = /** @class */ (function () {
    function BiNode(key, data) {
        this.key = key;
        this.data = data;
        this.isVisted = false;
        this.leftChild = null;
        this.rightChild = null;
    }
    return BiNode;
}());
;
var BinaryTree = /** @class */ (function () {
    function BinaryTree(key, data) {
        this.root = new BiNode(key, data);
    }
    /* 构造二叉树 */
    BinaryTree.prototype.createBinaryTree = function (key, data) {
        var newNode = new BiNode(key, data);
        if (!this.root) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode);
        }
    };
    /*  插入节点 */
    BinaryTree.prototype.insertNode = function (node, newNode) {
        if (newNode.data < node.data) {
            // 如果插入的节点值比父节点小则插入到左节点上反之则插入到右节点上
            if (node.leftChild === null) {
                node.leftChild = newNode;
            }
            else {
                this.insertNode(node.leftChild, newNode); // 递归找下一层的左侧节点（重点）
            }
        }
        else {
            if (node.rightChild === null) {
                node.rightChild = newNode;
            }
            else {
                this.insertNode(node.rightChild, newNode);
            }
        }
    };
    /* 搜索最小值 */
    BinaryTree.prototype.minValue = function () {
        var biNode = this.root;
        return this.searchLeftChild(biNode);
    };
    /*搜索右子树*/
    BinaryTree.prototype.searchLeftChild = function (node) {
        if (node.leftChild)
            return this.searchLeftChild(node.leftChild);
        if (!node.leftChild)
            return node.data;
    };
    /* 搜索第N小的值 */
    BinaryTree.prototype.minNValue = function () {
    };
    /* 搜索最大值 */
    BinaryTree.prototype.maxValue = function () {
        var biNode = this.root;
        return this.searchRightChild(biNode);
    };
    /*搜索右子树*/
    BinaryTree.prototype.searchRightChild = function (node) {
        if (node.rightChild)
            return this.searchLeftChild(node.rightChild);
        if (!node.rightChild)
            return node.data;
    };
    /* 搜索最N大的值 */
    BinaryTree.prototype.maxNValue = function () { };
    /* 删除一个节点 */
    BinaryTree.prototype.removeNode = function () { };
    /* 添加一个节点 */
    BinaryTree.prototype.addNode = function () { };
    /* 查找节点 */
    BinaryTree.prototype.searchNode = function () { };
    /* 中序遍历 */
    // 中序遍历所有节点（左根右）
    BinaryTree.prototype.inOrderTraverse = function () { };
    return BinaryTree;
}());
var binTree = new BinaryTree(77, 77);
binTree.createBinaryTree(89, 89);
binTree.createBinaryTree(34, 34);
binTree.createBinaryTree(14, 14);
binTree.createBinaryTree(56, 56);
console.log(binTree.maxValue());
