// mause eventleri

const cardBody = document.querySelectorAll(".card-body")[1];

const title = document.querySelector("#tasks-title");

//! click eventi-tek tıklayınca oluşur

/*
title.addEventListener("click",run);

function run(e){
    console.log(e.type);
}
*/

//! duble click eventi-çift tıklayınca oluşur

/*
title.addEventListener("dblclick",run);

function run(e){
    console.log(e.type);
}
*/

//! mouse down eventi- basıp tuttuğumuz zaman oluşur

/*
title.addEventListener("mousedown",run);

function run(e){
    console.log(e.type);
}
*/

//! mouse up eventi -tıklamadan elimizi çekince oluşur 

/*
title.addEventListener("mouseup",run);

function run(e){
    console.log(e.type);
}
*/

//! mouse over eventi-elementin üzerine geldiğimizde gerkleşir

/*
title.addEventListener("mouseover",run);

function run(e){
    console.log(e.type);
}
*/

//! mouse out eventi-elementten çıktığımızda gerçekleşir

/*
title.addEventListener("mouseout",run);

function run(e){
    console.log(e.type);
}
*/

//! mouse enter ve mouse leave-sadece seçilen elemente girdiğinde ve çıktığında çalışır

cardBody.addEventListener("mouseenter",run);
cardBody.addEventListener("mouseleave",run);


function run(e){
    console.log(e.type);
}