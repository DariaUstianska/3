let birthYear = prompt("Введіть рік народження");

if (birthYear === null) {
    alert("Шкода, що ви не захотіли ввести свій рік народження.");
} else {
    let city = prompt("Введіть місто, в якому ви живете:");

    if (city === null) {
        alert("Шкода, що ви не захотіли ввести своє місто.");
    } else {
        let favoriteSport = prompt("Введіть ваш улюблений вид спорту:");

        if (favoriteSport === null) {
            alert("Шкода, що ви не захотіли ввести свій улюблений вид спорту.");
        } else {
            let currentYear = new Date().getFullYear();
            let age = currentYear - birthYear;

            let cityMessage = "";
            if (city === "Київ" || city === "Вашингтон" || city === "Лондон") {
                let country = "";
                switch (city) {
                    case "Київ":
                        country = "Україна";
                        break;
                    case "Вашингтон":
                        country = "США";
                        break;
                    case "Лондон":
                        country = "Велика Британія";
                        break;
                    default:
                        country = "не визначено";
                        break;
                }
                cityMessage = `Ти живеш у столиці ${country}`;
            } else {
                cityMessage = `Ти живеш у місті ${city}`;
            }

            let championsMessage = "";
            switch (favoriteSport) {
                case "Футбол":
                    championsMessage = "Круто! Хочеш стати Кріштіану Роналду?";
                    break;
                case "Баскетбол":
                    championsMessage = "Круто! Хочеш стати Майклом Джорданом?";
                    break;
                case "Бокс":
                    championsMessage = "Круто! Хочеш стати Майком Тайсоном?";
                    break;
                default:
                    championsMessage = "Круто! Хочеш стати чемпіоном у своєму улюбленому виді спорту?";
                    break;
            }

            alert(`
                Ваш вік: ${age}
                ${cityMessage}
                ${championsMessage}
            `);
        }
    }
}
