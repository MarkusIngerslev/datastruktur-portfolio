import doublyLinkedList from "./doublyLinkedList.js"; // Importer klassen

// Opret en ny instans af DoublyLinkedList
const list = new doublyLinkedList();

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

// ========================================
// Test af addFirst og addLast
// ========================================
console.log("Tilføjer elementer til slutningen af listen:");
list.addLast("C");
list.addLast("A");
list.addLast("T");
list.dumpList();

console.log("\nTilføjer elementer til begyndelsen af listen:");
list.clear();
list.addFirst("T");
list.addFirst("A");
list.addFirst("C");
list.dumpList();

console.log("\nTester størrelsen af listen:");
console.log(`Antal noder i listen: ${list.size()}`);

console.log("\nTester clear() metoden:");
list.clear();
console.log(`Antal noder i listen efter clear: ${list.size()}`);

// ========================================
// Test af removeFirst og removeLast
// ========================================

list.clear();
list.addLast("C");
list.addLast("A");
list.addLast("T");
console.log("Før fjernelse:");
list.addLast(list.removeLast());
list.dumpList();

console.log("\nFjern første element:", list.removeFirst()); // Forventet output: C
list.dumpList(); // Forventet output: A, T

console.log("\nFjern sidste element:", list.removeLast()); // Forventet output: T
list.dumpList(); // Forventet output: A

// ========================================
// Test af removeNode
// ========================================

list.clear();
list.addLast("C");
list.addLast("A");
list.addLast("R");
list.addLast("T");
console.log("Før fjernelse:");
list.dumpList(); // Forventet output: C, A, R, T

const nodeToRemove = list.head.next; // Node med data A
console.log("\nFjerner node med data:", nodeToRemove.data);
list.removeNode(nodeToRemove);
list.dumpList(); // Forventet output: C, R, T

// ========================================
// Test af insertBeforeNode
// ========================================

list.clear();
list.addLast("C");
list.addLast("A");
list.addLast("T");
console.log("Før indsættelse:");
list.dumpList(); // Forventet output: C, A, T

const newNode = new Node("R");
list.insertAfterNode(newNode, list.head.next); // Indsæt R efter node med data A
console.log("\nEfter indsættelse af R efter A:");
list.dumpList(); // Forventet output: C, A, R, T

const newNode2 = new Node("E");
list.insertBeforeNode(newNode2, list.head.next); // Indsæt E før node med data A
console.log("\nEfter indsættelse af E før A:");
list.dumpList(); // Forventet output: C, E, A, R, T
