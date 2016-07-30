var todoList = {

    todos: [],
    displayTodos: function () {
        var displayTodoField = document.getElementById("displayTodoField");
        removeAll(displayTodoField);
        if (this.todos.length > 0) {
            var todo$,
            appendingList; 
            for (var i = 0; i < this.todos.length; i++) {
                todo$ = this.todos[i].todoText;
                if (this.todos[i].completed) {
                    appendingList = this.createListItem();
                    appendingList.textContent = "(X) " + todo$;
                    appendingList.appendChild(this.createDeleteButton(i));
                    displayTodoField.appendChild(appendingList);
                        //displayTodoField.appendChild(appendingList).textContent = "(X) " + todo$;
                    //appendingList.appendChild(this.createDeleteButton(i));
                    //displayTodoField.innerHTML = "<li>(X) "+todo$+"</li>";
                    console.log("(X) " + todo$);
                } else {
                    appendingList = this.createListItem();
                    appendingList.textContent = "(_) " + todo$;
                    appendingList.appendChild(this.createDeleteButton(i));
                    displayTodoField.appendChild(appendingList);
                        //displayTodoField.appendChild(appendingList).textContent = "(_) " + todo$;
                    //appendingList.appendChild(this.createDeleteButton(i));
                    //displayTodoField.innerHTML = "<li>(X) "+todo$+"</li>";
                    console.log("(_) " + todo$)
                }

            };
        } else {
            console.log("There is no todos");
        }

    },
    createListItem : function(){
        var listItemElement = document.createElement("LI");
        return listItemElement;
    },
    addTodo: function (todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    deleteTodo: function (pos) {
        
        this.todos.splice(pos-1, 1);
        this.displayTodos();
    },
    createDeleteButton : function(classNumber){
        var deleteButtonElement = document.createElement("button");
        deleteButtonElement.textContent = "delete";
        deleteButtonElement.id = classNumber+1;
        deleteButtonElement.className = "deleteButton";
        return deleteButtonElement;
    },
    changeTodo: function (pos, todoText) {
        pos = pos - 1;
        this.todos[pos].todoText = todoText;
        this.displayTodos();
    },
    toggleCompleted: function (pos) {
        pos = pos - 1;
        this.todos[pos].completed = !this.todos[pos].completed;
        this.displayTodos();
    },

    toggleAll: function () {

        var count = 0;

        for (var i = 0; i < this.todos.length; i++) {

            if (this.todos[i].completed === true) {
                count++;
            }
        }
        if (count === this.todos.length) {
            for (var i = 0; i < this.todos.length; i++) {
                this.todos[i].completed = false;
            };
        } else {

            for (var i = 0; i < this.todos.length; i++) {
                this.todos[i].completed = true;
            };

        }
        this.displayTodos();
        count = 0;
    }
};
/*--------------------*/
var displayTodosButton = document.getElementById("displayTodo");
var toggleAllButton = document.getElementById("toggleAll");
var addTodoButton = document.getElementById("addTodo");
var changeTodoButton = document.getElementById("changeTodo");
var toggleCompletedButton = document.getElementById("toggleCompleted");
var deleteTodoButtons = document.getElementById("displayTodoField");
var handels = {
    displayTodos: (function () {
        displayTodosButton.addEventListener("click", function () {
            todoList.displayTodos();
        }, false);
    })(),
    addTodo: (function () {
        var addTodoText = document.getElementById("addTodoField");
        addTodoButton.addEventListener("click", function () {
            todoList.addTodo(addTodoText.value);
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
        //var numberOfTodo = document.getElementById(1);
        
        deleteTodoButtons.addEventListener("click", function(event) {
            
            if(event.target.className === "deleteButton"){
            
            todoList.deleteTodo(Number(event.target.id));
                
            }

                
        }, false);
        
    })()

};
/*Remove all function*/
function removeAll(n) {
while (n.firstChild) {
n.removeChild(n.firstChild);
}
}
/*Remove all function*/
function debugge(funcToDebug){
    debugger;
    funcToDebug();
}
