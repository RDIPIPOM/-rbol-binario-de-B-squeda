export default class BinarySearchTree {
    constructor() {
        this._root = null;
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

    }

    reportInOrder() {
        //Down to left all
        if(this._root != null){
            this._downToLeftRecursive(this._root);
        }
    }

    _downToLeftRecursive(root){

    }

    _InOrderRecursive(root){

    }

    reportPreOrder() {

    }

    reportPostOrder() {
        
    }
}