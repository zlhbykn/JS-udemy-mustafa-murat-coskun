//! fonksiyon tanımlama 

/*
function merhaba(name = "bilgi yok",age = "bilgi yok"){
    // if(typeof name === "undefined") name = "bilgi yok";
    
    // if(typeof age === "undefined") age = "bilgi yok";

    console.log(`isim: ${name} yaş: ${age}`);
}

merhaba("murat",25); // fonksiyon çağrısı (function call)
merhaba("ayşe",30);
merhaba();
merhaba("kadir");
*/

//! return

function squre(x) {
    return x*x;

    console.log("naber");
    // return fonk sonlanırır dolayısıyla altına yazılan hiç bir şey çalışmaz
    //return aynı zamanda fonk bi çıktı vermesini sağlar. 
}
function cube(x) {
    return x*x*x;
}

// let a = squre(12);
// a = cube(a);

let a = cube(squre(12));

console.log(a);


//!-----------------

/* 
function merhaba (){
    return"merhaba";
}

console.log(merhaba());
*/

//! function experssion

/*
const merhaba = function(name){
    console.log("merhaba " + name);
}

merhaba("murat");
*/


//! immediately invoked function expression (IIFE)

(function(name){
    console.log("merhaba " + name);
})("murat");

// eğer fonk objenin içindeyse method olur dışında ise fonk diye anılır.

const database = { //obje

    host: "localhost", // objenin özelliği

    add: function(){
        console.log ("eklendi"); //objenin methodu
    },

    get: function(){
        console.log ("elde edildi"); //objenin methodu
    },

    update: function(id){
        console.log (`id: ${id} güncellendi`); //objenin methodu
    },

    delete: function(id){
        console.log (`id: ${id} silindi`); //objenin methodu
    }
}

console.log(database.host);

database.add();

database.delete(10);
