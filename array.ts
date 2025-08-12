var users:string[] = [ 'adi', 'sam', 'golu' ]
var marks:number[] = [ 90, 80, 85 ]
var students:{ name: string, age: number }[] = [
    { name: 'adi', age: 20 },
    { name: 'sam', age: 22 },
    { name: 'golu', age: 21 }
]
var collegeName:ReadonlyArray<string> = ['HBS College', 'Gl Bajaj'];
console.log(collegeName);
// collegeName.push('New College'); // This will cause an error since ReadonlyArray cannot be modified

students.push({ name: 'Ankit', age: 23 });
console.log(students);
marks.push(95);
console.log(marks);
