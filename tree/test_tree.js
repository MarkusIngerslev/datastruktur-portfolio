import Tree from "./tree.js";

// Create a new tree
const tree = new Tree();

// Add some values
tree.addValue("A");
tree.addValue("B");
tree.addValue("C");
tree.addValue("D");

console.log("Initial tree:");
tree.dump();

// Find and remove a value
const nodeToRemove = tree.findValue("C");
if (nodeToRemove) {
  tree.removeValue("C");
  console.log("\nAfter removing 'C':");
  tree.dump();
}

// Add more values
tree.addValue("E");
tree.addValue("F");

console.log("\nFinal tree:");
tree.dump();
