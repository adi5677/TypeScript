"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let PersonData = {
    id: 1,
    name: "Adi Sharma",
    age: 24,
    isEmployed: true
};
let PersonDataX;
PersonDataX = "name";
PersonDataX = 30; // This will cause an error because age is a number, not a string
let PersonDataY;
PersonDataY = "isEmployed";
PersonDataY = false; // This will cause an error because isEmployed is a boolean, not a string
//# sourceMappingURL=keyOf.js.map