//! örnek 1
/*
const obj = { 
    test1: function(){
        console.log("Test 1");
    },
    test2: function(){
        console.log("test 2");
    }
}
//console.log(obj);

const emp = Object.create(obj);

emp.name = "mustafa";
emp.age = 25;
console.log(emp);
*/

//! örnek 2

function Person(){

}

Person.prototype.test1 = function(){
    console.log("test 1");
}

Person.prototype.test2 = function(){
    console.log("test 2");
}

function Employee(name,age){
    this.name = name;
    this.age = age;
}

Employee.prototype = Object.create(Person.prototype);

Employee.prototype.myTest = function(){
    console.log("myTest");
}

const emp = new Employee("mustafa",25);

console.log(emp);