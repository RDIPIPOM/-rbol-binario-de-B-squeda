export default class BinarySearchTree {
    constructor() {
        this._start = null;
    }

    add(node) {

    }

    query(code) {
        let aux = this._start;
        let objectFound = -1;
        while (aux != null && objectFound === -1) {
            if (aux.code === code)
                objectFound = aux;
            aux = aux.next;
        }

        return objectFound;
    }

    report() {
        let string = '';       
    }
}