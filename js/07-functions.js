// =================== 5. Функции ===================

// Описание и вызов функции
console.log("Привет, дорогой пользователь!");

function sayHi() {
    console.log("Привет, дорогой пользователь!");
}

sayHi();

// 2 типа объявления функции:
// 1 - function declaration
function sayHi() {
    alert("Hi! From declaration");
}

// 2 - function expression
const sayHiAgain = function () {
    alert("Hi! From expression");
};

sayHiAgain();
