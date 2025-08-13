"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stuData = "Aditya";
stuData = 20;
stuData = [];
function fruitsData(params) {
    if (typeof params === "string") {
        console.log("String data:", params);
    }
    else if (typeof params === "number") {
        console.log("Number data:", params);
    }
    else {
        console.log("Array data:", params);
    }
}
console.log(fruitsData("Apple"));
console.log(fruitsData(42));
//# sourceMappingURL=union.js.map