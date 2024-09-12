export default class doublyLinkedList {
    head = null;
    tail = null;

    // ========================================
    // metoder der behandler data objekter
    // ========================================

    // tilføjer et element til slutningen af listen
    addLast(data) {
        const newNode = new Node(data);
        this.addNodeLast(newNode);
    }

    // tilføjer et element til begyndelsen af listen
    addFirst(data) {
        const newNode = new Node(data);
        this.addNodeFirst(newNode);
    }

    // returnerer elementet på plads nummer index
    get(index) {}

    // finder plads nummer for det angivne element (payload)
    indexOf(data) {}

    // indsætter et nyt element efter plads nummer index
    insertAt(index, data) {}

    // indsætter et nyt element før plads nummer index
    insertBefore(index, data) {}

    // returnerer det første element i listen
    first() {}

    // returnerer det sidste element i listen
    last() {}

    // fjerner elementet fra listen (hvis det altså var der)
    remove(data) {}

    // fjerner elementet på det pågældende index
    removeIndex(index) {}

    // fjerner det første element i listen - og returnerer elementet
    removeFirst() {}

    // fjerner det sidste element i listen - og returnerer elementet
    removeLast() {}

    // ========================================
    // metoder til at operere direkte på nodes
    // ========================================

    // tilføjer en ny node til slutningen af listen
    addNodeLast(newNode) {
        if (this.tail === null) {
            // Hvis listen er tom
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Tilføj til slutningen af listen
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    // tilføjer en ny node i starten af listen
    addNodeFirst(newNode) {
        if (this.head === null) {
            // Hvis listen er tom
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Tilføj til starten af listen
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    // indsætter en ny node efter en eksisterende
    insertAfterNode(newNode, existingNode) {}

    // indsætter en ny node før en eksisterende
    insertBeforeNode(newNode, existingNode) {}

    // fjerner en node fra listen
    removeNode(existingNode) {}

    // returnerer noden på plads nummer index
    nodeAt(index) {}

    // bytter om på to nodes pladser i listen
    swapNodes(node1, node2) {}

    // ========================================
    // metoder der omhandler hele listen
    // ========================================

    // der fjerner alle nodes fra listen, og sørger for at den er tom
    clear() {
        this.head = null;
        this.tail = null;
    }

    // der returnerer antallet af nodes i listen
    size() {
        let count = 0;
        let current = this.head;
        while (current !== null) {
            count++;
            current = current.next;
        }
        return count;
    }

    // ========================================
    // Udvikling, testing og debugging
    // ========================================

    // der console.log'er alle data-elementer i listen
    dumpList() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}

class Node {
    next = null; // den peger hen på næste node
    prev = null; // den peger hen på forrige node
    data; // den peger hen på data i noden

    constructor(data) {
        this.data = data;
    }
}
