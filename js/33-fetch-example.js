// ====  Пример fetch c промисами получение данных по API   =======
// https://www.cbr-xml-daily.ru/
// https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=5 ## JSON: UAH >> USD, EUR, RUR, BTC
// https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json // Нацбанк

// Пример получения через 'then'
const url = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";
const response = fetch(url);
response
    .then((data) => {
        return data.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch("Error");

async function getCurrencies() {
    // 1. Получить данные с сервера
    // const url = "https://www.cbr-xml-daily.ru/daily_json.js";
    const url =
        "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";
    const response = await fetch(url);
    const data = await response.json();

    // 2. Отобразить эти данные на странице
    renderRates(data);
}

getCurrencies();

function renderRates(data) {
    let usdRate;
    let eurRate;
    let date;

    for (let item of data) {
        if (item.cc == "USD") {
            usdRate = item.rate.toFixed(2);
            date = item.exchangedate;
            // console.log("USD: ");
            // console.log(item);
            // console.log("usdRate: " + usdRate);
        } else if (item.cc == "EUR") {
            eurRate = item.rate.toFixed(2);
            date = item.exchangedate;
            // console.log("EUR: ");
            // console.log(item);
            // console.log("eurRate: " + eurRate);
        }
    }

    // 2. Отобразить эти данные на странице
    const usdElement = document.querySelector("#usd");
    const eurElement = document.querySelector("#eur");
    const dateElement = document.querySelector(".currency-date");

    dateElement.innerText = date;
    usdElement.innerText = usdRate;
    eurElement.innerText = eurRate;
}

// function renderRates(data) {
//     const usdRate = data.Valute.USD.Value.toFixed(2);
//     const eurRate = data.Valute.EUR.Value.toFixed(2);

//     // 2. Отобразить эти данные на странице
//     const usdElement = document.querySelector("#usd");
//     const eurElement = document.querySelector("#eur");

//     usdElement.innerText = usdRate;
//     eurElement.innerText = eurRate;
// }
