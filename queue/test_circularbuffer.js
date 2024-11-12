import { CircularBuffer } from "./circularbuffer.js";

const buffer = new CircularBuffer(10);

// Tilføj elementer til bufferen
buffer.enqueue("A");
buffer.enqueue("B");
buffer.enqueue("C");

// Tjek bufferens status
console.log("Størrelse:", buffer.size()); // Output: 3
console.log("Kapacitet:", buffer.capacity()); // Output: 10
console.log("Er tom?", buffer.isEmpty()); // Output: false
console.log("Er fuld?", buffer.isFull()); // Output: false

// Peek på det næste element
console.log("Peek:", buffer.peek()); // Output: 'A'

// Hent elementer fra bufferen
console.log("Dequeue:", buffer.dequeue()); // Output: 'A'
console.log("Dequeue:", buffer.dequeue()); // Output: 'B'

// Tilføj flere elementer
buffer.enqueue("D");
buffer.enqueue("E");

// Brug get() til at hente elementer
console.log("Element ved indeks 0:", buffer.get(0)); // Output: 'C'
console.log("Element ved indeks 1:", buffer.get(1)); // Output: 'D'

// Fjern resterende elementer
console.log("Dequeue:", buffer.dequeue()); // Output: 'C'
console.log("Dequeue:", buffer.dequeue()); // Output: 'D'
console.log("Dequeue:", buffer.dequeue()); // Output: 'E'

// Tjek om bufferen er tom
console.log("Er tom?", buffer.isEmpty()); // Output: true

console.log("--------------------");

// Overfyld bufferen

/*
const smallBuffer = new CircularBuffer(2);
smallBuffer.enqueue("X");
smallBuffer.enqueue("Y");
// Dette vil kaste en fejl
smallBuffer.enqueue("Z");
*/

console.log("--------------------");

// Opret en tom buffer

/*
const emptyBuffer = new CircularBuffer(5);
// Dette vil kaste en fejl
emptyBuffer.dequeue();
*/
