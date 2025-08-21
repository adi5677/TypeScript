"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CollegeData {
    name;
    location;
    established;
    constructor(name, location, established) {
        this.name = name;
        this.location = location;
        this.established = established;
    }
    displayTeacherName() {
        console.log("Displaying teacher names...");
    }
    getStudentList() {
        return ["Student A", "Student B", "Student C"];
    }
}
var college1 = new CollegeData("AKTU University", "Lucknow", 1990);
college1.displayTeacherName();
// college1.getStudentList();
console.log(college1.getStudentList());
//# sourceMappingURL=collegeData.js.map