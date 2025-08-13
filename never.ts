function loopFunction() {
    console.log("log");
    while (true) {
        // Infinite loop
        console.log("loop");

    }
}

function simple(): never {
    console.log("Hello");
    throw new Error("This function never returns");
}