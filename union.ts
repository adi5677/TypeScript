var stuData: string | number | [] = "Aditya";

stuData = 20;

stuData = [];

function fruitsData(params: string | number | []) {
    if (typeof params === "string") {
        console.log("String data:", params);
    } else if (typeof params === "number") {
        console.log("Number data:", params);
    } else {
        console.log("Array data:", params);
    }
}

console.log(fruitsData("Apple"));
console.log(fruitsData(42));
