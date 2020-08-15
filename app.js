const inputTodo = document.querySelector(".input_task");
const inputButton = document.querySelector(".add_task");
const toDoList = document.querySelector(".task_list");

// EventListeners
document.addEventListener("DOMContentLoaded", getTODO); 
inputButton.addEventListener("click", add_to_list);
toDoList.addEventListener("click", delete_Mark)
//Functions

function add_to_list(event){
    
    event.preventDefault();

    let text = inputTodo.value;

    console.log(text);
    

    // Creation of <div>
    const newDiv = document.createElement("div");
    newDiv.classList.add("listTask");

    // li
    const newLi = document.createElement("li");
    newLi.classList.add("listTaskLi");
    newLi.innerHTML = text;
    newDiv.appendChild(newLi);

    // Add TODO to localStore
    saveLocalTodos(text);
    
    // create mark button
    const newButtonMark = document.createElement("button");
    newButtonMark.classList.add("listMark")
    newButtonMark.innerHTML = "<i class ='fa fa-check'></i>"
    newDiv.appendChild(newButtonMark);

    // create delete button
    const newButtonDelete = document.createElement("button");
    newButtonDelete.classList.add("deleteList");
    newButtonDelete.innerHTML = "<i class='fa fa-trash'></i>";
    newDiv.appendChild(newButtonDelete);

    // append to main file
    toDoList.appendChild(newDiv);
    inputTodo.value = "";

}


function delete_Mark(event){
    
    const target = event.target;
    console.log( target);
    console.log( target.classList[0] )

    if( target.classList[0] == 'deleteList'){
        target.parentElement.classList.add("fallAnimation");
        removeLocalTodo(target.parentElement);
        target.parentElement.addEventListener("transitionend", function(){
            target.parentElement.remove();
        })
    }

    // Check for Completion of Task

    if( target.classList[0] == 'listMark'){
        target.parentElement.classList.toggle("completed_task");
    }
}

function saveLocalTodos(todo){
    let todo_List;
    if(localStorage.getItem("todo_List") === null){
        todo_List = [];
    }
    else{
        todo_List = JSON.parse(localStorage.getItem('todo_List'));
    }
    
    todo_List.push(todo);
    localStorage.setItem("todo_List", JSON.stringify(todo_List));
}

function getTODO(){
    let todo_list;
    if(localStorage.getItem("todo_List") === null){
        todo_List = [];
    }else{
        todo_List = JSON.parse(localStorage.getItem("todo_List"));
    }
    
    todo_List.forEach(function(todo_Element) {
        let text = todo_Element; 
        console.log("Knight King!!!")
        const newDiv = document.createElement("div");
        newDiv.classList.add("listTask");

        // li
        const newLi = document.createElement("li");
        newLi.classList.add("listTaskLi");
        newLi.innerHTML = text;
        newDiv.appendChild(newLi);
        
        // create mark button
        const newButtonMark = document.createElement("button");
        newButtonMark.classList.add("listMark")
        newButtonMark.innerHTML = "<i class ='fa fa-check'></i>"
        newDiv.appendChild(newButtonMark);

        // create delete button
        const newButtonDelete = document.createElement("button");
        newButtonDelete.classList.add("deleteList");
        newButtonDelete.innerHTML = "<i class='fa fa-trash'></i>";
        newDiv.appendChild(newButtonDelete);

        // append to main file
        toDoList.appendChild(newDiv);
        
    });
}

function removeLocalTodo(todo){
    let todo_list;
    if(localStorage.getItem("todo_List") === null){
        todo_List = [];
    }else{
        todo_List = JSON.parse(localStorage.getItem("todo_List"));
    }
    const todoIndex = todo.children[0].innerText;
    todo_List.splice(todo_List.indexOf(todoIndex), 1);
    localStorage.setItem("todo_List", JSON.stringify(todo_List));
}