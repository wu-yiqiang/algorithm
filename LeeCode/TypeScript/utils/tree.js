/* 构造二叉树 */
var BiNode = /** @class */ (function () {
    function BiNode(key, data) {
        this.key = key;
        this.data = data;
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
        // console.log(newNode)
        if (!this.root) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode);
        }
    };
    /* 搜索最小值 */
    BinaryTree.prototype.minValue = function () { };
    /* 搜索第N小的值 */
    BinaryTree.prototype.minNValue = function () { };
    /* 搜索最大值 */
    BinaryTree.prototype.maxValue = function () { };
    /* 搜索最N大的值 */
    BinaryTree.prototype.maxNValue = function () { };
    /* 删除一个节点 */
    BinaryTree.prototype.removeNode = function () { };
    /* 添加一个节点 */
    BinaryTree.prototype.addNode = function () { };
    /* 查找节点 */
    BinaryTree.prototype.searchNode = function () { };
    /*  插入节点 */
    BinaryTree.prototype.insertNode = function (node, newNode) {
        console.log(node, newNode);
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
    /* 中序遍历 */
    // 中序遍历所有节点（左根右）
    BinaryTree.prototype.inOrderTraverse = function () { };
    return BinaryTree;
}());
var binTree = new BinaryTree(1, 1);
binTree.createBinaryTree(2, 2);
binTree.createBinaryTree(3, 3);
binTree.createBinaryTree(4, 4);
binTree.createBinaryTree(5, 5);
console.log(binTree);
