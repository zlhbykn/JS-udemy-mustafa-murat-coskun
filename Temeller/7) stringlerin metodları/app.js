//! String lerin methodları

let value;

const firstName = "Louis";
const lastName ="Armstrong";
const langs =  "Java,Python,C++";

value = firstName + lastName;
value = firstName + " " + lastName;
value ="Mustafa Murat ";
value += "Coşkun"; // value = value + "Coşkun";


//! length

value = firstName.length; //kaç kelime var

//! concat

value = firstName.concat(" ",lastName," ","Caz"); 
// value = firstName + " " +lastName + " " +"Caz"
// string'e başka stringler eklemek concat ile yapılır

//! tolowerCase-toUpperCase

value = firstName.toLowerCase(); // tüm karakterler küçük

value = firstName.toUpperCase(); // tüm karakterler büyük

//! eksendeki eleman

value = firstName[0]; // 0 eksenindeki harf
value = firstName[2]; // 2 eksenindeki harf
value = firstName[4]; // 4 eksenindeki harf
value = firstName[firstName.length - 1]; // 4 eksenindeki harf


//! indexOf 

value = firstName.indexOf("L"); // L karakteri 0 eksende
value = firstName.indexOf("o"); // o karakteri 1 eksende
value = firstName.indexOf("l"); // l karakteri olmadığından sonuç -1 olcak

//! Char At- eksenlerdeki elemanları bulmaya yarar

value = firstName.charAt(0);
value = firstName.charAt(firstName.length - 1); 

//! split 

value = langs.split(","); // parçalama yaparak ayrı ayrı yerleştirdi

//! replace

value = langs.replace("Python","CSS"); // bir karakter yerine başkasını koyma işlemi

//! Includes

value = langs.includes("Java"); // string içinde var true diye döndü
value = langs.includes("asdfasdf"); // string içinde yok false diye döndü




console.log(value);
