// DZ #3

const operation = prompt("Виберіть операцію (add, sub, mult, div):");
const num1 = parseFloat(prompt("Введіть перше число:"));
const num2 = parseFloat(prompt("Введіть друге число:"));

let result;
let operator;

switch (operation) {
    case 'add':
        result = num1 + num2;
        operator = '+';
        break;
    case 'sub':
        result = num1 - num2;
        operator = '-';
        break;
    case 'mult':
        result = num1 * num2;
        operator = '*';
        break;
    case 'div':
        if (num2 !== 0) {
            result = num1 / num2;
            operator = '/';
        } else {
            alert("Ділення на нуль неможливе!");
        }
        break;
    default:
        alert("Невірна операція!");
}


if (typeof result !== 'undefined') {
    console.log(num1 + ' ' + operator + ' ' + num2 + ' = ' + result);
}