var todoList = new Todo();

var displayTodosButton = document.getElementById("displayTodo");
var toggleAllButton = document.getElementById("toggleAll");
var addTodoButton = document.getElementById("addTodo");
var changeTodoButton = document.getElementById("changeTodo");
var toggleCompletedButton = document.getElementById("toggleCompleted");
var deleteTodoButtons = document.getElementById("displayedTodoField");
var changeTodosText = document.getElementById("displayedTodoField");

// metode that execute Immediatly but just wrapping in a {}
var handels = {
    displayTodos: (function () {
        window.addEventListener("load", function () {
            todoList.displayTodos();
        }, false);
    })(),
    addTodo: (function () {
        var addTodoText = document.getElementById("addTodoField");
        addTodoButton.addEventListener("click", function () {
            // adding a todo and text is the form
            todoList.addTodo(addTodoText.value);
            // reset the text form to "" for cleaning
            addTodoText.value = "";
        }, false);
    })(),
    changeTodo: (function () {

        var changeTodoField = document.getElementById("changeTodoField");
        var numberOfTodo = document.getElementById("numberOfTodo");
        changeTodoButton.addEventListener("click", function () {
            todoList.changeTodo(numberOfTodo.value, changeTodoField.value);
            numberOfTodo.value = "";
            changeTodoField.value = "";
        }, false);

        // events for changing todos li
        changeTodosText.addEventListener("click", function (event) {

            if (event.target.className === "listeItemTodo") {
                // if we leave the todo list to another

            }

        }, false);
    })(),
    toggleAll: (function () {
        toggleAllButton.addEventListener("click", function () {
            todoList.toggleAll();
        }, false);
    })(),
    toggleCompleted: (function () {
        var numberOfTodo = document.getElementById("numberOfTodo");
        toggleCompleted.addEventListener("click", function () {
            todoList.toggleCompleted(numberOfTodo.value);
            numberOfTodo.value = "";
        }, false);
    })(),
    deleteTodo: (function () {

        deleteTodoButtons.addEventListener("click", function (event) {

            if (event.target.className === "deleteButton") {

                todoList.deleteTodo(Number(event.target.id));

            }


        }, false);

    })()

};