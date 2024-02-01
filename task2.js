// DZ #2(1)

let sentens1 = prompt('Enter your first line here:');
let sentens2 = prompt('Enter your second line here:');
let sentens3 = prompt('Enter your third line here:');

let results = sentens1 + " " + sentens2 + " " + sentens3;
console.log(results);

// DZ #2(2)

const number = 56789;
const digits = number.toString().split("");
let result = digits.join(" ");

console.log(result);