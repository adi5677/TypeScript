enum WhoType {
    student = "student",
    teacher = "teacher",
    administrator = "administrator",
    management = "management"
}

var who: WhoType = WhoType.student;
who = WhoType.teacher;

console.log(WhoType.student); // Output: student
console.log(WhoType.teacher); // Output: teacher
console.log(WhoType.administrator); // Output: administrator
console.log(WhoType.management); // Output: management


enum Fruit {
    A = "apple",
    B = "banana",
    C = "cherry",
    D = "date"
}

var fruit: Fruit = Fruit.A;
fruit = Fruit.B;

console.log(Fruit.A); // Output: apple
console.log(Fruit.B); // Output: banana
console.log(Fruit.C); // Output: cherry
console.log(Fruit.D); // Output: date

enum Roles {
    admin ,
    user ,
    guest
}

var userRole: Roles = Roles.admin;
var userRole2: Roles = Roles.user;
var userRole3: Roles = Roles.guest;


console.log(userRole);
console.log(userRole2);
console.log(userRole3);