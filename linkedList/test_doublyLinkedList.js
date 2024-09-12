import doublyLinkedList from "./doublyLinkedList.js"; // Importer klassen

// Opret en ny instans af DoublyLinkedList
const list = new doublyLinkedList();

console.log("Tilføjer elementer til slutningen af listen:");
list.addLast(10);
list.addLast(20);
list.addLast(30);
list.dumpList();

console.log("\nTilføjer elementer til begyndelsen af listen:");
list.addFirst(5);
list.addFirst(1);
list.dumpList();

console.log("\nTester størrelsen af listen:");
console.log(`Antal noder i listen: ${list.size()}`);

console.log("\nTester clear() metoden:");
list.clear();
console.log(`Antal noder i listen efter clear: ${list.size()}`);
