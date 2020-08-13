const inputTodo = document.querySelector(".input_task");
const inputButton = document.querySelector(".add_task");
const toDoList = document.querySelector(".task_list");
// EventListeners

inputButton.addEventListener("click", add_to_list);
toDoList.addEventListener("click", delete_Mark)
//Functions

function add_to_list(event){
    
    event.preventDefault();

    let text = inputTodo.value;

    console.log(text);
    

    // Creation of <li> in <div>
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
    inputTodo.value = "";

}

function delete_list(eventDelete){
    const deleteButton = eventDelete.target;

    if (deleteButton.classList[0] == 'deleteList') {
        const parentDelete = deleteButton.parentElement;
        parentDelete.remove();
    }
}

function delete_Mark(event){
    
    const target = event.target;
    console.log( target);
    console.log( target.classList[0] )

    if( target.classList[0] == 'deleteList'){
        target.parentElement.classList.add("fallAnimation");

        target.parentElement.addEventListener("transitionend", function(){
            target.parentElement.remove();
        })
    }

    // Check for Completion of Task

    if( target.classList[0] == 'listMark'){
        target.parentElement.classList.toggle("completed_task");
    }
}