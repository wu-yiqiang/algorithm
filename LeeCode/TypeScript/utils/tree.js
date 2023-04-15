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
        if (newNode.key < node.key) {
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
    BinaryTree.prototype.removeNode = function (n) {
        var _a, _b;
        var biNode = this.root;
        var node = this.traverseLeftRightChildrenTree(biNode, n);
        if (node === null || node === void 0 ? void 0 : node.key) {
            // 当要删除的节点为叶子节点
            if (!(node === null || node === void 0 ? void 0 : node.rightChild) && !(node === null || node === void 0 ? void 0 : node.leftChild)) {
                node = null;
                console.log('assda', node);
            }
            // 只有左边子树
            if ((node === null || node === void 0 ? void 0 : node.leftChild) && !(node === null || node === void 0 ? void 0 : node.rightChild)) {
                node = (_a = node === null || node === void 0 ? void 0 : node.leftChild) !== null && _a !== void 0 ? _a : null;
                console.log('assdakkkkkk');
            }
            // 只有右边子树
            if (!(node === null || node === void 0 ? void 0 : node.leftChild) && (node === null || node === void 0 ? void 0 : node.rightChild)) {
                node = (_b = node === null || node === void 0 ? void 0 : node.rightChild) !== null && _b !== void 0 ? _b : null;
                console.log('assdakkklllllllllllllkkk');
            }
            // 左右子树都存在
        }
        return biNode;
    };
    /* 查找节点 */
    BinaryTree.prototype.searchNode = function (n) {
        var biNode = this.root;
        var node = this.traverseLeftRightChildrenTree(biNode, n);
        if (node === null || node === void 0 ? void 0 : node.key)
            return true;
        return false;
    };
    /*遍历左右子树*/
    BinaryTree.prototype.traverseLeftRightChildrenTree = function (biNode, n) {
        if (biNode.key === n)
            return biNode;
        // 遍历右子树
        if (n > biNode.key && biNode.rightChild)
            return this.traverseLeftRightChildrenTree(biNode.rightChild, n);
        // 遍历左子树
        if (n < biNode.key && biNode.leftChild)
            return this.traverseLeftRightChildrenTree(biNode.leftChild, n);
        return null;
    };
    return BinaryTree;
}());
var binTree = new BinaryTree(77, '123');
binTree.createBinaryTree(89, '2333');
binTree.createBinaryTree(34, '33455');
binTree.createBinaryTree(14, '223');
binTree.createBinaryTree(56, '90');
binTree.createBinaryTree(58, '80');
binTree.createBinaryTree(99, '888');
binTree.createBinaryTree(2, '76');
console.log(binTree.removeNode(2));
