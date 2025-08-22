"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function classLogger(target) {
    console.log(`Class: ${target.name}`);
}
function methodLogger(target, key, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Method: ${key}, Args: ${JSON.stringify(args)}`);
        return originalMethod.apply(this, args);
    };
}
@classLogger
class CustomMaths {
    @methodLogger
    add(a, b) {
        return a + b;
    }
    @methodLogger
    subtract(a, b) {
        return a - b;
    }
}
const math = new CustomMaths();
console.log(math.add(5, 3));
console.log(math.subtract(10, 4));
//# sourceMappingURL=decorators.js.map