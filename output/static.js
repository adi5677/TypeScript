"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class company {
    name;
    location;
    established;
    constructor(name, location, established) {
        this.name = name;
        this.location = location;
        this.established = established;
    }
    displayCompanyInfo() {
        console.log(`Company Name: ${this.name}`);
        console.log(`Location: ${this.location}`);
        console.log(`Established: ${this.established}`);
    }
}
var c1 = new company("Tech Solutions", "San Francisco", 2005);
c1.displayCompanyInfo();
//# sourceMappingURL=static.js.map