class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(value) {
        const newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }

    pop(value) {
        if (!this.top) {
            let poppedValue = this.top.value;
            this.top = this.top.next;
            this.size--;
            return poppedValue;
        }
    }
}