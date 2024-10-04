import Queue from "./queue.js";

window.addEventListener("load", init);

function init() {
    console.log("JavaScript is live! 🚀\n");
    testEnqueueAndSize();
    testDequeue();
    testPeek();
    testGet();
    testIterator();
    console.log("Alle tests er kørt.");
}

// Hjælpefunktion til at udskrive testresultater
function assert(condition, message) {
    if (!condition) {
        console.error(`Test fejlede: ${message}`);
    } else {
        console.log(`Test bestået: ${message}`);
    }
}

// Test enqueue og size metoder
function testEnqueueAndSize() {
    const queue = new Queue();
    assert(queue.size() === 0, "Ny kø skal være tom");

    queue.enqueue("første");
    assert(queue.size() === 1, "Størrelse skal være 1 efter første enqueue");

    queue.enqueue("anden");
    assert(queue.size() === 2, "Størrelse skal være 2 efter anden enqueue");
}

// Test dequeue metode
function testDequeue() {
    const queue = new Queue();
    queue.enqueue("første");
    queue.enqueue("anden");

    assert(queue.dequeue() === "første", "Dequeue skal returnere det første element");
    assert(queue.size() === 1, "Størrelse skal være 1 efter dequeue");
    assert(queue.dequeue() === "anden", "Dequeue skal returnere det andet element");
    assert(queue.size() === 0, "Kø skal være tom efter to dequeues");
    assert(queue.dequeue() === null, "Dequeue på tom kø skal returnere null");
}

// Test peek metode
function testPeek() {
    const queue = new Queue();
    assert(queue.peek() === null, "Peek på tom kø skal returnere null");

    queue.enqueue("test");
    assert(queue.peek() === "test", "Peek skal returnere det første element uden at fjerne det");
    assert(queue.size() === 1, "Størrelse skal forblive uændret efter peek");
}

// Test get metode
function testGet() {
    const queue = new Queue();
    queue.enqueue("første");
    queue.enqueue("anden");
    queue.enqueue("tredje");

    assert(queue.get(0) === "første", "Get(0) skal returnere det første element");
    assert(queue.get(1) === "anden", "Get(1) skal returnere det andet element");
    assert(queue.get(2) === "tredje", "Get(2) skal returnere det tredje element");
    assert(queue.get(3) === null, "Get med ugyldigt index skal returnere null");
}

// Test iterator
function testIterator() {
    const queue = new Queue();
    queue.enqueue("a");
    queue.enqueue("b");
    queue.enqueue("c");

    let result = "";
    for (const item of queue) {
        result += item;
    }
    assert(result === "abc", "Iterator skal gennemgå elementerne i korrekt rækkefølge");
}
