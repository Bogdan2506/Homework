// Створити масив, довжину та елементи якого задає користувач.
// Відсортувати масив за зростанням.
// Видалити елементи з масиву з 2 по 4 (включно!).
// У міру змін виводити вміст масиву на сторінку.

let length = parseInt(prompt(`Введіть довжину масиву:`));


if (length > 0) {
    let array = [];

    for (let i = 0; i < length; i++) {
        let element = parseInt(prompt(`Введіть ${i+1}-ий елемент масиву:`));
        array.push(element);
    }
    alert(`Ваш масив: ` + array);

    array.sort((a, b) => a - b);

    alert("Відсортований масив: " + array);
    array.splice(1, 3);
    alert("Відсортований масив після видалення елементів з 2 по 4: " + array);


} else(
    alert('Введено невірне число!')
);