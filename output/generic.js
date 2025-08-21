"use strict";
// function fruits(name: string | number | boolean): string {
//     return name.toString();
Object.defineProperty(exports, "__esModule", { value: true });
// }
function fruits(name) {
    return name;
}
let onlyFruits = fruits("Apple");
let onlyNumbers = fruits(100);
let onlyBooleans = fruits(true);
// fruits("Apple");
// fruits(100);
// fruits(true);
console.log(onlyFruits); // Output: Apple
console.log(onlyNumbers); // Output: 100
console.log(onlyBooleans); // Output: true
function userData20(Data) {
    return Data;
}
let userCollection = userData20(["Adi", "Golu", "Vikram"]);
//# sourceMappingURL=generic.js.map