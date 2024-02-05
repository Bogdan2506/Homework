let birthYear = prompt("Привіт. Введіть свій рік народження:");

if (birthYear === null) {
    alert("Шкода, що Ви не захотіли ввести свій рік народження.");
} else {
    let city = prompt("У якому місті ви живете?");


    if (city === null) {
        alert("Шкода, що Ви не захотіли ввести своє місто.");
    } else {

        let favoriteSport = prompt("Який ваш улюблений вид спорту?");


        if (favoriteSport === null) {
            alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту.");
        } else {

            let currentYear = new Date().getFullYear();


            let age = currentYear - birthYear;


            let message1 = "";
            if (city === "Київ") {
                message1 = "Ти живеш у столиці України: Київ.";
            } else if (city === "Вашингтон") {
                message1 = "Ти живеш у столиці США: Вашингтон.";
            } else if (city === "Лондон") {
                message1 = "Ти живеш у столиці Великої Британії: Лондон.";
            } else {
                message1 = `Ти живеш у місті ${city}.`;
            }



            let message = `Твій вік: ${age} років.\n${message1}\n`;

            let champion = "";
            if (favoriteSport === "футбол") {
                champion = "Кріштіану Роналду";
            } else if (favoriteSport === "баскетбол") {
                champion = "Леброн Джеймс";
            } else if (favoriteSpo === "теніс") {
                champion = "Рафаель Надаль";
            } else {
                champion = "новим чемпіоном";
            }
            let message2 = `Круто! Хочеш стати ${champion}?`;


            message += message2;
            alert(message);
        }
    }
}