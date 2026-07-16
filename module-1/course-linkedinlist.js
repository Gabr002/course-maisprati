class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class list {
    constructor() {
        this.head = null;
    }

    add(value) {
        const newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
        } else {
            let actual = this.head;

            while (actual.next != null) {
                actual = actual.next;
            }

            actual.next = newNode;
        }
    }

    get(position) {
        if (position > -1) {
            let actual = this.head;
            let i = 0;
            while (actual !== null && i < position) {
                actual = actual.next;
                i++;
            }
            return actual !== null ? actual.value : null;
        } else {
            return undefined;
        }
    }

    delete(position) {
        if (this.head === null || position < 0) {
            throw new RangeError('Index position is out of bounds');
        }

        if (position === 0) {
            this.head = this.head.next;
            return;
        }

        let actual = this.head;
        let i = 0;

        while (actual !== null && i < position) {
            actual = actual.next;
            i++;
        }

        // if(actual !== null){
        //     prev = value;
        // }

    }

    values() {
        let actual = this.head;
        let values = [];

        while (actual !== null) {
            values.push(actual.value);
            actual = actual.next;
        }

        return values;
    }
}