"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function test1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(42);
        }, 2000);
    });
}
function test2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello, world!");
        }, 1000);
    });
}
test1().then(result => {
    console.log(result);
});
test2().then(result => {
    console.log(result);
});
//# sourceMappingURL=typed_promise.js.map