// local storage


//!set ıtem

/*
localStorage.setItem("hareket","burpee");
localStorage.setItem("tekrar",50);
*/

//!get ıtem

/*
const value = localStorage.getItem("tekrar");
console.log(value);
console.log(typeof value);
*/

//! clear local storage

//localStorage.clear();

//! örnek

/*
localStorage.setItem("hareket","burpee");
localStorage.setItem("tekrar",50);

console.log(localStorage.getItem("sport")); //null
*/

//! örnek

/*
if(localStorage.getItem("sport") === null){
    console.log("sorguladığınız veri bulunmuyor");
}else{
    console.log("sorguladığınız veri bulunuyor");
}
*/


//! local storage array yazma 

/*
const todos = ["todo 1","todo 2","todo 3"];

localStorage.setItem("todos",JSON.stringify(todos));

const value = JSON.parse(localStorage.getItem("todos"));
console.log(value);
*/

//! örnek

const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");

form.addEventListener("submit", addtodo);

function addtodo(e){
    const value = todoInput.value;
    let todos;
    if(localStorage.getItem("todos")=== null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(value);

    localStorage.setItem("todos",JSON.stringify(todos));

    e.preventDefault();
}









