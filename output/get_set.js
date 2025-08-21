"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmpInfo {
    _name;
    age;
    _email;
    constructor(_name, age, _email) {
        this._name = _name;
        this.age = age;
        this._email = _email;
    }
    get name() {
        return "Mr. " + this._name;
    }
    set email(val) {
        this._email = "emp" + val;
    }
    getEmpInfo() {
        return `Name: ${this.name}, Age: ${this.age}, Email: ${this._email}`;
    }
}
var emp1 = new EmpInfo("Aditya", 20, "adis6469@gmail.com");
console.log(emp1.getEmpInfo());
emp1.email = "golu.in@example.com";
console.log(emp1.getEmpInfo());
//# sourceMappingURL=get_set.js.map