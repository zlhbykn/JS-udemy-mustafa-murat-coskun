//! event bubbling
// kabarcıklanma gibi bir üst tag ı etkiliyor

/*
document.querySelector(".container").addEventListener("click",function run(){
    console.log("div container");
});

document.querySelector(".card.row").addEventListener("click",function run(){
    console.log("card row");
});

document.querySelectorAll(".card-body")[1].addEventListener("click",function run(){
    console.log("card body");
});
*/


//! event capturing veya delegation

const cardBody = document.querySelectorAll(".card-body")[1];

cardBody.addEventListener("click",run);

function run(e){
    if(e.target.className === "fa fa-remove"){
        console.log("silme işlemi");
    }
    if(e.target.id === "filter"){
        console.log("filtreleme işlemi");
    }
    if(e.target.id === "clear-todos"){
        console.log("tüm task temizleme işlemi")
    }
    //console.log(e.target);
}

