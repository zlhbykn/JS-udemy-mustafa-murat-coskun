// input eventleri

/*
document.addEventListener("DOMContentLoaded",load);

function load(e){
    console.log("sayfa yüklendi");
}
*/

const filter = document.getElementById("filter");
console.log(filter);

//! focus eventi-odaklandığında çalışır

/*
filter.addEventListener("focus",run);

function run(e){
    console.log(e.type);
}
*/

//! blur eventi-odaktan çıkıca çalışır

/*
filter.addEventListener("blur",run);

function run(e){
    console.log(e.type);
}
*/

//! paste eventi-herhengi bir yerden bir yazıyı kopyalayıp ve yapıştırırsan çalışır

/*
filter.addEventListener("paste",run);

function run(e){
    console.log(e.type);
}
*/

//! copy eventi - içerideki yazıyı kopyalarsan çalışır

/*
filter.addEventListener("copy",run);

function run(e){
    console.log(e.type);
}
*/

//! cut eventi - içerideki yazıyı kesersen çalışır

/*
filter.addEventListener("cut",run);

function run(e){
    console.log(e.type);
}
*/

//! select eventi- yazının tamamı yada bir kısmını seçince çalışır

/*
filter.addEventListener("select",run);

function run(e){
    console.log(e.type);
}
*/

