// =============  ToDo список задач  ================

const todoList = document.querySelector("#todo-list");
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");

todoForm.addEventListener("submit", formHandler);

function formHandler(event) {
    //Отменяем снандартное поведение (обновление формы после ввода)
    event.preventDefault();

    // Получаем название задачи из инпута
    const taskText = todoInput.value;

    // Создаем тег li через разметку
    // const li = `<li>${taskText}</li>`;

    // Добавлем разметку на страницу
    // todoList.insertAdjacentHTML("beforeend", li);

    // Создаем тег li с помощью создания элемента
    const newTask = document.createElement("li");
    newTask.innerText = taskText;

    // Создаем кнопку Удалить
    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("role", "button");
    deleteBtn.innerText = "Удалить";
    deleteBtn.style["margin-left"] = "15px";
    newTask.append(deleteBtn);

    // Добавляем событие по клику
    deleteBtn.addEventListener("click", function () {
        this.closest("li").remove();
    });

    // Вариант со стрелочной функцией
    // deleteBtn.addEventListener("click", (event) => {
    //     event.target.closest("li").remove();
    // });

    // Добавляем элемент на страницу
    todoList.append(newTask);

    // Очищаем поле ввода
    todoInput.value = "";

    // Фокус на поле ввода
    todoInput.focus();
}
