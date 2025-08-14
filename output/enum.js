"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WhoType;
(function (WhoType) {
    WhoType["student"] = "student";
    WhoType["teacher"] = "teacher";
    WhoType["administrator"] = "administrator";
    WhoType["management"] = "management";
})(WhoType || (WhoType = {}));
var who = WhoType.student;
who = WhoType.teacher;
console.log(WhoType.student); // Output: student
console.log(WhoType.teacher); // Output: teacher
console.log(WhoType.administrator); // Output: administrator
console.log(WhoType.management); // Output: management
var Fruit;
(function (Fruit) {
    Fruit["A"] = "apple";
    Fruit["B"] = "banana";
    Fruit["C"] = "cherry";
    Fruit["D"] = "date";
})(Fruit || (Fruit = {}));
var fruit = Fruit.A;
fruit = Fruit.B;
console.log(Fruit.A); // Output: apple
console.log(Fruit.B); // Output: banana
console.log(Fruit.C); // Output: cherry
console.log(Fruit.D); // Output: date
var Roles;
(function (Roles) {
    Roles[Roles["admin"] = 0] = "admin";
    Roles[Roles["user"] = 1] = "user";
    Roles[Roles["guest"] = 2] = "guest";
})(Roles || (Roles = {}));
var userRole = Roles.admin;
var userRole2 = Roles.user;
var userRole3 = Roles.guest;
console.log(userRole);
console.log(userRole2);
console.log(userRole3);
//# sourceMappingURL=enum.js.map