// sets-kümeler-bir değeri sadece bir defa taşır


const mySet = new Set();

mySet.add(100);
mySet.add(100);
mySet.add(3.14);
mySet.add("mustafa");
mySet.add(true);
mySet.add([1,2,3]);
mySet.add({a:1,b:2});

const mySet2 = new Set([100,3.14,"mustafa"]);

// iki farklı set ekleme şekli tanımladık

console.log(mySet);
console.log(mySet2);

//! size

//console.log(mySet.size);

//! delete methodu

/*
mySet.delete("mustafa");
console.log(mySet);
*/

//! has methodu

/*
console.log(mySet.has("mustafa")); //true
console.log(mySet.has(3.14)); //true
console.log(mySet.has(2000)); //false
console.log(mySet.has([1,2,3])); //false
*/

//! for each döngüsü

/*
mySet.forEach(function(value){
    console.log(value);
})
*/

//! for of döngüsü
 
/*
for(let value of mySet){
    console.log(value);
}
*/

//! setlerden array oluşturma

/*
const array = Array.from(mySet);
console.log(array);
*/





