type PersonDataA = {name:string, age:number, email:string};
type PersonDataB = {name:string, age:number, email:string};
type PersonData = PersonDataA & PersonDataB;

// type x = string | number | boolean;

var PersonDataA = {
    name: "adi",
    age: 30,
    email: "adi@example.com"
};


var PersonDataB = {
    name: "Golu",
    age: 30,
    email: "golu@example.com"
};


console.log(PersonDataA);
console.log(PersonDataB);
