"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function loopFunction() {
    console.log("log");
    while (true) {
        // Infinite loop
        console.log("loop");
    }
}
function simple() {
    console.log("Hello");
    throw new Error("This function never returns");
}
//# sourceMappingURL=never.js.map