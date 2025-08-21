let userData20: number | string | boolean = "Aditya Sharma"
userData20 = true

if(typeof userData20 == "boolean") {
    console.log('this is a bool data type');
}
else if(typeof userData20 == "string") {
    console.log('this is a string data type');
}
else {
    console.log('this is a number data type');
}

function checkDataType(value: number | string | boolean): void {
    if (typeof value == "boolean") {
        console.log('this is a bool data type');
    } else if (typeof value == "string") {
        console.log('this is a string data type');
    } else {
        console.log('this is a number data type');
    }
}

class Product21 {

}

var p1 = new Product21();

class Order21 {

}

var o1 = new Order21();


// checkDataType(p1)
// checkDataType(o1)

var userData22: number | string | boolean = "John Doe";
userData22 = 30;

checkDataType(userData22);