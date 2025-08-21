type PersonType = {
    id: number;
    name: string;
    age: number;
    isEmployed: boolean;
};

let PersonData: PersonType = {
    id: 1,
    name: "Adi Sharma",
    age: 24,
    isEmployed: true
}

type PersonKeys = keyof PersonType;

let PersonDataX: PersonType[PersonKeys];
PersonDataX = "name"
PersonDataX = 30; // This will cause an error because age is a number, not a string


let PersonDataY: PersonType[PersonKeys];
PersonDataY = "isEmployed";
PersonDataY = false; // This will cause an error because isEmployed is a boolean, not a string

