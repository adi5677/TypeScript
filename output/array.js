"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users = ['adi', 'sam', 'golu'];
var marks = [90, 80, 85];
var students = [
    { name: 'adi', age: 20 },
    { name: 'sam', age: 22 },
    { name: 'golu', age: 21 }
];
var collegeName = ['HBS College', 'Gl Bajaj'];
console.log(collegeName);
// collegeName.push('New College'); // This will cause an error since ReadonlyArray cannot be modified
students.push({ name: 'Ankit', age: 23 });
console.log(students);
marks.push(95);
console.log(marks);
//# sourceMappingURL=array.js.map