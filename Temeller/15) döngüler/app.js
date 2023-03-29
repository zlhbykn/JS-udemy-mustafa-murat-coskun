//! while döngüleri

//?-----------
/*
let i = 0;
while(i<10){

    //sonsuz döngüye girmemesi için i ile bir işlem tanımlamalıyız.
    console.log(i);

    i = i+1; // i++ yada i+=1 şeklindede yazılır.

}
*/

//?----------

/*
let i =10;
while (i>0){
    console.log(i);

    i = i-1; // i-=1 yada i-- şeklinde yazılır.
}
*/

//?-----------

/*
let i =10;
while (i>0){
    console.log(i);

    i -= 2; 
}
*/

//! break ve continue

/*
let i = 0;
while(i<10){
    console.log(i);
    if(i==5){
        break; // burda işlemi sonlandırır.
    }
    i++;
}
*/

//?---------------
// continue döngüde olduğu yere kadar çalışır. sonra döngüde başa geri döner.

/*
let i = 0;
while(i<10){
    if(i==3 || i==5){
        i++; // sonsuz döngüden kurtarmak için işlemi tanımladık
        continue; // 0 ile 3 arası sonsuz döngü oldu. Başa döndü sürekli
    }
    console.log(i);
    i++;
}

*/


//! do while döngüsü

/*
let i = 0;
do {
    console.log(i);
    i++;

}while(i<10);
*/


//! for döngüleri

/*
const langs = ["python","javascript","java"];

let index = 0;
while(index < langs.length){

    console.log(langs[index]);
    index++;
    
}

// aynı döngüyü for ile yazalım

for(let index=0;index<langs.length;index++){
    console.log(langs[index]);
}
*/

//! forEach döngüsü

/*
const langs = ["python","javascript","java"];
langs.forEach(function(lang,index){
    console.log(lang,index);
});
*/

//! map fonk

/*
const users = [
    {name:"mustafa",age:25},
    {name:"zeynep",age:40},
    {name:"ali",age:12}
];

const names = users.map(function(user){
    return user.name;
});

const ages = users.map(function(user){z
    return user.age;
});

console.log(names);
console.log(ages);
*/


//! for in döngüsü

/*
const user = {
    name:"mustafa",
    age:25
};

for (let key in user){
    console.log(key,user[key]);
}
*/

