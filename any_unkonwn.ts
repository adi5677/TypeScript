// var value: string | number | string[] = "Aditya";
var value: any = "Aditya";

value = 10;

value = ['Adi'];

value = true;
value = { name: "Aditya" };
console.log(value);



// Unknown

var value1: unknown;
value1 = "Aditya";
value1 = 10;
value1 = ['Adi'];
value1 = true;
value1 = { name: "Aditya" };


// console.log((value1 as string).toUpperCase());

