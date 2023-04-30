//! Array Destructing

/*
let number1,number2;

arr = [100,200,300,400];

number1 = arr[0];
number2 = arr[1];

console.log(number1,number2);
*/

/*
let number1,number2;

arr = [100,200,300,400];

[number1,number2]=arr;

console.log(number1,number2);
*/

/*
const [number1,number2] = arr;

console.log(number1,number2);
*/


//! obje destructing

/*
const numbers = {
    a:10,
    b:20,
    c:30,
    d:40,
    e:50
};

const {a:number1,c:number2,e:number3} = numbers;

console.log(number1,number2,number3);
*/

//! function destructing

/*
const getLangs = () => ["python","java","C++"];

const [lang1,lang2,lang3] = getLangs();
console.log(lang1,lang2,lang3);
*/

//! obje

const person = {
    name : "mustafa murat",
    year : 1993,
    salary : 3000,
    showInfos : () => console.log("bilgisayar gösteriliyor...")
}

const {name:isim,year:yil,salary:maas,showInfos:BilgileriGöster} = person;

console.log(isim,yil,maas);

BilgileriGöster();


