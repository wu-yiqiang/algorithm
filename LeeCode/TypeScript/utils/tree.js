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
        this.lists = [];
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
    BinaryTree.prototype.minNValue = function (n) {
        this.lists = [];
        var biNode = this.root;
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
    };
    /* 搜索最大值 */
    BinaryTree.prototype.maxValue = function () {
        var biNode = this.root;
        return this.searchRightChild(biNode);
    };
    /*搜索右子树*/
    BinaryTree.prototype.searchRightChild = function (node) {
        this.lists.push(node.data);
        if (node.rightChild)
            return this.searchLeftChild(node.rightChild);
        if (!node.rightChild)
            return node.data;
    };
    /* 搜索最N大的值 */
    BinaryTree.prototype.maxNValue = function (n) {
        this.lists = [];
        var biNode = this.root;
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
    };
    /* 删除一个节点 */
    BinaryTree.prototype.removeNode = function () { };
    /* 添加一个节点 */
    BinaryTree.prototype.addNode = function () { };
    /* 查找节点 */
    BinaryTree.prototype.searchNode = function (n) {
        var biNode = this.root;
        return this.traverseChildrenTree(biNode, n);
    };
    BinaryTree.prototype.traverseChildrenTree = function (biNode, n) {
        if (biNode.data === n)
            return true;
        // 遍历右子树
        if (n > biNode.data && biNode.rightChild)
            this.traverseChildrenTree(biNode.rightChild, n);
        // 遍历左子树
        if (n < biNode.data && biNode.leftChild)
            this.traverseChildrenTree(biNode.leftChild, n);
        return false;
    };
    return BinaryTree;
}());
var binTree = new BinaryTree(77, 77);
binTree.createBinaryTree(89, 89);
binTree.createBinaryTree(34, 34);
binTree.createBinaryTree(14, 14);
binTree.createBinaryTree(56, 56);
binTree.createBinaryTree(58, 58);
binTree.createBinaryTree(99, 99);
binTree.createBinaryTree(2, 2);
binTree.createBinaryTree(4, 4);
console.log(binTree.searchNode(0));
