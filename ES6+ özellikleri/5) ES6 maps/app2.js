const cities = new Map();

cities.set("ankara",5);
cities.set("istanbul",15);
cities.set("izmir",4);

// for each

cities.forEach(function(value,key){
    console.log(key,value);
})

// for of

for(let [key,value] of cities){
    console.log(key,value);
}

//map keys

for(let key of cities.keys()){
    console.log(key);
}

// map values

for(let value of cities.values()){
    console.log(value);
}

//arraylerden map oluşturma

const array = [["key1","value1"],["key2","value2"]];

const lastMap = new Map(array);

console.log(lastMap);

//map ten array oluşturma

const citys = new Map();

citys.set("ankara",5);
citys.set("istanbul",15);
citys.set("izmir",4);

const arRay = Array.from(citys);

//[["ankara",5],["istanbul",15],["izmir",4]]

console.log(arRay);