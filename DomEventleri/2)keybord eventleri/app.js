// klavye eventleri

//!keypress-harf ve rakamlarda çalışır

/*
document.addEventListener("keypress",run);

function run(e){
    console.log(e.which); //ascii tablosu
    console.log(e.key); 
}
*/

//!keydown-tüm tuşlarda çalışır-tuşa bastığın anda tetiklenir

/*
document.addEventListener("keydown",run);

function run(e){
    console.log(e.which); //ascii tablosu
    console.log(e.key); 
}
*/

//!keyup-tüm tuşlarda çalışır-tuşu bıraktığın anda tetiklenir

/*
document.addEventListener("keyup",run);

function run(e){
    console.log(e.which); //ascii tablosu
    console.log(e.key); 
}
*/


//! örnek

const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup",changeText);

function changeText(e){
    header.textContent = e.target.value;
    console.log(e.target.value);
}






