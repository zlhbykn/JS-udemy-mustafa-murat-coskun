//<input class="form-control" type="text" name="todo" id = "todo" placeholder="Bir Todo Girin">

const todoinput = document.querySelector("#todo");

let element;
element=todoinput;
element=todoinput.classList;
/*
todoinput.classList.add("newclass");
todoinput.classList.add("newclass2");
todoinput.classList.remove("form-control");
*/
element=todoinput;

//yada aşağıdaki gibi eklenebilir

//todoinput.className= "newclass newclass2";

element=todoinput;
element=todoinput.placeholder;
element=todoinput.getAttribute("placeholder");
todoinput.setAttribute("placeholder","naber");
todoinput.setAttribute("title","input");

element = todoinput.hasAttribute("requart"); //bu attribute varmı true-false
element = todoinput.hasAttribute("name"); //bu attribute varmı true-false

todoinput.removeAttribute("name");
element=todoinput;

console.log(element);
