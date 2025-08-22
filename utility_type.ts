interface CollegeType {
    name: string,
    location: string,
    student: number,
    branch: number
}


//Partial
// let CollegeData: Partial<CollegeType> = {
//     name: "HBS College",
//     location: "Noida",
//     student: 5000,
//     branch: 10
// }

function getCollegeData(name: string): Partial<CollegeType> {
    return {
        name: name
    }
}

//Required
function getCollegeData2(name: string): Required<CollegeType> {
    return {
        name: "GLB clg Noida",
        location: "Delhi",
        student: 200,
        branch: 9

    }
}

//ReadOnly
var CollegeData3: Readonly<CollegeType> = {
    name: "GLB clg Noida",
    location: "Delhi",
    student: 200,
    branch: 9
};

//Omit
var CollegeData4: Omit<CollegeType, 'student' | 'branch'> = {
    name: "GLB clg Noida",
    location: "Delhi"
};

//Exclude
type APIStatus = Exclude<'loading' | 'error' | 'pending' | 'success', 'loading' | 'error'>;

var status: APIStatus = 'pending';
status = 'success';

//NonNullable
type RandomType = string | number | undefined | null | boolean | string[];
var RandomType: NonNullable<RandomType> = "Hello";

//Record
type CollegeCourses = Record<string, string>;
var courses: CollegeCourses = {
    "101": "Mathematics",
    "102": "Physics",
    "103": "Chemistry"
};
