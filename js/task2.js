// // DZ #2(1)

// let sentens1 = prompt('Enter your first line here:');
// let sentens2 = prompt('Enter your second line here:');
// let sentens3 = prompt('Enter your third line here:');

// let results = sentens1 + " " + sentens2 + " " + sentens3;
// console.log(results);

// DZ #2(2)


let number = parseInt(prompt("Введіть вашу п'ятизначне число:"));

// let number = 12345; 



let num5 = number % 10;
let num4 = parseInt((number % 100) / 10);
let num3 = parseInt((number % 1000) / 100);
let num2 = parseInt((number % 10000) / 1000);
let num1 = parseInt(number / 10000);

console.log(num1, num2, num3, num4, num5);