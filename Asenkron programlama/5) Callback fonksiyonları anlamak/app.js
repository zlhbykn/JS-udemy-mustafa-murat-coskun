// Callback fonksiyonlar

const langs = ["python","java","C++"];

langs.forEach(function(lang){
    console.log(lang);
});

document.getElementById("btn").addEventListener("click",function(){
    console.log("tıkla");
});

//! asenkron işlemler
/*
function process1 (){
    setTimeout(function(){
        console.log("process 1");
    },3000);
    
}
function process2 (){
    setTimeout(function(){
        console.log("process 2");
    },2000);
    
}
process1();
process2();
console.log("naber");
*/


//! callback fonksiyon

/*
function process1 (callback){
    setTimeout(function(){
        console.log("process 1");
        callback();
    },3000);
   
}
function process2 (){
    setTimeout(function(){
        console.log("process 2");
    },2000);
    
}
process1(process2);
*/

//! örnek

function addLang(lang,callback){

    setTimeout(function(){
        langs.push(lang);
        console.log("eklendi");
        callback();
    },2000);
}

function getAllLangs(){
    setTimeout(function(){
        langs.forEach(function(lang){
            console.log(lang);
        });
    },1000);
}

addLang("javascript",getAllLangs);



