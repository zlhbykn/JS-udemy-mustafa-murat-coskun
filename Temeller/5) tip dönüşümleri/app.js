let value;

// veri tiplerini string e çevirme işlemleri
value = String(123); //number-string oldu
value = String(3.14);
value = String(true); //boolean-string oldu
value = String(false); 
value = String( function() { console.log()}); //function-string oldu
value = String([1,2,3,4]);

value= (10).toString(); //yukarıdaki işlemlerin farklı yazılımı
value= (3.14).toString();

//veri tiplerini number e çevirme işlemleri

value = Number("123");
value = Number(null);
value = Number(undefined); //NaN-not a number- sayıya çevrilemez
value = Number("hello word"); //NaN
value = Number( function() { console.log()}); //NaN
value = Number([1,2,3,4]); //NaN

value = Number("3.14");
value = parseFloat("3.14");
value = parseInt("3.14");


console.log(value);
console.log(typeof value);






const a = "hello" + 34 ;


console.log(a);
console.log(typeof a);

