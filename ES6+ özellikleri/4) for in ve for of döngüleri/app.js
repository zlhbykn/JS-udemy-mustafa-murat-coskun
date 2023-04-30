// for ın ve for of döngüleri

const person = {
    name:"mustafa murat",
    age:25,
    salary:3000
};

const langs = ["python","java","C++","php"];
const name = "mustafa";

//!for in döngüsü

//?object

/* 
for(let prop in person){
    console.log(prop,person[prop]);
}
*/

//? array

/*
for (let index in langs){
    console.log(index,langs[index]);
}
*/

//? string

/*
for(let index in name){
    console.log(index,name[index]);
}
*/

//! for of döngüsü

//? object-objelerin üzerinde for of ile gezemeyiz

/*
for(let value of person){
    console.log(value);
}
*/

//? array

/*
for(let value of langs){
    console.log(value);
}
*/

//? string

/*
for(let character of name){
    console.log(character);
}
*/

