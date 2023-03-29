// Yorum satırı
// ! yorum satırı
// ? yorum satırı
//  * yorum satırı
//  todo torum satırı
/*   yorum satırı   */

//! değişken oluşturma

/* var a = 20;

var b = 10;

var c = 40;
console.log(a,b,c); */

//! Primitive Veri Tipleri (number,string,boolean,null,undefined)

var a = 10;  //Number veri tipi
console.log(typeof a);
var b = 3.14; //number veri tipi
console.log(typeof b);

var name = "mustafa" ; //string veri tipi
console.log(name);
console.log(typeof name);

var a = true; //boolean veri tipi-koşul durumunda kullanılır
console.log(a);
console.log(typeof a);

var b = false; //boolean veri tipi-koşul durumunda kullanılır
console.log(b);
console.log(typeof b);

var a = null; // null tipi veri-null hiç bir şey taşımayan veri tipi
console.log(a);
console.log(typeof a); // burda c# ile karıştırdığından object çıktısı veriyor

var c; //undefined veri tipi-değer verilmemiş veri
console.log(c);

//! Referance veri tipleri

var numbers = [1,2,3,4,5]; //object veri tipi
console.log(numbers);
console.log(typeof numbers); 
console.log(numbers[0]);

var person ={ // object veri tipi
    name :"mustafa murat",     
    age: 25
}
console.log(person);
console.log(typeof person);

var date = new Date(); //object veri tipi
console.log(date);
console.log(typeof date);

var merhaba = function(){ //function veri tipi
    console.log("merhaba");
}
console.log(merhaba);
console.log(typeof merhaba);







