// ! Var



/* 
var a;
a = 20;
console.log(a);

var name = "mustafa murat";
var name = "murat" // ikinci yazılanı kabul eder-hiyerarşi
console.log(name);

var name = "mustafa murat";
console.log(name);

var name = "murat"
console.log(name); //var ile birden fazla değişken oluşur
*/



// ! Let
/*
let name = "mustafa murat"; // let ile bir tek tanımlama yapılabilir yoksa hata verir
let name = "murat" 
console.log(name);

let a,b;
a = 10;
b = 20;
console.log(a+b);
*/


// ! const
/*
const name = "mustafa murat"
console.log(name);
name = "murat";
console.log(name); //değerimizi atama işlemi ile tekrardan değitiremiyoruz error veriyor

const a;
a = 10; // değer verme işlemini ilk başta vermek zorundasın sonradan atayamazsın error verir
console.log(a);
*/

const a = [1,2,3,4,5];
a.push(6); // a nın gösterdiği yer değişmişiyor gösterdiği yerin değeri değişiyor
console.log(a);
// yeni değer ataması yapınca hata veriyor. atanan yerin değeri değiştiğinde hata vermiyor

