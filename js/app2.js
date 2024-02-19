// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] Знайти суму та кількість позитивних елементів.
// Знайти мінімальний елемент масиву та його порядковий номер.
// Знайти максимальний елемент масиву та його порядковий номер.
// Визначити кількість негативних елементів.
// Знайти кількість непарних позитивних елементів.
// Знайти кількість парних позитивних елементів.
// Знайти суму парних позитивних елементів.
// Знайти суму непарних позитивних елементів.
// Знайти добуток позитивних елементів.
// Знайти найбільший серед елементів масиву, ост альні обнулити.



const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let positivNumbersCount = 0;
let positivSum = 0;
let dobytokPositive = 1;

for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        positivSum += array[i];
        dobytokPositive *= array[i];
        positivNumbersCount++;
    }
}

// Знайти мінімальний елемент масиву та його порядковий номер.
// Знайти максимальний елемент масиву та його порядковий номер.

let minElement = array[0];
let minIndex = 0;
let maxElement = array[0];
let maxIndex = 0;


for (let i = 1; i < array.length; i++) {

    if (array[i] < minElement) {

        minElement = array[i];
        minIndex = i;
    } else if (array[i] > maxElement) {
        maxElement = array[i];
        maxIndex = i;
    }
}


let negativeNumbersCount = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
        negativeNumbersCount++;
    }
}
// Знайти кількість непарних позитивних елементів.
// Знайти кількість парних позитивних елементів.

let positivNEparniCounter = 0;
let positivparniCounter = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] % 2 !== 0) {
        positivNEparniCounter++;
    } else if (array[i] > 0 && array[i] % 2 === 0) {
        positivparniCounter++;
    }
}


// Знайти суму парних позитивних елементів.
// Знайти суму непарних позитивних елементів.

let positivparnisum = 0;
let positivNeparniSum = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] % 2 === 0) {
        positivparnisum += array[i];
    } else if (array[i] > 0 && array[i] % 2 !== 0) {
        positivNeparniSum += array[i];
    }
}

// Знайти найбільший серед елементів масиву, остальні обнулити.
for (let i = 0; i < array.length; i++) {

    if (array[i] !== maxElement) {
        array[i] = 0;
    }
}


console.log(`Добуток позитивних елементів чисел: ${dobytokpositive}`);
console.log(`Сума позитивних непарних чисел: ${positivNeparniSum}`);
console.log(`Сума позитивних парних чисел: ${positivparnisum}`);
console.log("Кількість парних позитивних елементів: ", positivparniCounter);
console.log("Кількість непарних позитивних елементів: ", positivNEparniCounter);
console.log("max елемент масиву:", maxElement);
console.log("Порядковий номер max елемента:", maxIndex);
console.log("Мінімальний елемент масиву:", minElement);
console.log("Порядковий номер мінімального елемента:", minIndex);
console.log(`Сума позитивних чисел: ${positivSum}`);
console.log(`Кількість позитивних чисел: ${positivNumbersCount}`);
console.log(`Кількість negative чисел: ${negativeNumbersCount}`);
console.log("Масив з обнуленими елементами, крім найбільшого:", array);