import Stack from "./stack.js";

function testStack() {
    const stack = new Stack();
    console.group("Testing Stack...");

    // Test af push()

    console.group("Pushing 10, 20, 30...");
    stack.push(10);
    stack.push(20);
    stack.push(30);
    console.log("Expected size: 3, Actual size: ", stack.size()); // Forventet størrelse: 3
    console.groupEnd();

    // Test af peek()
    console.group("Peeking top element...");
    console.log("Peeking top element, Expected: 30, Actual: ", stack.peek()); // Forventet: 30
    console.groupEnd();

    // Test af pop()
    console.group("Popping elements...");
    console.log("Popping top element, Expected: 30, Actual: ", stack.pop()); // Forventet: 30
    console.log("Expected size after pop: 2, Actual size: ", stack.size()); // Forventet størrelse: 2
    console.groupEnd();

    // Test af peek() igen
    console.group("Peeking top element...");
    console.log("Peeking top element, Expected: 20, Actual: ", stack.peek()); // Forventet: 20
    console.groupEnd();

    // Test af get()
    console.group("Getting elements at index 0 and 1...");
    console.log("Getting element at index 0 (top), Expected: 20, Actual: ", stack.get(0)); // Forventet: 20
    console.log("Getting element at index 1, Expected: 10, Actual: ", stack.get(1)); // Forventet: 10
    console.groupEnd();

    // Test af pop() indtil stakken er tom
    console.group("Popping elements...");
    console.log("Popping top element, Expected: 20, Actual: ", stack.pop()); // Forventet: 20
    console.log("Popping top element, Expected: 10, Actual: ", stack.pop()); // Forventet: 10
    console.log("Expected size after popping all: 0, Actual size: ", stack.size()); // Forventet størrelse: 0
    console.groupEnd();

    // Test af pop() fra tom stack
    try {
        console.group("Trying to pop from empty stack...");
        stack.pop(); // Dette skal kaste en fejl
    } catch (error) {
        console.log("Caught error as expected: ", error.message); // Forventet fejl: Stack underflow
        console.groupEnd();
    }

    // Test af peek() fra tom stack
    try {
        console.group("Trying to peek from empty stack...");
        stack.peek(); // Dette skal kaste en fejl
    } catch (error) {
        console.log("Caught error as expected: ", error.message); // Forventet fejl: Stack is empty
        console.groupEnd();
    }

    console.groupEnd();
    console.log("All tests finished.");
}

// Køre testene
testStack();
