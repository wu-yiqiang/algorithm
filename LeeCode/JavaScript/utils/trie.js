/* 构造字典数 */

function TreeNode(val) {
    this.key = val;
    this.cnt = 1;//字符串占用个数
    this.isEnd = false;
    this.value = null;
    this.children = new Map();
}
function Tree() {
    this.root = new TreeNode(null);
}
/* 方法 */
Tree.prototype = {
    /* 插入操作 */
    insert(str, value) {
        let node = this.root, len = str.length;
        /* 遍历字符串 */
        for (let i = 0; i < len; i++) {
            key = str[i];
            /* 查找是否有该子节点 */
            if (node.children[key] === undefined) {
                node.children[key] = new TreeNode(key);
            } else {
                node.children[key].cnt++;//记录经过字符串个数
            }
            /* 下一层 */
            node = node.children[key];
        }
        //尾部标志
        node.value = value;
        node.isEnd = true;
    },
    /* 查询操作 */
    query(str) {
        let node = this.root, len = str.length;
        for (let i = 0; i < len; i++) {
            let key = str[i];
            if (node.children[key] === undefined) {
                return false;
            } else {
                node = node.children[key];
            }
        }
        return node.isEnd ? node.value : false;
    },
    /* 删除操作   */
    delete(str) {
        if (this.query(str) === false) {
            console.log('不存在要删除的字符串');
            return;
        }
        let node = this.root, len = str.length;
        for (let i = 0; i < len; i++) {
            let key = str[i];
            if (node.children[key] === undefined) {
                return;
            } else {
                node.children[key].cnt--;
                /* 数量为0则删除该子树 */
                if (!node.children[key].cnt) {
                    delete node.children[key];
                    return;
                }
            }
            node = node.children[key];
        }
    }
}
/* test */
let tree = new Tree();
tree.insert('111');
tree.insert('121');
tree.insert('112');
// tree.delete("112");
console.log(tree)
