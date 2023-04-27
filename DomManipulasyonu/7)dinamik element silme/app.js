// dinamik element silme

const todoList = document.querySelector(".list-group");
const todos = document.querySelectorAll(".list-group-item");

//! remove methodu

//todos[1].remove();

//! remove child

//todoList.removeChild(todoList.lastElementChild);
todoList.removeChild(todos[3]);


console.log(todos);
console.log(todoList);