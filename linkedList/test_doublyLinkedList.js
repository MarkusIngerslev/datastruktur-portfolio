import doublyLinkedList from "./doublyLinkedList.js"; // Importer klassen

// Opret en ny instans af DoublyLinkedList
const list = new doublyLinkedList();

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
