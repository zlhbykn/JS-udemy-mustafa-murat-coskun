// console.log(this);

// this üzerinde bulunduğu objeyi ifade eder burda this=window

// alert("merhaba");

//! Confirm methodu
/*
const cevap = confirm("emin misiniz?");

console.log(cevap);

if (cevap){
    console.log("silin gitsin");
}
else{
    console.log("silmeyin");
}
*/

// farklı bir yazımı aşağıdaki gibi

/*
if (confirm("emin misiniz?")){
    console.log("silin gitsin");
}
else{
    console.log("silmeyin");
}
*/

//! prompt methodu

/*
const cevap = prompt("2 + 2 = ?");

if(cevap == "4"){
    console.log("doğru");
}
else{
    console.log("yanlış");
}
*/

//! window özellikleri

let value;

value = window;
value = window.location;
value = window.location.host;
value = window.location.hostname;
value = window.location.port;
value = window.location.href;

/*
if(confirm("sayfa yenilensinmi?")){
    window.location.reload();
}
else{
    console.log("sayfa yenilenmedi");
}
*/


value = window.outerHeight;
value = window.outerWidth;


value = window.innerHeight;
value = window.innerWidth;


value = window.scrollX;
value = window.scrollY;





console.log(value);





























