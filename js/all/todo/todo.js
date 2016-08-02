function Todo() {
    /*
    // calling something
    All.call(this, param); 
    */
    this.todos = [];
    this.displayTodos = function () {
        // ul to display todo
        var displayedTodoField = document.getElementById("displayedTodoField");
        // call the functionto reove all li items when displaying todos
        removeAll(displayedTodoField);
        // if there is todos show theme else display message
        if (this.todos.length > 0) {
            // var todo$ for todos text's
            var todo$,
                // var appendingList fo li's tag's
                appendingList;
            // for displaying
            for (var i = 0; i < this.todos.length; i++) {
                // var todo$ for todos text's
                todo$ = this.todos[i].todoText;
                // if completed write (x) before and (_) if not
                if (this.todos[i].completed) {
                    // var appendingList fo li's tag's
                    appendingList = this.createListItem();
                    // inserting text's in li's
                    appendingList.textContent = "(X) " + todo$;
                    //inserting delete button and note that id's is index +1 of the todo's
                    appendingList.appendChild(this.createDeleteButton(i));
                    // inserting li's in the ul
                    displayedTodoField.appendChild(appendingList);
                    // logging for test
                    console.log("(X) " + todo$);
                } else {
                    // var appendingList fo li's tag's
                    appendingList = this.createListItem();
                    // inserting text's in li's
                    appendingList.textContent = "(_) " + todo$;
                    //inserting delete button and note that id's is index +1 of the todo's
                    appendingList.appendChild(this.createDeleteButton(i));
                    // inserting li's in the ul
                    displayedTodoField.appendChild(appendingList);
                    // logging for test
                    console.log("(_) " + todo$);
                }
            }
        } else {
            // show the message
            console.log("There is no todos");
        }
    };
    // creating list's and making the li tag editable
    this.createListItem = function () {
        var listItemElement = document.createElement("li");
        // making the li tag editable 
        listItemElement.setAttribute("contenteditable", "true");
        // giveing the li a class Nme for event handling
        listItemElement.className = "listeItemTodo";
        return listItemElement;
    };
    // adding todo methode to todos array
    this.addTodo = function (todoText) {
        // pushing the {}
        this.todos.push({
            //todo text's
            todoText: todoText,
            // if completede true else false default is false
            completed: false
        });
        // displaying wath we push
        this.displayTodos();
    };
    // deleting a spesific todo
    this.deleteTodo = function (pos) {
        // eleminate the 0 whene positioning and delete with splice()
        this.todos.splice(pos - 1, 1);
        // showing wath we delete
        this.displayTodos();
    };
    // creating the delete button
    this.createDeleteButton = function (idNumber) {
        // creating the button
        var deleteButtonElement = document.createElement("button");
        // insrerting the text in the button
        deleteButtonElement.textContent = "delete";
        // inderting the id Note that the id is the index + 1
        deleteButtonElement.id = idNumber + 1;
        // inserting the class "deleteButton"
        deleteButtonElement.className = "deleteButton";
        // ineditable for not changing the text
        deleteButtonElement.setAttribute("contenteditable", "false");
        // return the complete delete button
        return deleteButtonElement;
    };
    // changing the text of a spesefic todo
    this.changeTodo = function (pos, todoText) {
        // position -1 cause we eliminate the zero
        pos = pos - 1;
        // replacing the spesefic text
        this.todos[pos].todoText = todoText;
        // return the todo
        this.displayTodos();
    };
    // changing completed todo to inverse
    this.toggleCompleted = function (pos) {
        // position -1 cause we eliminate the zero
        pos = pos - 1;
        // inversingg if true -> false else true
        this.todos[pos].completed = !this.todos[pos].completed;
        // displaying all todos
        this.displayTodos();
    };
    // inversing all completed todo to a one 
    // if one all is true all is false if all is false or one false all is true
    this.toggleAll = function () {
        // counting the completed === true
        var count = 0;
        //looping into the array
        for (var i = 0; i < this.todos.length; i++) {
            // counting the completed === true and incrementing count by 1
            if (this.todos[i].completed === true) {
                count++;
            }
        }
        // if all is true change all to false else chnge all to true
        if (count === this.todos.length) {
            // change all to false
            for (var j = 0; j < this.todos.length; j++) {
                this.todos[j].completed = false;
            }
        } else {
            // if one is false and more change all to true
            for (var k = 0; k < this.todos.length; k++) {
                this.todos[k].completed = true;
            }
        }
        // display all toggled
        this.displayTodos();
        // reseting count to 0
        count = 0;
    };

    Todo.prototype = Object.create(All.prototype, {
        constructor: {
            configurable: true,
            enumerable: true,
            value: Todo,
            writable: true
        }
    });
};

/*
//replacing something
Todo.prototype.toString = function () {
    var text = All.prototype.toString.call(this);
    return text.replace("xx", "xx");
};
*/