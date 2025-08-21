interface ICollegeData {
    name: string;
    displayTeacherName(): void;
    location: string;
    established: number;
    getStudentList(): string[];
}

class CollegeData implements ICollegeData {
    name: string;
    location: string;
    established: number;

    constructor(name: string, location: string, established: number) {
        this.name = name;
        this.location = location;
        this.established = established;
    }

    displayTeacherName(): void {
        console.log("Displaying teacher names...");
    }

    getStudentList(): string[] {
        return ["Student A", "Student B", "Student C"];
    }

}

var college1 = new CollegeData("AKTU University", "Lucknow", 1990);

college1.displayTeacherName()
;
// college1.getStudentList();
console.log(college1.getStudentList());
