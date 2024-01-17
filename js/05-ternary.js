// ======== 4. Тернарный оператор =========

if (10 < 12) {
    console.log("Условие верно");
} else {
    console.log("Условие НЕ верно");
}

// (условие) ? (условие верно) : (условие не верно);

10 < 12 ? console.log("Условие верно") : console.log("Условие НЕ верно");

let greeting;

if (10 < 12) {
    greeting = "Доброе утро";
} else {
    greeting = "Добрый день";
}

console.log(greeting);

let greeting;
greeting = 10 < 12 ? "Доброе утро" : "Добрый день";
console.log(greeting);

let greeting;
greeting = 10 < 12 ? "Доброе утро" : null;
console.log(greeting);

// ======== 4.1 Nullish Coalescing (Нулевое слияние) '??' =========
// Возвращает первый аргумент, если не 'нулевой' (null or undefined), иначе - второй
let name = null;
let text = "missing";
let result = name ?? text;

// ======== 4.2 The Optional Chaining Operator (?.) =========
// ?. Оператор возвращает udefined значение, если объект не определен или имеет значение NULL (вместо выдачи ошибки).

// Create an object:
const car = { type: "Fiat", model: "500", color: "white" };
// Ask for car name:
document.getElementById("demo").innerHTML = car?.name; //udefined
