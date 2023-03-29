let value;

const numbers = [43,56,33,23,44,35,5];

// const numbers2 =new Array(1,2,3,4,5,6,7); yukardakinin farklı yazımı

const langs = ["Python","Java","C++","Javascript"];

const a = ["merhaba",22,null,undefined,3.14];

//!uzunluk
value = numbers.length;

//!indexleme
value = numbers [0];
value = numbers [2];
value = numbers [numbers.length - 1];

//! herhangi bir indexteki değeri değiştirme

numbers[2] = 1000;
value = numbers;

//! indexof- değerin ekseni

value = numbers.indexOf(1000);

//! array'in sonuna değer ekleme-push

numbers.push(2000);
value = numbers;

//! array'in başına değer ekleme-unshift

numbers.unshift(3000);
value = numbers;

//! array'in sonundan değer atma

numbers.pop();
value = numbers;

//! array'in başından değer atma

numbers.shift();
value = numbers;

//! array'in belli bir kısmını atma -> 0 dan <3 ekadar eksenlerdeki değeri atma

numbers.splice(0,3);
value = numbers;

//! reverse- array i tersine çevirme 

numbers.reverse();
value = numbers;

//! ilk rakama göre array i küçükten büyüğe sıralama 

value = numbers.sort();

//! sayıları küçükten büyüğe sıralama

value = numbers.sort(function(x,y){
            return x - y
});

//! sayıları büyükten küçüğe sıralama

value = numbers.sort(function(x,y){
    return y - x
});













console.log(value);
