let value;
const value1 = 10;
const value2 = 4;

//! aritemetik operatörler
/*
value = value1 + value2;
value = value1 - value2;
value = value1 * value2;
value = value1 / value2;
value = value1 % value2;
*/


value = Math.PI;
value = Math.E;


value = Math.round(3.6); //tam sayıya yuvarlama
value = Math.round(3.5);
value = Math.round(3.2);

value = Math.ceil(3.2); // yukarı yuvarlar
value = Math.ceil(3.7);

value = Math.floor(3.2); // aşağı yuvarlar
value = Math.floor(3.7);

value = Math.sqrt(16); // karakök alma
value = Math.sqrt(31);

value = Math.abs(-10); // mutlak değer alma
value = Math.abs(-15); 

value = Math.pow(8,3); // kuvvet alma 8in 3üncü kuvveti
value = Math.pow(4,2); 

value = Math.max(10,-1,100,32); // max değeri verme
value = Math.min(10,-1,100,32); // min değeri verme

value = Math.random(); 
/* 0 ile 1 arasında ondalıklı değer üretir. 0 dahil 1 dail değil. her yenilemede farklı değer verir */

value = Math.random() * 20 + 1; //1 ile 21 arası değer üreticek 21 dahil değil

value = Math.floor(Math.random() * 20 + 1); //1 ile 21 arası değerleri aşağı yuvarlar













console.log(value);
