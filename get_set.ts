class EmpInfo {
    _name: string;
    age: number;
    _email: string;

    constructor(_name: string, age: number, _email: string) {
        this._name = _name;
        this.age = age;
        this._email = _email;
    }

    get name(): string {
        return "Mr. " + this._name;
    }

    set email(val: string) {
        this._email = "emp" + val;
    }

    getEmpInfo(): string {
        return `Name: ${this.name}, Age: ${this.age}, Email: ${this._email}`;
    }
}

var emp1 = new EmpInfo("Aditya", 20, "adis6469@gmail.com");
console.log(emp1.getEmpInfo());

emp1.email = "golu.in@example.com";
console.log(emp1.getEmpInfo());