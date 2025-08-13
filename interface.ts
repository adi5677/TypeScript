
interface Info {
    name: string;
    age: number;
    isEnrolled: boolean;
}


interface teacherInfo {
    name: string;
    age: number;
    isEnrolled: boolean;
    subject: string;
}


var studentObj: Info = {
    name: "Adi",
    age: 25,
    isEnrolled: true
}


var teacherObj = {
    name: "Mr. Sachin",
    age: 40,
    isEnrolled: false,
    subject: "Mathematics"
}


var managerObj = {
    name: "Mr. Sagar",
    age: 35,
    isEnrolled: true
}

console.log(studentObj);
console.log(teacherObj);
console.log(managerObj);
