class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

function isCircular(head) {
    // circular linked list if head is null
    if (head == null)
        return true;

    let currentNode = head.next;

    while (currentNode != null && currentNode != head) {
        currentNode = currentNode.next;
    }

    return (currentNode == head);
}


const valThree = new Node(3, null);
const valTwo = new Node(2, valThree);
const valOne = new Node(1, valTwo);
valThree.next = valOne;

const circularResult = isCircular(valOne);
console.log("Is circular: " + circularResult);
