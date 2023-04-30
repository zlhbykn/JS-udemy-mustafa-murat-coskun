// maps(map veri tipi)-key(anahtar)-value(değer)


let myMap = new Map(); //oluşturma

console.log(myMap);
console.log(typeof myMap);

const key1 = "mustafa";
const key2 = {a:10,b:20};
const key3 = () => 2;

//set
myMap.set(key1,"string değer");
myMap.set(key2,"object literal değer");
myMap.set(key3,"function değer");

//get
console.log(myMap.get(key1));
console.log(myMap.get(key2));
console.log(myMap.get(key3));

console.log(myMap);

//map boyutu

console.log(myMap.size);



