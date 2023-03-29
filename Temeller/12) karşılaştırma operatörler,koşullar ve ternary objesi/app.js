// TODO karşılaştırma operatörleri

// == iki terim birbirine eşitmi true-false 
// === iki terimin değerleri ve tipleri eşitmi-aynımı
/* !=  iki terim birbirine eşit değilmi true-false                     */
/* !==                      */
// >
// <
// >=
// <=


console.log(2==2); //true
console.log("js"== "javascript"); //false

console.log(2 == "2");  //true  ? değerler aynı ama tip farklı
console.log(2 === "2"); //false

console.log( 4 > 2); // true
console.log( 2 > 4); // false

console.log (2 != 4); //true
console.log(2 != 2); //false

console.log(2 < 4); //true
console.log(4 < 2); //false

console.log(4 >= 2); //true
console.log(2 >=2); //true
console.log(2 >= 4); //false

console.log(4 <= 2); //false
console.log(2 <=2); //true
console.log(2 <= 4); //true


// TODO Mantıksal bağlaçlar

//! not(!) operatörü

console.log(!(2 == 2)); // not operatörü ile true dan false döndü
console.log(!(2 != 2)); // false den true oldu

//! and(&&) operatörü- sonucun true çıkması için tüm alt koşulların true olması lazım
// bir tane bile false varsa false olur

console.log(( 2==2 ) && ( "ahmet"== "ahmet" )); // true
console.log(( 2!=2 ) && ( "ahmet"== "ahmet" )); // false

//! or(||) operatörü-sonucun false çıkması için tüm alt koşulların false olması lazım
// bir tane bile true varsa true olur

console.log(( 4==2 ) || ("ahmet"=="ahmet")); //true
console.log(( 4==2 ) || ("ahmet"!="ahmet")); //false


// TODO if- else-else if
/* 
 if (kosul){
    if blok 
    sonuç true ise bu if bloğu çlışacak ama false olursa diğer bloğa geçicez
}
else{
    if koşulu sağlanmazsa else bloğuna geçer
} 
 */

const error = false;

if (error == true){
    console.log("hata oluştu");
}
else {
    console.log("hata oluşmadı");
}




const user = "mmc";
if (user === "mmc"){
    console.log("Kullanıcı bulundu");
}
else {
    console.log("Kullanıcı bulunmadı...");
}




const process = "7";

if(process === "1"){
    console.log("işlem1");
}
else if(process === "2"){
    console.log("işlem2");
}
else if(process === "3"){
    console.log("işlem3");
}
else if(process === "4"){
    console.log("işlem4");
}
else{
    console.log("geçersiz işlem");
}




const number = 120;

if (number === 100){
    console.log("sayı 100'e eşit");
}
else {
    console.log("sayı 100'e eşit değil");
}




//! Ternary operatörü


console.log(number===100 ? "sayı 100" :"sayı 100 değil")

if (number === 100) console.log("sayı 100");
else console.log("sayı 100 değil");

