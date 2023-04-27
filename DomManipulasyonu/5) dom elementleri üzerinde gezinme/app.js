let value;

const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardRow = document.querySelector(".card.row");

value=todoList;
value=todo;
value=cardRow;

// child nodes-text dahil

value = todoList.childNodes;
value = todoList.childNodes[0];

// children

value = todoList.children;
value = todoList.children[0];
value = todoList.children[1];
value = todoList.children[todoList.children.length-1];
value = todoList.children[2].textContent="değişti";

value = cardRow;
value = cardRow.children;
value = cardRow.children[2].children[1].textContent="burası da değişti";

value = todoList;
value = todoList.children[0];
value = todoList.firstElementChild;
value = todoList.lastElementChild;
value = todoList.children.length;
value = todoList.childElementCount; // kaç çocuk var

// annesi

value = cardRow;
value = cardRow.parentElement;
value = cardRow.parentElement.parentElement;


// element kardeşleri

value =  todo;
value = todo.previousElementSibling; // bir önceki kardeş
value = todo.nextElementSibling; //bir sonraki kardeş
value = todo.nextElementSibling.nextElementSibling;

value= todo.previousElementSibling.previousElementSibling; // null iki üst kardeş yok
console.log(value);
