"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Partial
// let CollegeData: Partial<CollegeType> = {
//     name: "HBS College",
//     location: "Noida",
//     student: 5000,
//     branch: 10
// }
function getCollegeData(name) {
    return {
        name: name
    };
}
//Required
function getCollegeData2(name) {
    return {
        name: "GLB clg Noida",
        location: "Delhi",
        student: 200,
        branch: 9
    };
}
//ReadOnly
var CollegeData3 = {
    name: "GLB clg Noida",
    location: "Delhi",
    student: 200,
    branch: 9
};
//Omit
var CollegeData4 = {
    name: "GLB clg Noida",
    location: "Delhi"
};
var status = 'pending';
status = 'success';
var RandomType = "Hello";
var courses = {
    "101": "Mathematics",
    "102": "Physics",
    "103": "Chemistry"
};
//# sourceMappingURL=utility_type.js.map