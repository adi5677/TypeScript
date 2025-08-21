class student {
    login(name: string, password: string) {
        if(name && password) {
            console.log("Login successful");
        } else {
            console.log("Login failed");
        }
    }

    result(marks: number) {
        if(marks >= 50) {
            console.log("Result: Pass");
        } else {
            console.log("Result: Fail");
        }
    }
}

var s1 = new student();
console.log(s1.login("user", "pass"));
console.log(s1.result(60));
