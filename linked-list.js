class LinkedList {

    headNode = new Node();

    getHead() {
        return this.headNode;
    }

    setHead(newHeadNode) {
        this.headNode = newHeadNode;
    }

    append(value) {
        let temp = this.getHead();

        while (temp.nextNode != null) {
            temp = temp.nextNode;
        }

        temp.nextNode = new Node(value, null);
    }

    prepend(value) {
        let newNode = new Node(value);
        newNode.nextNode = this.getHead();
        this.setHead(newNode);
    }

    // function size doesn't include head node, if it were to include it, count would start at 1
    size() {
        let count = 0;
        let temp = this.getHead();
        while (temp.nextNode !== null) {
            count++;
            temp = temp.nextNode;
        }
        return count;
    }

    tail() {
        let temp = this.getHead();
        while (temp.nextNode !== null) {
            temp = temp.nextNode;
        }

        return temp;
    }

    at(index) {
        let temp = this.getHead();
        let counter = 0;

        while (temp.nextNode !== null && counter < index) {
            temp = temp.nextNode;
            counter++;
        }

        return temp;
    }

    pop() {
        let length = this.size();
        let temp = this.at(length);
        temp.nextNode = null;
        return temp;
    }

    contains(value) {
        let temp = this.getHead();

        while (temp.nextNode !== null) {
            if (temp.value === value) {
                return true;
            } else {
                temp = temp.nextNode;
            }
        }

        return false;
    }

    find(value) {
        let temp = this.getHead();
        let count = 0;

        while (temp.nextNode !== null) {
            if (temp.value === value) {
                return count;
            } else {
                count++;
                temp = temp.nextNode;
            }
        }

        return null;
    }

    toString() {
        let str = '';
        let temp = this.getHead();

        while (temp.nextNode !== null) {
            str += `( ${temp.value} ) => `;
            temp = temp.nextNode;
        }
        str += ' null';

        return str;
    }

    insertAt(value, index) {
        let prev = this.at(index - 1);
        let curr = this.at(index);
        prev.nextNode = new Node(value, curr);
    }

    removeAt(index) {
        if (index === this.size()) {
            let prev = this.at(index - 1);
            prev.nextNode = null;
        } else if (index + 1 < this.size()) {
            let prev = this.at(index - 1);
            let next = this.at(index + 1);
            prev.nextNode = next;
        }
    }
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}
