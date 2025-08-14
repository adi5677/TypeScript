type DataType = {
    name: string;
    age: number;
    email: string;
}

type a = {
    name: string;
    age: number;
    email: string;
}

type b = {
    name: string;
    age: number;
    email: string;
}

type c = a | b; 

var empData: DataType = {
    name: "Prince",
    age: 20,
    email: "prince@example.com"
}

var stuData: DataType = {
    name: "raju",
    age: 18,
    email: "raju@example.com"
}