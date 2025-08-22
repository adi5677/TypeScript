"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function updatedSum(target, key, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Calling ${key} with args: ${JSON.stringify(args)}`);
        return originalMethod.apply(this, args);
    };
    return descriptor.value;
}
class CustomMaths1 {
    add(a, b) {
        return a + b;
    }
    sum() {
        return this.add(5, 10);
    }
}
var math1 = new CustomMaths1();
// console.log(math1.add(5, 10));
console.log(math1.sum());
//# sourceMappingURL=decorators_in_function.js.map