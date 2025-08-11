var sym = Symbol();
var sym2 = Symbol();

var sym3 = Symbol('adi');
var sym4 = Symbol('sharma');

// console.log(sym == sym2); // false
// console.log(sym);
// console.log(sym2);

console.log(sym == sym2); // false
console.log(sym3 == sym4); // false
console.log(sym == sym3); // false
console.log(sym2 == sym4); // false

console.log(sym);
console.log(sym2);
console.log(sym3);
console.log(sym4);

const id = Symbol('id');
const obj = {

    id: 10,
    name: 'adi'

}

console.log(obj.id);
