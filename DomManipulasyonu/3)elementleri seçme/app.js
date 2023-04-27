// elementi id göre seçme

let element;

element=document.getElementById("todo-form");
element=document.getElementById("tasks-title");

//element class a göre seçme

element=document.getElementsByClassName("list-group-item");
element=document.getElementsByClassName("list-group-item")[0];
element=document.getElementsByClassName("card-header");

// elementi tag a göre seçme

element=document.getElementsByTagName("li");
element=document.getElementsByTagName("div");

//query selector-css selector-tek bir element döner

element=document.querySelector("#todo-form");
element=document.querySelector("#tasks-title");


element=document.querySelector(".list-group-item");

element=document.querySelector("li");
element=document.querySelector("div");


//query selectorAll-birden fazla element seçmek için

element=document.querySelectorAll(".list-group-item")[2];
element=document.querySelectorAll(".list-group-item");


element.forEach(function(el) {
    console.log(el);
});









console.log(element);

