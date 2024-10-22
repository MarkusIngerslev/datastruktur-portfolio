import Fixedstack from "./fixedstack.js";

function testFixedStack() {
    const stack = new Fixedstack(10); // Opretter en stack med max størrelse på 3

    // Test push
    stack.push("H");
    stack.push("e");
    stack.push("l");
    stack.push("l");
    stack.push("o");
    stack.push("");
    stack.push("W");
    stack.push("o");
    stack.push("r");
    stack.push("l");
    stack.push("d");

    // Test peek
    console.group("peek tests");
    console.log(stack.size());
    console.log(stack.peek()); // "d"
    console.log(stack.get(4)); // "o"

    console.groupEnd();

    console.group("pop tests");
    console.log(stack.size());
    console.log(stack.pop()); // "l"
    console.log(stack.pop()); // "r"
    console.log(stack.pop()); // "d"
    console.log(stack.pop()); // "o"
    console.log(stack.pop()); // "W"
    console.log(stack.pop()); // " "
    console.log(stack.pop()); // "o"
    console.log(stack.pop()); // "l"
    console.log(stack.pop()); // "l"
    console.log(stack.pop()); // "e"
    console.log(stack.pop()); // "H"
    console.log(stack.size());
    console.groupEnd();

    console.log("All tests passed!");
}

testFixedStack();
