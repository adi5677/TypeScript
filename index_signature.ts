// type userData = {
//     mobile: string;
//     id: number;
//     marks: number;
//     age: number;
//     semester: number;
// }

type userData = {
    name: string;
    id: number;
    mobile: string;
    [key: string]: string | number;
}

var userData: userData = {
    name: "Aditya Sharma",
    mobile: "123-456-7890",
    id: 9,
    marks: 98,
    age: 25,
    semester: 2
}