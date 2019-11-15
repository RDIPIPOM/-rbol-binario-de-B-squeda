export default class BinarySearchTree {
    constructor() {
        this._root = null;
        this._allNodes = "";
    }

    add(node) {
        if (this._root != null) {
            this._addRecursive(this._root, node);
        } else
            this._root = node;
    }

    _addRecursive(root, node) {
        if (node < root) {
            if (root.left != null)
                this._addRecursive(root.left, node);
            else
                root.left = node;
        } else {
            if (root.right != null)
                this._addRecursive(root.right, node);
            else
                root.right = node;
        }
    }

    query(code) {
        let productFound = '';
        if (this._root != null) {
            let root = this._root;
            while (productFound === '') {
                if (code < root.code) {
                    if (root.left != null)
                        root = root.left
                    else
                        break;
                } else if (code > root.code) {
                    if (root.right != null)
                        root = root.right;
                    else
                        break;
                } else
                    productFound = root.toString();
            }
        }

        return productFound;
    }

    inOrder() {
        this._allNodes = '';

        if (this._root != null) {
            this._inOrderRecursive(this._root);
        }

        return this._allNodes;
    }

    _inOrderRecursive(root) {
        if (root != null) {
            this._inOrderRecursive(root.left);
            this._allNodes += root.toString() + '<br>';
            this._inOrderRecursive(root.right);
        }
    }

    preOrder() {
        this._allNodes = '';

        if (this._root != null)
            this._preOrderRecursive(this._root);

        return this._allNodes;
    }

    _preOrderRecursive(root) {
        if (root != null) {
            this._allNodes += root.toString() + '<br>';
            this._preOrderRecursive(root.left);
            this._preOrderRecursive(root.right);
        }
    }

    postOrder() {
        this._allNodes = '';

        if (this._root != null)
            this._postOrderRecursive(this._root);

        return this._allNodes;
    }

    _postOrderRecursive(root) {
        if (root != null) {
            this._postOrderRecursive(root.left);
            this._postOrderRecursive(root.right);
            this._allNodes += root.toString() + '<br>';
        }
    }
}